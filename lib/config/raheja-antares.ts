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

const route = routes.RahejaAntares;

export const rahejaAntaresSiteConfig = {
  name: "K-Raheja Antares",
  about:
    "With over four decades of excellence, K Raheja Corp is one of India’s leading real estate developers, known for shaping premium commercial spaces, retail destinations, hotels, and residential communities. The brand has delivered iconic developments such as Inorbit Mall and Mindspace, reflecting its commitment to quality and innovation. It is also dedicated to sustainable development, having created exp",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      "Kanjurmarg (w)",
  },
  gtmId: "GTM-KD8D6LWN",

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
        "Download the brochure to learn more about K-Raheja Antares",
    },
  },

  branding: {
    logo: "/raheja-antares/images/logo.jpeg",
    favicon: "/icon.jpg",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/raheja-antares/images/banner-1.webp",
        alt: "K-Raheja Antares Interior",
      },
      {
        src: "/raheja-antares/images/banner-2.webp",
        alt: "K-Raheja Antares Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about K-Raheja Antares.",
      },
      title: "Welcome to K-Raheja Antares",
      description: `K Raheja Antares is a striking residential tower located off LBS Marg in Kanjurmarg, offering spacious 3, 3.5, and 5 BHK apartments with expansive sundecks. Each home is thoughtfully planned with efficient layouts, high-quality finishes, and premium fittings, ensuring excellent ventilation and privacy.

Designed by renowned architect Hafeez Contractor, this gated community features a wide range of lifestyle amenities, including a jogging track, clubhouse, swimming pool, gymnasium, kids’ play area, multipurpose court, indoor games room, and a banquet hall.

The project is surrounded by key social infrastructure such as reputed schools, hospitals, shopping malls, and entertainment hubs. Its strategic location near LBS Marg and the Jogeshwari–Vikhroli Link Road ensures seamless connectivity to both Central and Western suburbs, while the Eastern Express Highway offers easy access to South Mumbai and Thane.

K Raheja Antares stands out as a premium residential address in the dynamic neighborhood of Kanjurmarg.`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Kanjurmarg (w) by K Raheja Corp",
      points: [
        { text: "Exclusive 20:80 Bank Subvention" },
        { text: "Flexible Payment Plan Available" },
        { text: "Higher Floors Available" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "3.08 Acres",
        },
        {
          title: "Floors",
          value: "G + 33 Floors",
        },
        {
          title: "Possession",
          value: "November 2028",
        },
      ],
      price: {
        title: "Luxurious 3, 3.5 & 5 BHK & commercial spaces",
        value: "3.33 Cr*",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 3, 3.5 & 5 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "3 BHK",
        carpetArea: "1118 Sq.ft.",
        price: "3.33 Cr*",
        suffix: "Onwards",
      },
      {
        type: "3 BHK",
        carpetArea: "1350 Sq.ft.",
        price: "3.51 Cr*",
        suffix: "Onwards",
      },
      {
        type: "3.5 BHK",
        carpetArea: "1570 Sq.ft.",
        price: "4.23 Cr*",
        suffix: "Onwards",
      },
      {
        type: "3.5 BHK",
        carpetArea: "2236 Sq.ft.",
        price: "6.30  Cr*",
        suffix: "Onwards",
      },
      {
        type: "5 BHK",
        carpetArea: "3140 Sq.ft.",
        price: "8.46 Cr*",
        suffix: "Onwards",
      },

    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/raheja-antares/images/costing.webp",
        alt: "K-Raheja Antares Costing",
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
        src: "/raheja-antares/images/masterplan.webp",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of K-Raheja Antares",
      },
    },
    floorPlans: {
      categories: ["All", "3 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "3 BHK-1350 Sq.ft.",
          image: "/raheja-antares/images/plan-1.jpg",
          category: "3 BHK",
        },
        {
          type: "3.5 BHK-2236 Sq.ft.",
          image: "/raheja-antares/images/plan-2.jpg",
          category: "3 BHK",
        },

      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of K-Raheja Antares",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of K-Raheja Antares",
    },
    amenities: [
      {
        title: "Swimming Pool",
        image: "/raheja-antares/images/amenities/swimming-pool-1.jpg",
        description: "",
      },
      {
        title: "Clubhouse",
        image: "/raheja-antares/images/amenities/clubhouse.webp",
        description: "",
      },
      {
        title: "Banquet Hall",
        image: "/raheja-antares/images/amenities/BanquetHall.webp",
        description: "",
      },
      {
        title: "Gym",
        image: "/raheja-antares/images/amenities/gym-1.jpg",
        description: "",
      },
      {
        title: "Indoor Games",
        image: "/raheja-antares/images/amenities/indoorgamezone.webp",
        description: "",
      },
      {
        title: "Jogging Track",
        image: "/raheja-antares/images/amenities/jogging.jpg",
        description: "",
      },
      // {
      //   title: "Kids Play Area",
      //   image: "/raheja-antares/images/amenities/ToddlersPlayArea_.jpg",
      //   description: "",
      // },
      // {
      //   title: "Landscape Garden",
      //   image: "/raheja-antares/images/amenities/ToddlersPlayArea_.jpg",
      //   description: "",
      // },
      // {
      //   title: "Multipurpose Court",
      //   image: "/raheja-antares/images/amenities/ToddlersPlayArea_.jpg",
      //   description: "",
      // },
      // {
      //   title: "Senior Citizen Area",
      //   image: "/raheja-antares/images/amenities/ToddlersPlayArea_.jpg",
      //   description: "",
      // },

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
      description: "Download the gallery of K-Raheja Antares",
    },
    images: [
      {
        title: "",
        image: "/raheja-antares/images/gallery/g1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/raheja-antares/images/gallery/g2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/raheja-antares/images/gallery/g3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/raheja-antares/images/gallery/g4.webp",
        description: "Resort-style pool with premium amenities",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2871.3720660202785!2d72.92673549999999!3d19.125364899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c79e65fcb41f%3A0xcd21dacaec890515!2sRaheja%20Antares%20(JVLR%20Entry)!5e1!3m2!1sen!2sin!4v1777975008582!5m2!1sen!2sin",
    image: {
      src: "/raheja-antares/images/locationmap.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "LBS Marg",
        description: "1 min",
      },
      {
        title: "Jogeshwari Vikhroli Link Road",
        description: "2 mins",
      },
      {
        title: "Kanjurmarg Railway Station",
        description: "7 mins",
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
      "Experience K-Raheja Antares from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/raheja-antares/images/banner-1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience K-Raheja Antares from the comfort of your home",
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
        src: "/raheja-antares/images/ride.png",
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
        "According to the RERA Act 2016 of the Government of India, all projects of the K-Raheja Antares, are listed on the Maharashtra Government's RERA website under registered projects.",
      details: [
        {
          title: "K-Raheja Antares",
          reraNumber: "MahaRERA - P51800077483",
          qrCode: "/raheja-antares/images/qr.webp",
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
          "RERA Project Registration No.:P51800077483",
      },
      {
        title: "Site Address",
        description:
          "Raheja Antares, opposite Powai Telephone Exchange, Laxmi Udyog Nagar, Kanjurmarg West, Bhandup West, Mumbai, Maharashtra 400078",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "K-Raheja Antares 3, 3.5 & 5 BHKs in  Kanjurmarg (w) | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at K-Raheja Antares, Kanjurmarg (w) . 3, 3.5 & 5 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "K-Raheja Antares",
      "3 bhk",
      "3.5 bhk",
      "5 bhk",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "K-Raheja Antares | Terms & Conditions",
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
      title: "K-Raheja Antares | Privacy Policy",
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
      title: "K-Raheja Antares | Cookies Policy",
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
      title: "K-Raheja Antares | Thank You",
      description: "Thank you for your interest in K-Raheja Antares",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_199",
      publicId: "7df972601b98a4fdfa76d52d0023a924",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:1b3cdc7b40504e947d6886a08517ac877e7e3224,1678943220",
      __vtCurrency: "1",
      name: "Raheja Kanjurmarg",
      cfLeadsProjectSite: "Dosti Eden",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from K-Raheja Antares",
      },
    },
  },
};

export type RahejaAntaresSiteConfig = typeof rahejaAntaresSiteConfig;
