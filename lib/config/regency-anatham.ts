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

const route = routes.Anantam;

export const lodhaAmaraSiteConfig = {
  name: "Regency Anantam",
  about:
    "Experience a luxurious lifestyle at Regency Anantam, a prestigious residential address in Dombivli. Nestled amidst lush greenery, this property offers elegant 1 and 2 BHK apartments with sundecks, perfect for enjoying a cup of chai while taking in the beautiful views. The development features a grand 3-level clubhouse, sports garden, themed parks, and various amenities that ensure a leisure-filled living experience. Residents can also enjoy the convenience of an on-site temple, community hall, and business center.Located in the well-connected area of Dombivli East, Regency Anantam is surrounded by top-notch schools, malls, and hospitals. Nearby landmarks include NES International School, K V Pendharkar College, Aims Hospital, Dombivli Railway Station, Kalyan-Shil Road, and the upcoming Kalyan-Taloja Metro Line. With spacious residences in a prime locale, Regency Anantam offers an exceptional lifestyle where every desire is met and every wish is beautifully fulfilled!",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      "Kolshet Rd, Kolshet Industrial Area, Thane West, Thane, Maharashtra 400607",
  },
  gtmId: "GTM-MBXH4FXP",
  navbar: {
    navItems: [
      {
        href: `/${route}/#home`,
        label: "Home",
        icon: Home,
      },
      {
        href: `/${route}/#price`,
        label: "Price",
        icon: IndianRupee,
      },
      {
        href: `/${route}/#site-plan`,
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
        href: `/${route}/#virtual-tour`,
        label: "Virtual Site Visit",
        icon: Video,
      },
    ],
    cta: {
      title: "Download Brochure",
      description: "Download the brochure to learn more about Regency Anantam",
    },
  },

  branding: {
    logo: "/anantham/images/logo.svg",
    favicon: "/anantham/images/favicon.png",
    ogImage: "/anantham/images/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/anantham/images/banner-1.png",
        alt: "Regency Anantam Exterior",
      },
      {
        src: "/anantham/images/banner-2.png",
        alt: "Regency Anantam Exterior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description: "Download the brochure to learn more about Regency Anantam.",
      },
      title: "Welcome To Regency Anantam",
      description: `Experience a refreshing lifestyle at Regency Anantam, a stunning residential address in Dombivli. This property boasts lavish 1 and 2 BHK apartments complete with sundecks, perfect for savoring a cup of chai while soaking in beautiful views. The sprawling complex includes a magnificent 3-level clubhouse, a sports garden, themed parks, and more, offering a truly leisure-filled lifestyle. Additionally, it features a temple, community hall, and business centre within its premises.
        
      The vibrant locale of Dombivli East offers a remarkable array of schools, malls, and hospitals, all within easy reach. Nearby landmarks include NES International School, K V Pendharkar College, Aims Hospital, Dombivli Railway Station, Kalyan-Shil Road, and the upcoming Kalyan-Taloja Metro Line. Regency Anantam combines spacious residences with an enviable location, ensuring that your desires are met, and your dreams are spectacularly fulfilled!`,
    },
    offer: {
      title: "Booking Open",
      location: "At Thane by Lodha Group",
      points: [
        { text: "Pay 5% Now & Rest On OC" },
        { text: "Assured Gold Coin On Booking" },
        { text: "Spot Booking Offers" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "32 Acres",
        },
        {
          title: "Floors",
          value: "G+28 Storeys",
        },
        {
          title: "Possession",
          value: "RTMI / UC",
        },
      ],
      price: {
        title: "Luxurious 1, 2 & 3 BHK Starts from",
        value: "39.95 Lacs",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 2, 3 & 4 BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "1 BHK",
        carpetArea: "508 Sq.ft.",
        price: "39.95 Lacs",
        suffix: "Onwards",
      },
      {
        type: "1 BHK",
        carpetArea: "527 Sq.ft.",
        price: "₹46.95 Lacs",
        suffix: "Onwards",
      },
      {
        type: "2 BHK",
        carpetArea: "755 Sq.ft.",
        price: "₹59.95 Lacs",
        suffix: "Onwards",
      },
      {
        type: "2 BHK",
        carpetArea: "771 Sq.ft.",
        price: "₹61.95 Lacs",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/anantham/images/costing.jpg",
        alt: "Regency Anantam Costing",
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
        src: "/anantham/images/masterplan.webp",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Regency Anantam",
      },
    },
    floorPlans: {
      categories: ["All", "1 BHK", "2 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "1 BHK-508 Sq.ft.",
          image: "/anantham/images/floor-1.webp",
          category: "1 BHK",
        },
        {
          type: "1 BHK-527 Sq.ft.",
          image: "/anantham/images/floor-2.webp",
          category: "2 BHK",
        },
        {
          type: "2 BHK-755 Sq.ft.",
          image: "/anantham/images/floor-3.webp",
          category: "2 BHK",
        },
        {
          type: "2 BHK-771 Sq.ft.",
          image: "/anantham/images/floor-4.jpg",
          category: "2 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Regency Anantam",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Regency Anantam",
    },
    amenities: [
      {
        title: "Banquet Hall",
        image: "/anantham/images/amenities/banquethall.webp",
        description: "",
      },
      {
        title: "Basketball Court",
        image: "/anantham/images/amenities/basketballcourt.webp",
        description: "",
      },
      {
        title: "Club House",
        image: "/anantham/images/amenities/clubhouse.webp",
        description: "",
      },
      {
        title: "Fitness Zone",
        image: "/anantham/images/amenities/fitnesszone.webp",
        description: "",
      },
      {
        title: "Games Room",
        image: "/anantham/images/amenities/gamesroom.webp",
        description: "",
      },
      {
        title: "Gym",
        image: "/anantham/images/amenities/Gymnasium.png",
        description: "",
      },
      {
        title: "Jogging Track",
        image: "/anantham/images/amenities/joggingtrack.webp",
        description: "",
      },
      {
        title: "Leisure Garden",
        image: "/anantham/images/amenities/leisuregarden.webp",
        description: "",
      },
      {
        title: "Massage Room",
        image: "/anantham/images/amenities/massageroom.webp",
        description: "",
      },
      {
        title: "Mini Theatre",
        image: "/anantham/images/amenities/minitheatre.webp",
        description: "",
      },
      {
        title: "Senior Citizen Corner",
        image: "/anantham/images/amenities/seniorcitizencorner.webp",
        description: "",
      },
      {
        title: "Swimming Pool",
        image: "/anantham/images/amenities/swimmingpool.webp",
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
      description: "Download the gallery of Lodha Amara",
    },
    images: [
      {
        title: "",
        image: "/anantham/images/gallery/gallery-1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/anantham/images/gallery/gallery-2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/anantham/images/gallery/gallery-3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/anantham/images/gallery/gallery-4.webp",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d183679.5709255949!2d73.118672!3d19.204544!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79544f10453f5%3A0xeea076fc66ed090b!2sRegency%20Anantam!5e1!3m2!1sen!2sin!4v1736502493981!5m2!1sen!2sin",
    image: {
      src: "/anantham/images/map.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "K V Pendharkar College",
        description: "6 Mins",
      },
      {
        title: "NES International School",
        description: "8 Mins",
      },
      {
        title: "Xperia Mall",
        description: "20 Mins",
      },
      {
        title: "Aims Hospital",
        description: "8 Mins",
      },
      {
        title: "Dombivli Railway Station",
        description: "15 Mins",
      },
      {
        title: "Kalyan Shilphata Road",
        description: "5 Mins",
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
    description: "Experience Regency Anantam from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/anantham/images/banner-1.png",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription: "Experience Regency Anantam from the comfort of your home",
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
        src: "/anantham/images/ride.png",
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
          reraNumber: "Rera No. P51700033477",
          qrCode: "/anantham/images/phase4.webp",
        },
        {
          title: "",
          reraNumber: "Rera No. P51700033506",
          qrCode: "/anantham/images/phase5.webp",
        },
        {
          title: "",
          reraNumber: "Rera No. P51700049211",
          qrCode: "/anantham/images/phase6.webp",
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
          "RERA Project Registration No.: P51700033477 / P51700033506 / P51700049211 ",
      },
      {
        title: "Site Address",
        description:
          "Regency Anantam: Vicco Naka, Dombivli East, Dombivli, Maharashtra 421203",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Regency Anantam | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Lodha Amara, 2 & 3 BHK apartments with world-class amenities.",
    keywords: ["luxury apartments", "Regency Anantam", "2 bhk", "3 bhk"],
  },

  footer: {
    termsConditions: { href: `/${route}/terms-conditions` },
    privacyPolicy: { href: `/${route}/privacy-policy` },
    cookiesPolicy: { href: `/${route}/cookies-policy` },
  },

  termsAndConditions: {
    seo: {
      title: "Terms & Conditions | Regency Anatham",
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
      title: "Privacy Policy | Regency Anatham",
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
      title: "Cookies Policy | Regency Anatham",
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
      title: "Regency Anatham | Thank You",
      description: "Thank you for your interest in Regency Anatham",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_65",
      publicId: "3214da20952cba977370709ecd435da9",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:d0b203e8fb8ff53c5b3673fb24119e03ae930517,1680088576",
      __vtCurrency: "1",
      name: "Regency Anantam",
      cfLeadsProjectSite: "Swaminarayan City",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Regency Anatham",
      },
    },
  },
};

export type SiteConfig = typeof lodhaAmaraSiteConfig;
