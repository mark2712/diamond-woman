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

export const siteData = {
  brand: {
    name: "Женщина-Бриллиант",
    subName: "Woman Diamond",
    tagline: "Живое пространство глубокой трансформации, внутренней самоценности и гармоничных отношений",
    authors: [
      {
        name: "Татьяна Мунтяну",
        role: "Проводник, гипнотерапевт, специалист по работе с бессознательным",
        bio: "Работает с глубинными подсознательными процессами, родовыми сценариями, внутренними установками и практиками трансформации состояний.",
      },
      {
        name: "Юрий Бузько",
        role: "Проводник, наставник, мастер работы с паттернами отношений",
        bio: "Отслеживает поведенческие паттерны, сценарии взаимодействия с мужчинами, скрытые зоны контроля и отказ от своей природы.",
      },
    ],
  },
  
  footer: {
    brandName: "ЖЕНЩИНА-БРИЛЛИАНТ",
    tagline: "Живое пространство глубокой работы с женщиной, её внутренними сценариями и отношениями.",
    legal: {
      entityName: "ИП Мунтяну Татьяна / ИП Бузько Юрий",
      inn: "ИНН 000000000000",
      ogrn: "ОГРНИП 000000000000000",
      address: "Россия, г. Москва",
    },
    contacts: {
      email: "contact@woman-diamond.ru",
      phone: "+7 (999) 000-00-00",
      phoneDisplay: "+7 (999) 000-00-00",
      telegramUsername: "@womandiamond_bot",
      telegramUrl: "https://t.me/womandiamond_bot",
      whatsappUrl: "https://wa.me/",
      instagramUrl: "https://instagram.com/",
      vkUrl: "https://vk.com/",
      youtubeUrl: "https://youtube.com/",
    },
    links: {
      privacyPolicy: "/privacy-policy.html",
      termsOfService: "/terms.html",
      offerAgreement: "/offer.html",
      consentProcessing: "/consent.html",
    },
    navigation: [
      { label: "О пространстве", href: "#about" },
      { label: "Сценарии", href: "#patterns" },
      { label: "Философия", href: "#philosophy" },
      { label: "Кто такая Женщина-Бриллиант", href: "#diamond-woman" },
      { label: "Отношения", href: "#relationships" },
      { label: "Проводники", href: "#guides" },
      { label: "Ритм недели", href: "#week-rhythm" },
      { label: "Диагностика", href: "#diagnostic" },
    ],
    copyright: `© ${new Date().getFullYear()} ЖЕНЩИНА-БРИЛЛИАНТ. ВСЕ ПРАВА ЗАЩИЩЕНЫ.`,
    disclaimer: "Материалы и практики пространства носят консультационный, развивающий и трансформационный характер. Результаты индивидуальны и зависят от личной вовлеченности в работу.",
  } as FooterData,
};

export default siteData;
