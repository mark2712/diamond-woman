const CRM_API_URL = "https://msss.ru/crm/php/retreats_guru/api/send/index.php";
const CRM_API_TOKEN = "rg_sec_2026_buPvPSgXlgEOb3LS2fSwve2mqVwcfA68I2sLlN09nlCKVu85Ke";

export interface LeadData {
  name: string;
  phone?: string;
  contact?: string;
  email?: string;
  country?: string;
  date?: string;
  intention?: string;
  comment?: string;
  source?: string;
}

export async function sendLead(data: LeadData): Promise<{ success: boolean; error?: string }> {
  try {
    const payload = {
      token: CRM_API_TOKEN,
      name: data.name,
      phone: data.phone || data.contact || "",
      contact: data.contact || data.phone || "",
      email: data.email || "",
      country: data.country || "",
      date: data.date || "",
      intention: data.intention || data.comment || "",
      comment: data.comment || data.intention || "",
      source: data.source || "Сайт",
    };

    const res = await fetch(CRM_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": CRM_API_TOKEN,
      },
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (!res.ok || !result.success) {
      throw new Error(result.error || "Не удалось отправить заявку");
    }

    return { success: true };
  } catch (err: unknown) {
    console.error("Lead send error:", err);
    const error = err instanceof Error ? err.message : "Ошибка при отправке заявки";
    return { success: false, error };
  }
}
