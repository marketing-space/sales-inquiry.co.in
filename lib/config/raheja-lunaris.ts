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

const route = routes.RahejaLunaris;

export const rahejaLunarisSiteConfig = {
  name: "Raheja Lunaris World Residences",
  about:
    "Raheja Universal introduces a meticulously planned residential development in Juinagar, Navi Mumbai, featuring spacious 1, 2, 2.5, 3, and 4 BHK residences along with thoughtfully integrated commercial spaces. Spread across an expansive 60+ acre land parcel, the project offers a township-style living experience that seamlessly combines modern urban comforts with abundant open spaces.Each home is intelligently designed to ensure optimal comfort, functionality, and natural ventilation, making it an ideal choice for families and working professionals seeking a well-balanced lifestyle. The inclusion of on-site commercial spaces enhances everyday convenience, creating a self-sustained live-work-play environment within the community.Strategically located, the development enjoys excellent connectivity to major business districts, reputed educational institutions, healthcare centers, and entertainment hubs across Navi Mumbai. Complemented by premium lifestyle amenities, landscaped greens, and well-planned infrastructure, this project promises not just a residence, but a vibrant and enriching community living experience.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      "Navi Mumbai",
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
        "Download the brochure to learn more about Raheja Lunaris",
    },
  },

  branding: {
    logo: "/raheja-lunaris/images/logo.jpg",
    favicon: "/icon.jpg",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/raheja-lunaris/images/banner1.jpg",
        alt: "Raheja Lunaris Interior",
      },
      {
        src: "/raheja-lunaris/images/banner2.jpg",
        alt: "Raheja Lunaris Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Raheja Lunaris.",
      },
      title: "Welcome to Raheja Lunaris",
      description: `Welcome to Raheja Lunaris, an iconic residential destination in Juinagar that sets a new benchmark for elevated township living. Thoughtfully envisioned and meticulously planned, Lunaris is part of an expansive 60+ acre development that seamlessly blends contemporary architecture with vast open spaces and lush green landscapes. Every residence is designed to offer generous layouts, abundant natural light, and excellent ventilation — creating homes that feel open, comfortable, and truly inviting.

At Raheja Lunaris, life extends beyond the four walls of your home. A host of curated lifestyle amenities, landscaped gardens, recreational zones, and integrated conveniences come together to foster a vibrant live-work-play ecosystem. Strategically located in Navi Mumbai with excellent connectivity to key business hubs, schools, healthcare centers, and entertainment avenues, Lunaris offers not just a premium address, but a well-rounded, future-ready community where families can grow and thrive.`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Juinagar, Navi Mumbai By Raheja Universal",
      points: [
        { text: "Premium Open Views" },
        { text: "Close Proximity To Key Amenities" },
        { text: "Seamless Connectivity To The Highway" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "60 Acres",
        },
        {
          title: "Floors",
          value: "G+32 Floors",
        },
        // {
        //   title: "Possession",
        //   value: "Dec 2025",
        // },
      ],
      price: {
        title: "Luxurious 1,2,3 & 4 BHKs & commercial spaces",
        value: "98 Lacs*",
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
        carpetArea: "438 Sq.ft.",
        price: "98 Lacs*",
        suffix: "Onwards",
      },
      {
        type: "2 BHK Compact",
        carpetArea: "452 Sq.ft.",
        price: "1.12 Cr*",
        suffix: "Onwards",
      },
      {
        type: "2 BHK Premium",
        carpetArea: "649 Sq.ft.",
        price: "1.62 Cr*",
        suffix: "Onwards",
      },
      {
        type: "2 BHK Luxe",
        carpetArea: "715 Sq.ft.",
        price: "1.88 Cr*",
        suffix: "Onwards",
      },
      {
        type: "3 BHK Optima",
        carpetArea: "725 Sq.ft.",
        price: "1.90 Cr*",
        suffix: "Onwards",
      },

    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/raheja-lunaris/images/costing.webp",
        alt: "Raheja Lunaris Costing",
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
        src: "/raheja-lunaris/images/masterplan.jpg",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Raheja Lunaris",
      },
    },
    floorPlans: {
      categories: ["All", "1 BHK", "2 BHK", "3 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "1 BHK-438 Sq.ft.",
          image: "/raheja-lunaris/images/plan.jpg",
          category: "1 BHK",
        },
        {
          type: "2 BHK-715 Sq.ft.",
          image: "/raheja-lunaris/images/plan.jpg",
          category: "2 BHK",
        },
        {
          type: "3 BHK-725 Sq.ft.",
          image: "/raheja-lunaris/images/plan.jpg",
          category: "3 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Raheja Lunaris",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Raheja Lunaris",
    },
    amenities: [
      {
        title: "Cafe",
        image: "/raheja-lunaris/images/amenities/cafe11.webp",
        description: "",
      },
      {
        title: "Jogging Track",
        image: "/raheja-lunaris/images/amenities/joggingtrack.jpg",
        description: "",
      },
      {
        title: "Joy And Adventure",
        image: "/raheja-lunaris/images/amenities/joyandadventure.jpg",
        description: "",
      },
      {
        title: "Multi Purpose Court",
        image: "/raheja-lunaris/images/amenities/multipurposesportscourt.webp",
        description: "",
      },
      {
        title: "Outdoor Gym",
        image: "/raheja-lunaris/images/amenities/opengym.webp",
        description: "",
      },
      {
        title: "Toddlers Play Area",
        image: "/raheja-lunaris/images/amenities/ToddlersPlayArea_.jpg",
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
      description: "Download the gallery of Raheja Lunaris",
    },
    images: [
      {
        title: "",
        image: "/raheja-lunaris/images/gallery/g1.jpg",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/raheja-lunaris/images/gallery/g2.jpg",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/raheja-lunaris/images/gallery/g3.jpg",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/raheja-lunaris/images/gallery/g4.jpg",
        description: "Resort-style pool with premium amenities",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11490.476700008372!2d73.031971!3d19.053474!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c10039d21c71%3A0x35653c538005610a!2sLunaris%20By%20Raheja%20Universal!5e1!3m2!1sen!2sin!4v1771666397454!5m2!1sen!2sin",
    image: {
      src: "",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "D.Y. Patil University, Hospital, Stadium",
        description: "2.4 Kms",
      },
      {
        title: "Ryan Intl. School ",
        description: "2.7 Kms",
      },
      {
        title: "Inorbit Mall",
        description: "3.9 Kms",
      },
      {
        title: "IKEA",
        description: "4 Kms",
      },
      {
        title: "Juinagar Station ",
        description: "2 Kms",
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
      "Experience Raheja Lunaris from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/raheja-lunaris/images/banner1.jpg",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Raheja Lunaris from the comfort of your home",
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
        src: "/raheja-lunaris/images/ride.png",
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
        "According to the RERA Act 2016 of the Government of India, all projects of the Raheja Lunaris, are listed on the Maharashtra Government's RERA website under registered projects.",
      details: [
        {
          title: "Raheja Lunaris",
          reraNumber: "MahaRERA - P51700076867",
          qrCode: "/raheja-lunaris/images/qr.jpg",
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
          "RERA Project Registration No.:P51700076867",
      },
      {
        title: "Site Address",
        description:
          "Raheja Lunaris Sales Office, Raheja District, opp. Juinagar Station Road, MIDC Industrial Area, Shiravane, Nerul, Navi Mumbai, Maharashtra 400705",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Raheja Lunaris 1,2,3 & 4 BHKs in Navi Mumbai | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Raheja Lunaris,Navi Mumbai . 2 & 3 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "Raheja Lunaris",
      "1 bhk",
      "2 bhk",
      "3 bhk",
      "4 bhk",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Raheja Lunaris | Terms & Conditions",
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
      title: "Raheja Lunaris | Privacy Policy",
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
      title: "Raheja Lunaris | Cookies Policy",
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
      title: "Raheja Lunaris | Thank You",
      description: "Thank you for your interest in Raheja Lunaris",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_147",
      publicId: "41e636a7297d9f5463170d53f10fb4e2",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:1b3cdc7b40504e947d6886a08517ac877e7e3224,1678943220",
      __vtCurrency: "1",
      name: "Raheja Lunaris",
      cfLeadsProjectSite: "Dosti Eden",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Raheja Lunaris",
      },
    },
  },
};

export type RahejaLunarisSiteConfig = typeof rahejaLunarisSiteConfig;
