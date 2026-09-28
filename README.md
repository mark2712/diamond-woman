This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Production Deployment (VPS)

Данные подключения к боевому серверу хранятся в файле [`.env`](file:///.env).

### Быстрый деплой одной командой:
```bash
npm run deploy
```
или
```bash
python deploy.py
```

Этот скрипт автоматически:
1. Выполняет статическую сборку Next.js (`npm run build`).
2. Упаковывает сгенерированные файлы из `out/`.
3. Подключается по SSH/SFTP к серверу `185.246.155.29`.
4. Распаковывает файлы в `/var/www/diamond-woman`, выставляет права `www-data:www-data` и перезапускает Nginx.
5. Проверяет ответ сервера (HTTP 200).

- **Главная страница:** [https://retreats.guru/](https://retreats.guru/)
- **Страница ретрита:** [https://retreats.guru/retreat/](https://retreats.guru/retreat/)
- **Прямой IP:** [http://185.246.155.29/](http://185.246.155.29/)
- **Конфигурация Nginx на сервере:** `/etc/nginx/sites-available/diamond-woman`

