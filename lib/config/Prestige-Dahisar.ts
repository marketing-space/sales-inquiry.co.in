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

const route = routes.PrestigeDahisar;

export const prestigeDahisarSiteConfig = {
  name: "Prestige Dahisar Mira Road",
  about:
    "Founded in 1986, Prestige Group began its real estate journey in South India and has since grown into one of the country’s leading developers. Over the decades, the company has delivered premium residential villas, integrated townships, upscale shopping malls, and state-of-the-art commercial parks across major cities including Bengaluru, Chennai, Kochi, and Hyderabad. Expanding its footprint beyond the South, Prestige Group has also ventured into Mumbai, with landmark developments in prime locations such as Mulund, Bandra, and Mahalaxmi.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      " Mira Road, Mumbai",
  },
  gtmId: "GTM-54RP9RX",
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
      description: "Download the brochure to learn more about Prestige Dahisar",
    },
  },

  branding: {
    logo: "/prestige-dahisar/images/logo.svg",
    favicon: "/prestige-dahisar/images/icon.png",
    ogImage: "/prestige-dahisar/images/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/prestige-dahisar/images/banner-1.webp",
        alt: "Prestige Dahisar Exterior",
      },
      {
        src: "/prestige-dahisar/images/banner-2.webp",
        alt: "Prestige Dahisar Exterior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description: "Download the brochure to learn more about Prestige Dahisar.",
      },
      title: "Welcome To Prestige Dahisar-Mira Road",
      description: `Prestige Dahisar–Mira Road is a thoughtfully designed gated community that redefines modern living at Mira Road. The elegant high-rise towers feature spacious 1, 2, and 3 BHK residences with a variety of carpet areas to suit different lifestyle needs. Each home is crafted with expansive layouts, premium fittings, and sleek finishes, offering a perfect blend of comfort and sophistication. Residents can enjoy breathtaking city views that elevate the living experience. The community also boasts a wide array of lifestyle amenities, including a gymnasium, swimming pool, multipurpose court, banquet hall, amphitheatre, indoor games, and dedicated kids’ play area, ensuring a vibrant and fulfilling lifestyle.`,
    },
    offer: {
      title: "Booking Open",
      location: "New Project by Prestige Group",
      points: [
        { text: "EOI Started Worth ₹ 1 Lakh" },
        { text: "Get Launch Offers and EOI Benefits" },
        { text: "Avail Flexible Payment Plan" },
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
          value: "G + 30 Storeys",
        },
      ],
      price: {
        title: "Luxurious 1, 2 & 3 BHK Starts from",
        value: "95 Lacs",
        suffix: "All In Price*",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 1,2 & 3 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "1 BHK",
        carpetArea: "450 Sq.ft.",
        price: "95 Lacs",
        suffix: "Onwards",
      },
      {
        type: "2 BHK",
        carpetArea: "618-750 Sq.ft.",
        price: "1.59 Cr",
        suffix: "Onwards",
      },
      {
        type: "3 BHK",
        carpetArea: "860-950 Sq.ft.",
        price: "1.81-2.09 Cr",
        suffix: "Onwards",
      },
      
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/prestige-dahisar/images/costing.webp",
        alt: "Prestige Dahisar Costing",
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
        src: "/prestige-dahisar/images/masterplan.webp",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Prestige Dahisar",
      },
    },
    floorPlans: {
      categories: ["All", "1 BHK", "2 BHK", "3 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "1 BHK-450 Sq.ft.",
          image: "/prestige-dahisar/images/coming-soon.jpg",
          category: "1 BHK",
        },
        {
          type: "2 BHK-618-750 Sq.ft.",
          image: "/prestige-dahisar/images/coming-soon.jpg",
          category: "2 BHK",
        },
        {
          type: "3 BHK-860-950 Sq.ft.",
          image: "/prestige-dahisar/images/coming-soon.jpg",
          category: "3 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Prestige Dahisar",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Prestige Dahisar",
    },
    amenities: [
      {
        title: "Jogging Track",
        image: "/prestige-dahisar/images/amenities/amphitheatre_1.webp",
        description: "",
      },
      {
        title: "Senior Citizen Area",
        image: "/prestige-dahisar/images/amenities/seniorcitizencorner11.webp",
        description: "",
      },
      {
        title: "Amphitheatre",
        image: "/prestige-dahisar/images/amenities/amphitheatre_1.webp",
        description: "",
      },
      {
        title: "Gym",
        image: "/prestige-dahisar/images/amenities/gym.webp",
        description: "",
      },
            {
        title: "Swimming Pool",
        image: "/prestige-dahisar/images/amenities/swimmingpool_1.webp",
        description: "",
      },
      {
        title: "Multipurpose Court",
        image: "/prestige-dahisar/images/amenities/multipurposecourt1.webp",
        description: "",
      },
      {
        title: "Kids Play Area",
        image: "/prestige-dahisar/images/amenities/kidsplayarea.webp",
        description: "",
      },
      {
        title: "Indoor Games",
        image: "/prestige-dahisar/images/amenities/indogame_01.webp",
        description: "",
      },
      {
        title: "Landscape Garden",
        image: "/prestige-dahisar/images/amenities/landscapedgreens.webp",
        description: "",
      },
      {
        title: "Banquet Hall",
        image: "/prestige-dahisar/images/amenities/BanquetHall.webp",
        description: "",
      },
      {
        title: "Walking Path",
        image: "/prestige-dahisar/images/amenities/walking_01.webp",
        description: "",
      },
      {
        title: "Yoga Space",
        image: "/prestige-dahisar/images/amenities/YOGAAEROBICSUMBAROOM11.webp",
        description: "",
      },
    ],
    stats: {
      title: "40+ World-Class Amenities",
      description: "Everything you need for a luxurious lifestyle",
    },
  },

  gallery: {
    title: "Gallery",
    description:
      "Experience luxury living through our carefully curated spaces",
    cta: {
      title: "Download Gallery",
      description: "Download the gallery of Prestige Dahisar",
    },
    images: [
      {
        title: "",
        image: "/prestige-dahisar/images/gallery/1.webp",
        description: "",
      },
      {
        title: "",
        image: "/prestige-dahisar/images/gallery/2.webp",
        description: "",
      },
      {
        title: "",
        image: "/prestige-dahisar/images/gallery/3.webp",
        description: "",
      },
      {
        title: "",
        image: "/prestige-dahisar/images/gallery/4.webp",
        description: "",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "",
    image: {
      src: "/prestige-dahisar/images/locationmap.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Western Express Highway",
        description: "2 mins",
      },
      {
        title: "Dahisar (East) Metro Station",
        description: "5 Mins",
      },
      {
        title: "Chhatrapati Shivaji Maharaj International Airport",
        description: "35 Mins",
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
    description: "Experience Prestige Dahisar from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/prestige-dahisar/images/banner-1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription: "Experience Prestige Dahisar from the comfort of your home",
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

  enquire: {
    title: "Get The Best Quote",
    bookFreeVisit: {
      image: {
        src: "/prestige-dahisar/images/ride.png",
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
      description: "",
      details: [
        {
          title: "",
          reraNumber: "",
          qrCode: "/prestige-dahisar/images/rera.jpg",
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
          "RERA Project Registration No.: P51700020164 / P51700020128 / P51700018579 / P51700020157",
      },
      {
        title: "Site Address",
        description:
          "Prestige Dahisar: Kolshet Rd, Kolshet Industrial Area, Thane West, Thane, Maharashtra 400607",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Prestige Dahisar by Lodha Group | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Prestige Dahisar, Thane. 1, 2 & 3 BHK apartments with world-class amenities.",
    keywords: ["Prestige Dahisar", "1 bhk", "2 bhk", "3 bhk"],
  },

  termsAndConditions: {
    seo: {
      title: "Terms & Conditions | Prestige Dahisar Thane",
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

  footer: {
    termsConditions: { href: `/${route}/terms-conditions` },
    privacyPolicy: { href: `/${route}/privacy-policy` },
    cookiesPolicy: { href: `/${route}/cookies-policy` },
  },

  privacyPolicy: {
    seo: {
      title: "Privacy Policy | Prestige Dahisar",
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
      title: "Cookies Policy | Prestige Dahisar",
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
      title: "Prestige Dahisar | Thank You",
      description: "Thank you for your interest in Prestige Dahisar Thane",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_56",
      publicId: "0459cebb30e8fd3c582b7a2cc593237d",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
      __vtCurrency: "1",
      name: "Prestige Dahisar Thane",
      cfLeadsProjectSite: "Swaminarayan City",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Prestige Dahisar",
      },
    },
  },
};

export type PrestigeDahisarConfig = typeof prestigeDahisarSiteConfig;
