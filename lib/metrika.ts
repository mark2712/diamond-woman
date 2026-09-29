export const YM_ID = 90529942;

declare global {
  interface Window {
    ym?: (
      id: number,
      action: "init" | "reachGoal" | "hit" | "params",
      target?: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Безопасная отправка цели в Яндекс.Метрику
 * @param goalName Идентификатор цели (например 'zakaz', 'zakaz_telegram', 'whatsapp')
 * @param params Дополнительные параметры визита
 */
export function reachGoal(goalName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.ym === "function") {
    try {
      window.ym(YM_ID, "reachGoal", goalName, params);
      if (process.env.NODE_ENV !== "production") {
        console.log(`[Yandex.Metrika] reachGoal: ${goalName}`, params);
      }
    } catch (err) {
      console.warn("[Yandex.Metrika] reachGoal error:", err);
    }
  }
}
