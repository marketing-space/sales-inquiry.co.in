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

const route = routes.TodayCloudCity;

export const todayCloudCitySiteConfig = {
  name: "Today Cloud City Codename Elara",
  about:
    `Today Global Developers is a brand synonymous with innovation, futuristic architecture, and landmark developments. With a strong legacy of delivering iconic commercial and residential projects across India, the group has established itself as a trusted name in the real estate industry.

Expanding its footprint into Navi Mumbai with Global Cloud City, the developer brings its signature excellence and vision to one of the region’s most promising destinations. Known for integrating smart technologies, sustainable building practices, and customer-centric design, Today Global Developers continues to redefine modern urban living.

Driven by quality, transparency, and long-term value creation, the brand stands out as a forward-thinking real estate leader shaping the cities of tomorrow.`,
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      "Kharghar",
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
        "Download the brochure to learn more about Today Cloud City",
    },
  },

  branding: {
    logo: "/today-cloud-city/images/logo.svg",
    favicon: "/icon.jpg",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/today-cloud-city/images/banner1.webp",
        alt: "Today Cloud City Interior",
      },
      {
        src: "/today-cloud-city/images/banner2.webp",
        alt: "Today Cloud City Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Today Cloud City.",
      },
      title: "Welcome to Today Cloud City Codename Elara",
      description: `Elara at Today Codename Cloud City is a newly unveiled landmark tower set within a sprawling 9-acre luxury township in Upper Kharghar, Navi Mumbai. This premium development offers exclusive 4 BHK deck residences along with thoughtfully designed 2 and 3 BHK apartments, crafted for refined urban living.

With only two residences per floor, Elara ensures exceptional privacy, comfort, and exclusivity. There is also a provision for Jodi apartments, allowing homeowners to create expansive, customised living spaces tailored to their needs. Each residence features a personalised lift access card entry system* for enhanced security and convenience.

Residents can indulge in an array of curated lifestyle amenities, including a multipurpose court, al fresco dining area, stargazing deck, indoor games zone, yoga and meditation space, and a host of other leisure features designed to elevate everyday living.

Strategically located, Elara enjoys seamless connectivity to prominent social and lifestyle hubs. Renowned institutions and landmarks such as Harmony School, Empyrean School, Tata Memorial Hospital, Kharghar Medicity Hospital, Little World Mall, Central Park, Dmart, ISKCON Temple, Kharghar Valley Golf Course, Gazebo Dhaba Restaurant, and the upcoming International Corporate Park are all within easy reach.

The project benefits from excellent connectivity via the Panvel–Mumbra Highway, offering smooth access to Kalyan Shilphata and Panvel, and is just minutes from the Sion–Panvel Highway. Amandoot Metro Station is nearby, while the upcoming Navi Mumbai International Airport is only a short drive away.

Experience elevated living at Elara at Codename Cloud City — where luxury, privacy, and connectivity come together in Upper Kharghar.`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Kharghar by Today Global Developers",
      points: [
        { text: "Flexible Payment Plans Available" },
        { text: "Spot Booking Discounts: Book Now" },
        { text: "Avail Exclusive Early Buy Discounts" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "9 Acres",
        },
        {
          title: "Floors",
          value: "G+27 Floors",
        },
        {
          title: "Possession",
          value: "Dec 2026",
        },
      ],
      price: {
        title: "Luxurious 2, 3 & 4 BHK Starts at",
        value: "84.69 Lacs",
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
        type: "2 BHK",
        carpetArea: "600 Sq.ft.",
        price: "84.69 Lacs",
        suffix: "Onwards",
      },
      {
        type: "2 BHK",
        carpetArea: "640 Sq.ft.",
        price: "99 Lacs",
        suffix: "All Inc",
      },
      {
        type: "3 BHK",
        carpetArea: "915 Sq.ft.",
        price: "1.54 Cr ",
        suffix: "All Inc",
      },
      {
        type: "3 BHK",
        carpetArea: "1030 Sq.ft.",
        price: "1.57 Cr",
        suffix: "All Inc",
      },
      {
        type: "3 BHK",
        carpetArea: "1070 Sq.ft.",
        price: "1.62 Cr ",
        suffix: "All Inc",
      },
      {
        type: "4 BHK",
        carpetArea: "1280 Sq.ft.",
        price: "2 Cr",
        suffix: "All Inc",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/today-cloud-city/images/costing.webp",
        alt: "Today Cloud City Costing",
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
        src: "/today-cloud-city/images/masterplan.webp",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Today Cloud City",
      },
    },
    floorPlans: {
      categories: ["All", "2 BHK", "3 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "2 BHK-640 Sq.ft.",
          image: "/today-cloud-city/images/coming.jpg",
          category: "2 BHK",
        },
        {
          type: "3 BHK-1070 Sq.ft.",
          image: "/today-cloud-city/images/coming.jpg",
          category: "3 BHK",
        },
        {
          type: "4 BHK-1028 Sq.ft.",
          image: "/today-cloud-city/images/coming.jpg",
          category: "3 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Today Cloud City",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Today Cloud City",
    },
    amenities: [
      {
        title: "Infinity Swimming Pool ",
        image: "/today-cloud-city/images/amenities/infinityswimmingpool.webp",
        description: "",
      },
      {
        title: "Rooftop Lounge",
        image: "/today-cloud-city/images/amenities/rooftoplounge.webp",
        description: "",
      },
      {
        title: "Sky Deck",
        image: "/today-cloud-city/images/amenities/skydeck.webp",
        description: "",
      },
      {
        title: "Fitness Center",
        image: "/today-cloud-city/images/amenities/gym_01.webp",
        description: "",
      },
      {
        title: "Yoga & Meditation",
        image: "/today-cloud-city/images/amenities/ZumbaStudio.webp",
        description: "",
      },
      {
        title: "Clubhouse",
        image: "/today-cloud-city/images/amenities/clubhouse.webp",
        description: "",
      },
      {
        title: "Mini Theatre",
        image: "/today-cloud-city/images/amenities/minitheatre.webp",
        description: "",
      },
      {
        title: "Co-working Spaces",
        image: "/today-cloud-city/images/amenities/coworkingspaces.webp",
        description: "",
      },
      {
        title: "Sky Garden",
        image: "/today-cloud-city/images/amenities/skygarden.webp",
        description: "",
      },
      {
        title: "Gazebo",
        image: "/today-cloud-city/images/amenities/gazebo.webp",
        description: "",
      },
      {
        title: "Kid's Play Area",
        image: "/today-cloud-city/images/amenities/ToddlersPlayArea.jpg",
        description: "",
      },
      {
        title: "Jogging Track",
        image: "/today-cloud-city/images/amenities/Joggingtrack1.webp",
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
      description: "Download the gallery of Today Cloud City",
    },
    images: [
      {
        title: "",
        image: "/today-cloud-city/images/gallery/g1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/today-cloud-city/images/gallery/g2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/today-cloud-city/images/gallery/g3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/today-cloud-city/images/gallery/g4.webp",
        description: "Resort-style pool with premium amenities",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2872.0008217237564!2d73.076218!3d19.089152199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1e9797c466b%3A0xd520125bb2f9ee71!2sToday%20Group%20Codename%20Cloud%20City%20Kharghar!5e1!3m2!1sen!2sin!4v1771743083589!5m2!1sen!2sin",
    image: {
      src: "/today-cloud-city/images/locationmap.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Taloja Metro Station",
        description: "3 mins",
      },
      {
        title: "Mumbai–Pune Expressway",
        description: "15 mins",
      },
      {
        title: "Navi Mumbai International Airport",
        description: "25 mins",
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
      "Experience Today Cloud City from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/today-cloud-city/images/banner1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Today Cloud City from the comfort of your home",
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
        src: "/today-cloud-city/images/ride.png",
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
        "According to the RERA Act 2016 of the Government of India, all projects of the Today Cloud City, are listed on the Maharashtra Government's RERA website under registered projects.",
      details: [
        {
          title: "Today Cloud City",
          reraNumber: "MahaRERA - P52000021559",
          qrCode: "/today-cloud-city/images/qr.webp",
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
          "Today Global Cloud City: Next to Reliance Petrol Pump, Rohinjan, Kharghar, Navi Mumbai, Maharashtra 410210",
      },
      {
        title: "Contact Us",
        description:
          "Corporate Office: Today Group: Office No.1601-1602, 16th Floor, Kesar Solitaire, Plot No.5, Palm Beach Road, Sector-19, Sanpada, Navi Mumbai, Maharashtra-400705",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Today Cloud City 2 & 3 BHK Flats in Kharghar | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Today Cloud City,Kharghar. 2 & 3 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "Today Cloud City",
      "2 bhk",
      "3 bhk",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Today Cloud City | Terms & Conditions",
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
      title: "Today Cloud City | Privacy Policy",
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
      title: "Today Cloud City | Cookies Policy",
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
      title: "Today Cloud City | Thank You",
      description: "Thank you for your interest in Today Cloud City",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_174",
      publicId: "58ec9a652058e51f2d2f5f42a547ff1b",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:1b3cdc7b40504e947d6886a08517ac877e7e3224,1678943220",
      __vtCurrency: "1",
      name: "Today Kharghar",
      cfLeadsProjectSite: "Dosti Eden",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Today Cloud City",
      },
    },
  },
};

export type TodayCloudCitySiteConfig = typeof todayCloudCitySiteConfig;
