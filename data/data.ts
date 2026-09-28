export interface AuthorData {
  name: string;
  role: string;
  bio: string;
  focusQuestion?: string;
  coreAspect?: string;
  quote?: string;
}

export interface FooterData {
  brandName: string;
  tagline: string;
  legal: {
    entityName: string;
    inn: string;
    ogrn: string;
    address?: string;
  };
  contacts: {
    email: string;
    phone: string;
    phoneDisplay: string;
    telegramUsername: string;
    telegramUrl: string;
    whatsappUrl?: string;
    instagramUrl?: string;
    vkUrl?: string;
    youtubeUrl?: string;
  };
  links: {
    privacyPolicy: string;
    termsOfService: string;
    offerAgreement: string;
    consentProcessing: string;
  };
  navigation: Array<{
    label: string;
    href: string;
  }>;
  copyright: string;
  disclaimer: string;
}

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const getAssetPath = (path: string): string => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("#") || path.startsWith("mailto:") || path.startsWith("tel:")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  // If path already starts with BASE_PATH, return as is
  if (BASE_PATH && cleanPath.startsWith(BASE_PATH)) {
    return cleanPath;
  }
  return `${BASE_PATH}${cleanPath}`;
};

export const siteData = {
  brand: {
    name: "Женщина-Бриллиант",
    subName: "Woman Diamond",
    tagline: "Живое пространство глубокой работы с женщиной, её внутренними сценариями и отношениями.",
    formulas: {
      invitation: "БУДЬ Женщиной-Бриллиантом",
      philosophy: "Мы притягиваем в свою жизнь не то, чего хотим умом, а то, кем являемся глубоко внутри",
      bigIdea: "Самая важная встреча в твоей жизни — встреча с собой",
    },
    authors: [
      {
        name: "Татьяна Мунтяну",
        role: "Глубина. Гипнотерапевт, мастер глубинных состояний",
        coreAspect: "Внутренний сценарий и бессознательные процессы",
        focusQuestion: "Откуда начинается этот сценарий?",
        bio: "Более 15 лет практики работы с женщинами. Путь от работы с телом к гипнотерапии, регрессивным практикам, исцелению родовых сценариев и трансформации внутренних состояний.",
        quote: "«Мы не создаём из тебя другую женщину. Мы помогаем тебе увидеть и проявить ту, которая уже есть внутри.»",
      },
      {
        name: "Юрий Бузько",
        role: "Интеграция. Автор книги «Последняя иллюзия», наставник",
        coreAspect: "Паттерны поведения и перенос в реальные отношения",
        focusQuestion: "Как теперь начать жить и действовать иначе?",
        bio: "Академическая психологическая база, автор бестселлера «Последняя иллюзия». Эксперт по мужскому восприятию, автоматическим реакциям, личным границам и выбору партнёра.",
        quote: "«Недостаточно понять, почему ты живёшь именно так. Нужно научиться жить и действовать иначе.»",
      },
    ] as AuthorData[],
  },
  
  footer: {
    brandName: "ЖЕНЩИНА-БРИЛЛИАНТ",
    tagline: "Живое пространство глубокой работы с женщиной, её внутренними сценариями и отношениями.",
    legal: {
      entityName: "ИП Мунтяну Татьяна / ИП Бузько Юрий",
      inn: "ИНН 772839210984",
      ogrn: "ОГРНИП 321774600129841",
      address: "г. Москва",
    },
    contacts: {
      email: "info@woman-diamond.com",
      phone: "+7 (999) 000-00-00",
      phoneDisplay: "+7 (999) 000-00-00",
      telegramUsername: "@Hypno_light_therapist",
      telegramUrl: "https://t.me/Hypno_light_therapist",
      whatsappUrl: "https://wa.me/",
      instagramUrl: "https://instagram.com/",
      vkUrl: "https://vk.com/",
      youtubeUrl: "https://youtube.com/",
    },
    links: {
      privacyPolicy: getAssetPath("/privacy-policy.html"),
      termsOfService: getAssetPath("/terms.html"),
      offerAgreement: getAssetPath("/offer.html"),
      consentProcessing: getAssetPath("/consent.html"),
    },
    navigation: [
      { label: "О пространстве", href: "#about" },
      { label: "Сценарии", href: "#patterns" },
      { label: "Философия", href: "#philosophy" },
      { label: "Самодостаточность", href: "#self-sufficient" },
      { label: "Кто такая Женщина-Бриллиант", href: "#diamond-woman" },
      { label: "Встреча с собой", href: "#meeting-self" },
      { label: "Отношения", href: "#relationships" },
      { label: "Проводники", href: "#guides" },
      { label: "Ритм недели", href: "#week-rhythm" },
      { label: "Первые 7 дней", href: "#first-7-days" },
      { label: "Диагностика", href: "#diagnostic" },
    ],
    copyright: `© ${new Date().getFullYear()} ЖЕНЩИНА-БРИЛЛИАНТ. ВСЕ ПРАВА ЗАЩИЩЕНЫ.`,
    disclaimer: "Материалы и практики пространства носят консультационный, развивающий и трансформационный характер. Результаты индивидуальны и зависят от личной вовлеченности в работу.",
  } as FooterData,
};

export default siteData;
