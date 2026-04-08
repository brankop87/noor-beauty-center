export const locales = ["sr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "sr";

export type SiteContent = {
  siteData: {
    name: string;
    description: string;
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    instagram: string;
    instagramHandle: string;
    address: string;
    workingHours: string;
  };
  navigation: {
    about: string;
    services: string;
    education: string;
    contact: string;
    book: string;
    switchLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    accent: string;
    titleEnd: string;
    primaryCta: string;
    secondaryCta: string;
    badges: string[];
    ownerRole: string;
    stats: Array<{
      value: string;
      label: string;
      text: string;
    }>;
  };
  about: {
    eyebrow: string;
    title: string;
    accent: string;
    titleEnd: string;
    paragraphs: string[];
  };
  servicesSection: {
    eyebrow: string;
    title: string;
    accent: string;
  };
  services: Array<{
    title: string;
    description: string;
    price: string;
  }>;
  reviewsSection: {
    eyebrow: string;
    title: string;
    accent: string;
    reviews: Array<{
      name: string;
      text: string;
    }>;
  };
  gallerySection: {
    eyebrow: string;
    title: string;
    description: string;
  };
  galleryImages: Array<{
    src: string;
    alt: string;
    category: string;
  }>;
  educationSection: {
    eyebrow: string;
    title: string;
    accent: string;
    intro: string;
    note: string;
    whatsappCta: string;
    instagramCta: string;
  };
  courses: Array<{
    level: string;
    title: string;
    description: string;
    items: string[];
  }>;
  contactSection: {
    eyebrow: string;
    title: string;
    accent: string;
    titleEnd: string;
    addressLabel: string;
    phoneLabel: string;
    instagramLabel: string;
    workingHoursLabel: string;
    whatsappCta: string;
    instagramCta: string;
    mapTitle: string;
  };
};

const sharedSiteData = {
  name: "Noor Beauty Center",
  phone: "+381601234567",
  phoneDisplay: "+381 60 123 4567",
  whatsapp: "https://wa.me/381601234567",
  instagram: "https://www.instagram.com/_noor_beauty_center_",
  instagramHandle: "@_noor_beauty_center_",
};

const siteContent: Record<Locale, SiteContent> = {
  sr: {
    siteData: {
      ...sharedSiteData,
      description:
        "Premium beauty studio sa fokusom na negu, estetiku i besprekoran izgled.",
      address: "Milovana Gusića 19/3, Kragujevac, Srbija",
      workingHours: "Pon-Sub po zakazivanju",
    },
    navigation: {
      about: "O nama",
      services: "Usluge",
      education: "Edukacija",
      contact: "Kontakt",
      book: "Rezervisi",
      switchLabel: "EN",
    },
    hero: {
      eyebrow: "Kragujevac · Nail studio & edukacija",
      title: "Nega, stil i ",
      accent: "znanje",
      titleEnd: "na jednom mestu.",
      primaryCta: "Zakazi termin odmah",
      secondaryCta: "Instagram",
      badges: ["Premium pristup", "Individualna nega", "Edukacija i usluge"],
      ownerRole: "Noor Beauty Center · usluge i edukacija",
      stats: [
        {
          value: "15+",
          label: "Godina iskustva",
          text: "Dugogodisnji rad, preciznost i postojan kvalitet.",
        },
        {
          value: "3",
          label: "Programa edukacije",
          text: "Za pocetnike, napredne polaznike i kreativan nail art rad.",
        },
      ],
    },
    about: {
      eyebrow: "Ko je Noor",
      title: "Mesto gde se spajaju ",
      accent: "preciznost",
      titleEnd: ", estetika i iskustvo.",
      paragraphs: [
        "Noor Beauty Center nije samo salon, vec prostor u kome klijentkinje dolaze po kvalitet, urednost i osecaj sigurnosti. Fokus je na postojanom radu, cistoj estetici i individualnom pristupu.",
        "Pored usluga, Noor razvija i edukacije za buduce nail artiste, tako da sajt pokazuje i lepotu rada i ozbiljnost znanja.",
      ],
    },
    servicesSection: {
      eyebrow: "Usluge",
      title: "Sve sto tvoji nokti ",
      accent: "zasluzuju",
    },
    services: [
      {
        title: "Manikir",
        description: "Precizan i uredan tretman za negovane i elegantne nokte.",
        price: "od 1.500 RSD",
      },
      {
        title: "Gel lak",
        description: "Postojan sjaj i besprekoran izgled kroz vise nedelja.",
        price: "od 2.000 RSD",
      },
      {
        title: "Nadogradnja noktiju",
        description: "Oblik, duzina i zavrsna obrada po zeljenom stilu.",
        price: "od 3.000 RSD",
      },
      {
        title: "Korekcija",
        description: "Osvezavanje izgleda i odrzavanje uredne, postojane forme.",
        price: "od 2.500 RSD",
      },
    ],
    reviewsSection: {
      eyebrow: "Iskustva klijenata",
      title: "Klijentkinje koje se ",
      accent: "vracaju",
      reviews: [
        {
          name: "Milica S.",
          text: "Najlepsi nokti koje sam ikada imala. Sve je uredno, precizno i trajno.",
        },
        {
          name: "Jelena M.",
          text: "Katarina radi savrseno, sve preporuke. Salon izgleda premium i oseca se kvalitet.",
        },
        {
          name: "Ana P.",
          text: "Edukacija je bila vrhunska. Sve jasno objasnjeno i prakticno.",
        },
      ],
    },
    gallerySection: {
      eyebrow: "Galerija",
      title: "Nasi radovi",
      description: "Pogledaj deo radova i estetiku koju klijentkinje mogu da ocekuju.",
    },
    galleryImages: [
      { src: "/images/gallery/nails-1.jpg", alt: "Elegant nude manicure", category: "Manikir" },
      { src: "/images/gallery/nails-2.jpg", alt: "Soft pink gel nails", category: "Gel lak" },
      { src: "/images/gallery/nails-3.jpg", alt: "Premium almond nail design", category: "Dizajn" },
      { src: "/images/gallery/nails-4.jpg", alt: "Glossy neutral manicure", category: "Manikir" },
      { src: "/images/gallery/nails-5.jpg", alt: "Refined feminine nail styling", category: "Gel lak" },
      { src: "/images/gallery/nails-6.jpg", alt: "Luxury salon nail finish", category: "Dizajn" },
      { src: "/images/gallery/nails-7.jpg", alt: "Clean elegant nail set", category: "Nadogradnja" },
      { src: "/images/gallery/nails-8.jpg", alt: "Polished premium manicure look", category: "Manikir" },
    ],
    educationSection: {
      eyebrow: "Edukacija",
      title: "Edukacije ",
      accent: "uskoro",
      intro:
        "Edukacije ce uskoro biti dostupne. Za vise informacija i prijave, javi se putem WhatsApp-a ili Instagrama.",
      note: "Soon education available.",
      whatsappCta: "Informacije na WhatsApp",
      instagramCta: "Pitaj na Instagramu",
    },
    courses: [
      {
        level: "Osnovni nivo",
        title: "Osnovna edukacija",
        description: "Za pocetnike koji zele jasan, praktican i profesionalan pocetak.",
        items: [
          "Priprema prirodnog nokta",
          "Osnovna higijena i radni proces",
          "Pravilno nanosenje materijala",
          "Oblik i zavrsna obrada",
        ],
      },
      {
        level: "Napredni nivo",
        title: "Napredna edukacija",
        description: "Za usavrsavanje tehnike, preciznosti i premium zavrsnice rada.",
        items: [
          "Napredne forme i korekcije",
          "Brzi i uredniji rad",
          "Estetika detalja",
          "Premium zavrsni izgled",
        ],
      },
    ],
    contactSection: {
      eyebrow: "Kontakt i rezervacije",
      title: "Lako do termina, lako do ",
      accent: "Noor",
      titleEnd: " salona",
      addressLabel: "Adresa",
      phoneLabel: "Telefon",
      instagramLabel: "Instagram",
      workingHoursLabel: "Radno vreme",
      whatsappCta: "WhatsApp",
      instagramCta: "Instagram",
      mapTitle: "Noor mapa",
    },
  },
  en: {
    siteData: {
      ...sharedSiteData,
      description:
        "A premium beauty studio focused on care, aesthetics, and impeccable results.",
      address: "Milovana Gusića 19/3, Kragujevac, Serbia",
      workingHours: "Mon-Sat by appointment",
    },
    navigation: {
      about: "About",
      services: "Services",
      education: "Education",
      contact: "Contact",
      book: "Book now",
      switchLabel: "SR",
    },
    hero: {
      eyebrow: "Kragujevac · Nail studio & training",
      title: "Care, style and ",
      accent: "expertise",
      titleEnd: "in one place.",
      primaryCta: "Book your appointment",
      secondaryCta: "Instagram",
      badges: ["Premium approach", "Personalized care", "Training and services"],
      ownerRole: "Noor Beauty Center · services and training",
      stats: [
        {
          value: "15+",
          label: "Years of experience",
          text: "Long-term expertise, precision, and consistent quality.",
        },
        {
          value: "3",
          label: "Training programs",
          text: "For beginners, advanced students, and creative nail art work.",
        },
      ],
    },
    about: {
      eyebrow: "About Noor",
      title: "A place where ",
      accent: "precision",
      titleEnd: ", aesthetics and experience meet.",
      paragraphs: [
        "Noor Beauty Center is more than a salon. It is a space where clients come for quality, neat work, and a sense of trust. The focus is on lasting results, clean aesthetics, and an individual approach.",
        "Alongside services, Noor also develops training for future nail artists, so the website presents both the beauty of the work and the seriousness of the knowledge behind it.",
      ],
    },
    servicesSection: {
      eyebrow: "Services",
      title: "Everything your nails ",
      accent: "deserve",
    },
    services: [
      {
        title: "Manicure",
        description: "A precise and polished treatment for elegant, well-groomed nails.",
        price: "from 1,500 RSD",
      },
      {
        title: "Gel polish",
        description: "Long-lasting shine and a flawless look for weeks.",
        price: "from 2,000 RSD",
      },
      {
        title: "Nail extensions",
        description: "Shape, length, and finishing tailored to your preferred style.",
        price: "from 3,000 RSD",
      },
      {
        title: "Refill",
        description: "Refreshing the look while maintaining a neat, durable finish.",
        price: "from 2,500 RSD",
      },
    ],
    reviewsSection: {
      eyebrow: "Client reviews",
      title: "Clients who keep ",
      accent: "coming back",
      reviews: [
        {
          name: "Milica S.",
          text: "The most beautiful nails I have ever had. Everything was neat, precise, and long-lasting.",
        },
        {
          name: "Jelena M.",
          text: "Katarina works flawlessly. Highly recommended. The studio feels premium and truly high quality.",
        },
        {
          name: "Ana P.",
          text: "The training was excellent. Everything was clearly explained and very practical.",
        },
      ],
    },
    gallerySection: {
      eyebrow: "Gallery",
      title: "Our work",
      description: "Explore a selection of work and the aesthetic clients can expect.",
    },
    galleryImages: [
      { src: "/images/gallery/nails-1.jpg", alt: "Elegant nude manicure", category: "Manicure" },
      { src: "/images/gallery/nails-2.jpg", alt: "Soft pink gel nails", category: "Gel polish" },
      { src: "/images/gallery/nails-3.jpg", alt: "Premium almond nail design", category: "Design" },
      { src: "/images/gallery/nails-4.jpg", alt: "Glossy neutral manicure", category: "Manicure" },
      { src: "/images/gallery/nails-5.jpg", alt: "Refined feminine nail styling", category: "Gel polish" },
      { src: "/images/gallery/nails-6.jpg", alt: "Luxury salon nail finish", category: "Design" },
      { src: "/images/gallery/nails-7.jpg", alt: "Clean elegant nail set", category: "Extensions" },
      { src: "/images/gallery/nails-8.jpg", alt: "Polished premium manicure look", category: "Manicure" },
    ],
    educationSection: {
      eyebrow: "Education",
      title: "Education coming ",
      accent: "soon",
      intro:
        "Education will be available soon. For more information and early inquiries, reach out via WhatsApp or Instagram.",
      note: "Soon education available.",
      whatsappCta: "Ask on WhatsApp",
      instagramCta: "Ask on Instagram",
    },
    courses: [
      {
        level: "Beginner level",
        title: "Basic training",
        description: "For beginners who want a clear, practical, and professional start.",
        items: [
          "Natural nail preparation",
          "Core hygiene and workflow",
          "Correct product application",
          "Shape and final finishing",
        ],
      },
      {
        level: "Advanced level",
        title: "Advanced training",
        description: "For refining technique, precision, and a premium final result.",
        items: [
          "Advanced shapes and refills",
          "Faster and cleaner workflow",
          "Detail aesthetics",
          "Premium finishing look",
        ],
      },
    ],
    contactSection: {
      eyebrow: "Contact and bookings",
      title: "Easy to book, easy to reach ",
      accent: "Noor",
      titleEnd: " studio",
      addressLabel: "Address",
      phoneLabel: "Phone",
      instagramLabel: "Instagram",
      workingHoursLabel: "Working hours",
      whatsappCta: "WhatsApp",
      instagramCta: "Instagram",
      mapTitle: "Noor map",
    },
  },
};

export function getSiteContent(locale: Locale): SiteContent {
  return siteContent[locale] ?? siteContent[defaultLocale];
}
