#!/usr/bin/env python3
"""
Automated deployment script for Diamond Woman project.
Reads connection details from .env and deploys build to remote server.
"""

import os
import subprocess
import sys
import tarfile
import tempfile
import paramiko

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ENV_FILE = os.path.join(BASE_DIR, ".env")
OUT_DIR = os.path.join(BASE_DIR, "out")

def load_env(env_path):
    env = {}
    if not os.path.exists(env_path):
        return env
    with open(env_path, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if "=" in line:
                k, v = line.split("=", 1)
                env[k.strip()] = v.strip()
    return env

def main():
    env = load_env(ENV_FILE)
    host = env.get("SERVER_HOST", "185.246.155.29")
    user = env.get("SERVER_USER", "root")
    password = env.get("SERVER_PASS", "yL42jgVn7tmjJpNpmXTugW")
    remote_dir = env.get("SERVER_WEB_ROOT", "/var/www/diamond-woman")

    print(f"=== Diamond Woman Deployment to {host} ===")

    # 1. Run Next.js build
    print("\n[1/5] Building Next.js static export...")
    npm_cmd = "npm.cmd" if os.name == "nt" else "npm"
    res = subprocess.run([npm_cmd, "run", "build"], cwd=BASE_DIR)
    if res.returncode != 0:
        print("ERROR: Build failed. Aborting deployment.")
        sys.exit(1)

    if not os.path.exists(OUT_DIR):
        print(f"ERROR: Output directory {OUT_DIR} does not exist.")
        sys.exit(1)

    # 2. Package build into tar.gz
    archive_path = os.path.join(tempfile.gettempdir(), "diamond_build.tar.gz")
    print(f"\n[2/5] Packaging build into {archive_path}...")
    with tarfile.open(archive_path, "w:gz") as tar:
        for root, dirs, files in os.walk(OUT_DIR):
            for file in files:
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(full_path, OUT_DIR)
                tar.add(full_path, arcname=rel_path)
    size_mb = os.path.getsize(archive_path) / (1024 * 1024)
    print(f"Package ready ({size_mb:.2f} MB)")

    # 3. Connect via SSH
    print(f"\n[3/5] Connecting to {host} as {user}...")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect(host, username=user, password=password, timeout=15)

    # 4. Upload archive via SFTP
    remote_archive = "/tmp/diamond_build.tar.gz"
    print(f"\n[4/5] Uploading package to {remote_archive}...")
    sftp = ssh.open_sftp()
    sftp.put(archive_path, remote_archive)
    sftp.close()
    if os.path.exists(archive_path):
        os.remove(archive_path)

    # 5. Extract and apply permissions
    print(f"\n[5/5] Extracting to {remote_dir} and reloading Nginx...")
    commands = f"""
    mkdir -p {remote_dir}
    rm -rf {remote_dir}/*
    tar -xzf {remote_archive} -C {remote_dir}
    chown -R www-data:www-data {remote_dir}
    rm -f {remote_archive}
    systemctl restart nginx
    """
    stdin, stdout, stderr = ssh.exec_command(commands)
    out = stdout.read().decode()
    err = stderr.read().decode()
    if err:
        print("Remote output/warnings:", err)

    # Verify HTTP response
    stdin, stdout, stderr = ssh.exec_command("curl -I -s http://localhost/ | head -n 1")
    status_line = stdout.read().decode().strip()
    ssh.close()

    print("\n==========================================")
    print(f"Deployment SUCCESSFUL! ({status_line})")
    print(f"Live site: http://{host}/")
    print(f"Retreat page: http://{host}/retreat/")
    print("==========================================")

if __name__ == "__main__":
    main()
