import {
  Car,
  Home,
  ImageIcon,
  IndianRupee,
  LayoutPanelTop,
  MapPin,
  Phone,
  Trees,
  Video,
} from "lucide-react";
import { routes } from "./routes";

const route = routes.TodayPanvel;

export const todayPanvelSiteConfig = {
  name: "Today Saubhagyam Codename Montana",
  about:
    `Today Global Developers is a brand synonymous with innovation, futuristic architecture, and landmark developments. With a strong legacy of delivering iconic commercial and residential projects across India, the group has established itself as a trusted name in the real estate industry.

Expanding its footprint into Navi Mumbai with Global Cloud City, the developer brings its signature excellence and vision to one of the region’s most promising destinations. Known for integrating smart technologies, sustainable building practices, and customer-centric design, Today Global Developers continues to redefine modern urban living.

Driven by quality, transparency, and long-term value creation, the brand stands out as a forward-thinking real estate leader shaping the cities of tomorrow.`,
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      "Panvel",
  },
  gtmId: "GTM-T4RS9M9Z",
  navbar: {
    navItems: [
      {
        href: `/${route}/#home`,
        label: "Home",
        icon: Home,
      },
      {
        href: `/${route}/#pricing`,
        label: "Price",
        icon: IndianRupee,
      },
      {
        href: `/${route}/#sitefloorplan`,
        label: "Site & Floor Plan",
        icon: LayoutPanelTop,
      },
      {
        href: `/${route}/#amenities`,
        label: "Amenities",
        icon: Trees,
      },
      {
        href: `/${route}/#gallery`,
        label: "Gallery",
        icon: ImageIcon,
      },
      {
        href: `/${route}/#location`,
        label: "Location",
        icon: MapPin,
      },
      {
        href: `/${route}/#sitevisit`,
        label: "Virtual Site Visit",
        icon: Video,
      },
    ],
    cta: {
      title: "Download Brochure",
      description:
        "Download the brochure to learn more about Today Saubhagyam",
    },
  },

  branding: {
    logo: "/today-panvel/images/logo.svg",
    favicon: "/icon.jpg",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/today-panvel/images/banner1.webp",
        alt: "Today Saubhagyam Interior",
      },
      {
        src: "/today-panvel/images/banner2.webp",
        alt: "Today Saubhagyam Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Today Saubhagyam.",
      },
      title: "Welcome to Today Saubhagyam Codename Elara",
      description: `Today Saubhagyam Codename Montana presents thoughtfully designed 1 and 2 BHK residences in the fast-growing locale of Panvel, Navi Mumbai. Strategically located at Palaspe Phata, this premium development offers homes with private decks, creating the perfect blend of comfort and scenic living.

These Vastu-compliant residences are crafted with expansive decks, generous living and storage spaces, and serene lifetime greenery views. Designed to maximise natural light, ventilation, and privacy, each home reflects modern functionality with elegant aesthetics.

The project promotes a healthier lifestyle with abundant open spaces and 22+ contemporary amenities. Residents can enjoy a multipurpose court, swimming pool, kids’ play area, open gym, landscaped garden, senior citizens’ seating area, jogging track, multipurpose hall, amphitheatre, grand lobby, CCTV surveillance, and much more. An exclusive shuttle bus service further adds convenience to everyday commuting.

Located in the prime hub of Panvel, the development ensures seamless connectivity to key social and commercial landmarks. Lifeline Hospital, Miraj Cinemas, Orion Mall, MNR International School, Delhi Public School, Amity University, St. Wilfred’s High School, Gandhi Super Speciality Hospital, and Dmart are all within a short drive. Panvel Railway Station is approximately 15 minutes away, while the Mumbai–Goa Highway and Mumbai–Pune Highway provide excellent connectivity to Mumbai, Pune, Satara, and the Konkan region.

With upcoming IT corridors in close proximity, Today Saubhagyam Codename Montana stands as an ideal address for families seeking comfort, connectivity, and an elevated lifestyle in a flourishing neighbourhood.`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Panvel by Today Global Developers",
      points: [
        { text: "Book 1 BHK & Save Rs 3 Lakhs*" },
        { text: "Book 2 BHK & Save Rs 4.5 Lakhs*" },
        { text: "Early Buy Discounts Available" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "5 Acres",
        },
        {
          title: "Floors",
          value: "G+18 Floors",
        },
        {
          title: "Possession",
          value: "Dec 2027",
        },
      ],
      price: {
        title: "Luxurious 1 & 2 BHK Starts at",
        value: "44.10 Lacs",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 2 & 3 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "1 BHK",
        carpetArea: "384 Sq.ft.",
        price: "44.10 Lacs",
        suffix: "Onwards",
      },
      {
        type: "1 BHK",
        carpetArea: "401 Sq.ft.",
        price: "44.90 Lacs ",
        suffix: "All Inc",
      },
      {
        type: "1 BHK",
        carpetArea: "426 Sq.ft.",
        price: "47.70 Lacs",
        suffix: "All Inc",
      },
      {
        type: "1 BHK",
        carpetArea: "436 Sq.ft.",
        price: "48.60 Lacs ",
        suffix: "All Inc",
      },
      {
        type: "2 BHK",
        carpetArea: "534 Sq.ft.",
        price: "62 Lacs ",
        suffix: "All Inc",
      },
      {
        type: "2 BHK",
        carpetArea: "580 Sq.ft.",
        price: "65.70 Lacs",
        suffix: "All Inc",
      },
      {
        type: "2 BHK",
        carpetArea: "600+ Sq.ft.",
        price: "65.70 Lacs",
        suffix: "All Inc",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/today-panvel/images/costing.webp",
        alt: "Today Saubhagyam Costing",
      },
      title: "Need Complete Costing Details?",
      description:
        "Download our detailed cost breakdown including all charges and payment plans",
      cta: {
        title: "Get Price Details",
        description: "Request complete pricing information",
      },
    },
  },

  siteAndFloorPlan: {
    title: "Site & Floor Plan",
    description:
      "Explore our thoughtfully designed layouts that maximize space and comfort",
    masterPlan: {
      title: "Master Plan",
      image: {
        src: "/today-panvel/images/masterplan.webp",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Today Saubhagyam",
      },
    },
    floorPlans: {
      categories: ["All", "1 BHK", "2 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "1 BHK-436 Sq.ft.",
          image: "/today-panvel/images/plan-1.jpg",
          category: "1 BHK",
        },
        {
          type: "2 BHK-600+ Sq.ft.",
          image: "/today-panvel/images/plan-2.jpg",
          category: "2 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Today Saubhagyam",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Today Saubhagyam",
    },
    amenities: [
      {
        title: "Amphitheatre",
        image: "/today-panvel/images/amenities/amphitheatre.webp",
        description: "",
      },
      {
        title: "Children's Play Area",
        image: "/today-panvel/images/amenities/kidsplayarea1.webp",
        description: "",
      },
      {
        title: "Garden",
        image: "/today-panvel/images/amenities/garden.webp",
        description: "",
      },
      {
        title: "Jogging Track",
        image: "/today-panvel/images/amenities/joggingtrack.webp",
        description: "",
      },
      {
        title: "Meditation Zone",
        image: "/today-panvel/images/amenities/meditationzone.webp",
        description: "",
      },
      {
        title: "Open Gym",
        image: "/today-panvel/images/amenities/opengym.webp",
        description: "",
      },
    ],
    stats: {
      title: "32+ World-Class Amenities",
      description: "Everything you need for a luxurious lifestyle",
    },
  },

  gallery: {
    title: "Gallery",
    description:
      "Experience luxury living through our carefully curated spaces",
    cta: {
      title: "Download Gallery",
      description: "Download the gallery of Today Saubhagyam",
    },
    images: [
      {
        title: "",
        image: "/today-panvel/images/gallery/g1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/today-panvel/images/gallery/g2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/today-panvel/images/gallery/g3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/today-panvel/images/gallery/g4.webp",
        description: "Resort-style pool with premium amenities",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2874.500859951525!2d73.1365108!3d18.9445052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e74478a157e7%3A0xadcab0d5148aaf2a!2sToday%20Saubhagyam!5e1!3m2!1sen!2sin!4v1771752431875!5m2!1sen!2sin",
    image: {
      src: "/today-panvel/images/locationmap.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Panvel Railway Station",
        description: "20 mins",
      },
      {
        title: "Mumbai–Pune Expressway",
        description: "18 mins",
      },
      {
        title: "Navi Mumbai International Airport",
        description: "22 mins",
      },
    ],
    location: {
      title: "Location Details",
      cta: {
        title: "Get Location",
        description: "Get detailed information about this location",
      },
    },
  },

  virtualTour: {
    title: "Virtual Tour Request",
    description:
      "Experience Today Saubhagyam from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/today-panvel/images/banner1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Today Saubhagyam from the comfort of your home",
    features: [
      {
        title: "360° Views",
        description: "Explore every corner of our property in detail",
      },
      {
        title: "Live Interaction",
        description: "Real-time guidance from our property experts",
      },
      {
        title: "Flexible Timing",
        description: "Schedule your tour at your convenience",
      },
    ],
  },

  footer: {
    termsConditions: { href: `/${route}/terms-conditions` },
    privacyPolicy: { href: `/${route}/privacy-policy` },
    cookiesPolicy: { href: `/${route}/cookies-policy` },
  },

  enquire: {
    title: "Get The Best Quote",
    bookFreeVisit: {
      image: {
        src: "/today-panvel/images/ride.png",
        alt: "Book a Site Visit",
      },
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
    },

    callUs: {
      title: "Call Us",
      description: "Get in touch with our experts",
      phone: "+91 96190 95795",
    },
    enquiryFeatures: [
      {
        icon: Phone,
        title: "Instant Call Back",
        description: "Get a call from our experts",
      },
      {
        icon: Car,
        title: "Free Site Visit",
        description: "Schedule at your convenience",
      },
      {
        icon: IndianRupee,
        title: "Unmatched Price",
        description: "Best offers guaranteed",
      },
    ],
  },

  legal: {
    rera: {
      title: "RERA Information",
      description:
        "According to the RERA Act 2016 of the Government of India, all projects of the Today Saubhagyam, are listed on the Maharashtra Government's RERA website under registered projects.",
      details: [
        {
          title: "Today Saubhagyam",
          reraNumber: "MahaRERA - P52000053782",
          qrCode: "/today-panvel/images/qr.webp",
        },
      ],
    },
    legalInfo: [
      {
        title: "Project Registration",
        description:
          "Project Registered under Government of India RERA Act 2016",
      },
      {
        title: "Authorised Advertiser",
        description:
          "Government RERA Authorised Advertiser's: Marketing Space Pvt Ltd, Registration No A51700000595, CIN U74999MH2016PTC288144",
      },
      {
        title: "RERA Numbers",
        description:
          "RERA Project Registration No.:P52000021559",
      },
      {
        title: "Site Address",
        description:
          "Today Global Saubhagyam: Palaspa, Panvel, Shirdhon, Maharashtra 410221.",
      },
      {
        title: "Contact Us",
        description:
          " Corporate Office: Today Global Developers: Office No. 1601-1602, 16th Floor, Kesar Solitaire, Plot No. 5, Palm Beach Road, Sector 19, Sanpada, Navi Mumbai, Maharashtra - 400705.",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Today Saubhagyam 2 & 3 BHK Flats in Sion| Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Today Saubhagyam,Sion. 2 & 3 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "Today Saubhagyam",
      "2 bhk",
      "3 bhk",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Today Saubhagyam | Terms & Conditions",
      description:
        "Please read these terms and conditions carefully before using our website.",
    },
    title: "Terms & Conditions",
    description:
      "Please read these terms and conditions carefully before using our website.",
    paragraphs: [
      {
        title: "",
        description:
          "By using our website, you agree to abide by the rules laid out by us and consent to collection and use of all such information that you may furnish to, or through, our website. In some cases, while you visit our website, you may not need to provide any personal information. But in certain instances, we must have your personal information in order for us to grant you access to some of the links or sites. Such links/ pages may ask for your name, e-mail address, phone number etc. The information furnished by you is used to provide relevant products and services and to acknowledge receipt of your communication or to send out information and updates to you. You have option of requesting removal from our mailing list. We do not give away your personal information to any third party",
      },
      {
        title: "Security",
        description:
          "To ensure security while transferring sensitive information, all the ongoing transmissions between client and server are encrypted using advanced and standard protocols. We also practice restricted access by employees and hold them to high levels of confidentiality.",
      },
      {
        title: "Disclosing Information",
        description:
          "We do not disclose any personal information obtained about you from this website to third parties unless you permit us to do so by ticking the relevant boxes in registration or competition forms. We may also use the information to keep in contact with you and inform you of developments associated with us. You will be given the opportunity to remove yourself from any mailing list or similar device. If at any time in the future we should wish to disclose information collected on this website to any third party, it would only be with your knowledge and consent. We may from time to time provide information of a general nature to third parties - for example, the number of individuals visiting our website or completing a registration form, but we will not use any information that could identify those individuals. In addition, Marketing-Space may work with third parties for the purpose of delivering targeted behavioural advertising to the Marketing Space website. Through the use of cookies, anonymous information about your use of our websites and other websites will be used to provide more relevant adverts about goods and services of interest to you. For more information on online behavioural advertising and about how to turn this feature off, please visit https://marketing-space.in.",
      },
    ],
  },

  privacyPolicy: {
    seo: {
      title: "Today Saubhagyam | Privacy Policy",
      description: "This policy explains how we use your personal information.",
    },
    title: "Privacy Policy",
    description: "This policy explains how we use your personal information.",
    paragraphs: [
      {
        title: "",
        description:
          "In our endeavour and commitment of protecting your personal information, we have designed this comprehensive privacy policy. This is to keep your interests and information safe on our website.",
      },
      {
        title: "Updation of Privacy Policy",
        description:
          "This privacy policy is subject to undergo change and review without any prior notice or approval. So to keep yourself updated on the changes introduced, please keep visiting and reviewing the terms and conditions of this privacy policy.",
      },
    ],
  },

  cookiesPolicy: {
    seo: {
      title: "Today Saubhagyam | Cookies Policy",
      description:
        "This policy explains how we use cookies and similar technologies on our website.",
    },
    title: "Cookies Policy",
    description:
      "This policy explains how we use cookies and similar technologies on our website.",
    paragraphs: [
      {
        title: "",
        description:
          "Your Internet browser has the in-built facility for storing small files - 'cookies' - that hold information which allows a website to recognise your account. Our website takes advantage of this facility to enhance your experience. You have the ability to prevent your computer from accepting cookies but, if you do, certain functionality on the website may be impaired.",
      },
      {
        title: "",
        description:
          "We may use cookies for security, session continuity, and customization purposes. In case of a user opting to reject a cookie, he/ she may not be able to gain access to some of the limited services or use some features of the site. In case of any queries or suggestions regarding privacy statement or your dealings with this web site, please contact us.updates to you. Also, you hold an option of requesting removal from our mailing list. We do not share your personal information with any third party.",
      },
    ],
  },

  thankYou: {
    seo: {
      title: "Today Saubhagyam | Thank You",
      description: "Thank you for your interest in Today Saubhagyam",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_147",
      publicId: "41e636a7297d9f5463170d53f10fb4e2",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:1b3cdc7b40504e947d6886a08517ac877e7e3224,1678943220",
      __vtCurrency: "1",
      name: "Today Saubhagyam",
      cfLeadsProjectSite: "Dosti Eden",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Today Saubhagyam",
      },
    },
  },
};

export type TodayPanvelSiteConfig = typeof todayPanvelSiteConfig;
