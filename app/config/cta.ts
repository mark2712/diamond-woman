/**
 * Конфигурация призывов к действию (CTA), ссылок, попапов и аналитических событий
 */

export type CtaActionType = 
  | "TRY_7_DAYS"
  | "START_DIAGNOSTIC"
  | "JOIN_COMMUNITY"
  | "CONTACT_TG"
  | "CONTACT_WHATSAPP"
  | "CUSTOM";

export type CtaBehavior = "modal" | "link" | "scroll" | "custom";

export interface CtaConfigItem {
  id: CtaActionType;
  title: string;
  defaultLabel: string;
  behavior: CtaBehavior;
  url?: string;
  targetId?: string; // id секции для плавного скролла
  ymGoalName?: string; // Имя цели в Яндекс.Метрике (например, 'try_7_days_click')
  gaEventName?: string; // Имя события Google Analytics
}

export interface CtaSettings {
  ymCounterId?: number | string; // ID счетчика Яндекс Метрики (если будет установлен)
  defaultTelegramLink: string;
  defaultPaymentLink: string;
  defaultDiagnosticLink: string;
  actions: Record<CtaActionType, CtaConfigItem>;
}

export const ctaSettings: CtaSettings = {
  // Номер счетчика Яндекс.Метрики можно указать здесь (например, 99999999)
  ymCounterId: undefined,
  
  defaultTelegramLink: "https://t.me/womandiamond_bot",
  defaultPaymentLink: "https://t.me/womandiamond_bot?start=pay7days",
  defaultDiagnosticLink: "https://t.me/womandiamond_bot?start=diagnostic",

  actions: {
    TRY_7_DAYS: {
      id: "TRY_7_DAYS",
      title: "Попробовать 7 дней в сообществе",
      defaultLabel: "Попробовать 7 дней",
      behavior: "modal", // по умолчанию открывает попап с формой и выбором Telegram/оплаты
      url: "https://t.me/womandiamond_bot?start=try7days",
      ymGoalName: "cta_try_7_days",
      gaEventName: "try_7_days_click",
    },
    START_DIAGNOSTIC: {
      id: "START_DIAGNOSTIC",
      title: "Пройти диагностику с проводниками",
      defaultLabel: "Начать диагностику",
      behavior: "modal",
      url: "https://t.me/womandiamond_bot?start=diagnostic",
      ymGoalName: "cta_diagnostic",
      gaEventName: "diagnostic_click",
    },
    JOIN_COMMUNITY: {
      id: "JOIN_COMMUNITY",
      title: "Вступить в живое поле",
      defaultLabel: "Вступить в сообщество",
      behavior: "modal",
      url: "https://t.me/womandiamond_bot?start=community",
      ymGoalName: "cta_community",
      gaEventName: "community_click",
    },
    CONTACT_TG: {
      id: "CONTACT_TG",
      title: "Связаться в Telegram",
      defaultLabel: "Написать в Telegram",
      behavior: "link",
      url: "https://t.me/womandiamond_bot",
      ymGoalName: "cta_telegram",
      gaEventName: "telegram_click",
    },
    CONTACT_WHATSAPP: {
      id: "CONTACT_WHATSAPP",
      title: "Связаться в WhatsApp",
      defaultLabel: "Написать в WhatsApp",
      behavior: "link",
      url: "https://wa.me/",
      ymGoalName: "cta_whatsapp",
      gaEventName: "whatsapp_click",
    },
    CUSTOM: {
      id: "CUSTOM",
      title: "Действие",
      defaultLabel: "Узнать подробнее",
      behavior: "modal",
      ymGoalName: "cta_custom",
    },
  },
};

/**
 * Глобальный диспетчер событий для CTA кнопок
 */
export function triggerCtaAction(
  actionType: CtaActionType,
  options?: {
    customUrl?: string;
    modalSource?: string;
    onOpenModal?: (source: string) => void;
    extraPayload?: Record<string, unknown>;
  }
) {
  const config = ctaSettings.actions[actionType] || ctaSettings.actions.CUSTOM;

  // 1. Отправка цели в Яндекс Метрику (если доступен объект window.ym)
  if (typeof window !== "undefined") {
    const ymGoal = config.ymGoalName;
    if (ymGoal) {
      try {
        const ym = (window as unknown as { ym?: (id: unknown, action: string, target: string) => void }).ym;
        if (typeof ym === "function" && ctaSettings.ymCounterId) {
          ym(ctaSettings.ymCounterId, "reachGoal", ymGoal);
        }
      } catch (err) {
        console.warn("[Analytics] ym error:", err);
      }
    }

    // 2. Диспатч кастомного события для интеграций (CRM, GTM, dataLayer)
    try {
      const event = new CustomEvent("woman-diamond:cta", {
        detail: {
          action: actionType,
          config,
          options,
          timestamp: new Date().toISOString(),
        },
      });
      window.dispatchEvent(event);
    } catch {
      // Игнорируем в старых окружениях
    }
  }

  // 3. Выполнение основного поведения
  if (config.behavior === "modal") {
    if (options?.onOpenModal) {
      options.onOpenModal(options.modalSource || config.title);
      return;
    }
  }

  if (config.behavior === "scroll" && config.targetId && typeof document !== "undefined") {
    const el = document.getElementById(config.targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      return;
    }
  }

  // Если указан URL или режим link/fallback
  const destinationUrl = options?.customUrl || config.url;
  if (destinationUrl && typeof window !== "undefined") {
    window.open(destinationUrl, "_blank", "noopener,noreferrer");
  }
}
