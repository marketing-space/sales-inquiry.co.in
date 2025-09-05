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

const route = routes.RustomjeeDombivli;

export const rustomjeeDombivliConfig = {
  name: "Rustomjee Urban Woods",
  about:
    "Established in 1996, Rustomjee Group is one of the leading real estate developers in India. The firm specialises in building properties that are luxurious, innovative in design, & use sustainable technologies. It has built fine residential townships, sleek commercial spaces, top healthcare institutions, & reputed schools in the country.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      "Dombivli",
  },
  gtmId: "GTM-MGPPHNHM",
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
        "Download the brochure to learn more about Rustomjee Urban Woods",
    },
  },

  branding: {
    logo: "/woods/images/logo.svg",
    favicon: "/icon.png",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/woods/images/deskban1.webp",
        alt: "Rustomjee Urban Woods Interior",
      },
      {
        src: "/woods/images/deskban2.webp",
        alt: "Rustomjee Urban Woods Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Rustomjee Urban Woods.",
      },
      title: "Welcome to  Rustomjee Urban Woods",
      description: `Rustomjee Urban Woods redefines city living with a perfect blend of sophistication, sustainability, and community spirit. Nestled amidst lush greenery, these exquisitely crafted homes come with private decks, creating a peaceful retreat from the city’s vibrant pace.

Every space is thoughtfully planned to cater to all generations—offering dedicated zones for children, serene corners for senior citizens, and versatile areas for family gatherings. Located in a prime, well-connected neighborhood, the community ensures seamless access to key landmarks, business hubs, and everyday essentials.

With innovative architecture and eco-friendly features, Rustomjee Urban Woods delivers a lifestyle that is both modern and mindful, fostering a warm sense of belonging while elevating the way you live.

`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Vicco Naka, Dombivli By Rustomjee Group",
      points: [
        { text: "Exclusive Payment Plan" },
        { text: "Exclusive spot booking offer" },
        { text: "No Stamp Duty" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "8-10 Acres",
        },
        {
          title: "Floors",
          value: " G+4P+E+16 Floors",
        },
        {
          title: "Possession",
          value: "Under Construction",
        },
      ],
      price: {
        title: "Luxurious 1, 2 & 3 BHK Homes",
        value: "49.49 Lac*",
        suffix: "Onwards",
      },
    },
  },

  pricing: {
    title: "Pricing Plans",
    description:
      "Choose from our range of luxurious 1, 2 & 3   BHK residences, each designed to offer the perfect blend of comfort and sophistication",
    prices: [
      {
        type: "1 BHK",
        carpetArea: "485 - 505 Sq.ft.",
        price: "49.49 Lacs*",
        suffix: "Onwards",
      },
      {
        type: "2 BHK",
        carpetArea: "585 - 677 Sq.ft.",
        price: "61.49 Lacs*",
        suffix: "Onwards",
      },
      {
        type: "3 BHK",
        carpetArea: "870 - 963 Sq.ft.",
        price: "1.15 Cr*",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/woods/images/costing.webp",
        alt: "Rustomjee Urban Woods Costing",
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
        src: "/woods/images/masterplan.jpg",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Rustomjee Urban Woods",
      },
    },
    floorPlans: {
      categories: ["All", "1 BHK","2 BHK", "3 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "1 BHK-485-505 Sq.ft.",
          image: "/woods/images/floor1.jpg",
          category: "1 BHK",
        },
        {
          type: "2 BHK-585-677 Sq.ft.",
          image: "/woods/images/floor1.jpg",
          category: "2 BHK",
        },
        {
          type: "3 BHK-870-963 Sq.ft.",
          image: "/woods/images/floor1.jpg",
          category: "3 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Rustomjee Urban Woods",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Rustomjee Urban Woods",
    },
    amenities: [
      {
        title: "Party Hall",
        image: "/woods/images/amenities/partyhall1.webp",
        description: "",
      },
      {
        title: "Swimming Pool",
        image: "/woods/images/amenities/swimmingpools1.webp",
        description: "",
      },
      {
        title: "Play Ground",
        image: "/woods/images/amenities/garden_01.webp",
        description: "",
      },
      {
        title: "Library",
        image: "/woods/images/amenities/library_01.webp",
        description: "",
      },
      {
        title: "Walking Track",
        image: "/woods/images/amenities/walking_01.webp",
        description: "",
      },
      {
        title: "Billiards Table",
        image: "/woods/images/amenities/indogame_01.webp",
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
      description: "Download the gallery of Rustomjee Urban Woods",
    },
    images: [
      {
        title: "",
        image: "/woods/images/gallery/1.jpg",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/woods/images/gallery/2.jpg",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/woods/images/gallery/3.jpg",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/woods/images/gallery/4.jpg",
        description: "Spacious bedrooms with modern aesthetics",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.0822900205712!2d73.12719097520848!3d19.19944278203067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79579ef1f7c77%3A0xb10fd44bce9221c1!2sUrban%20Woods%20by%20Rustomjee%20Dombivli%20Sales%20Office!5e1!3m2!1sen!2sin!4v1755244525723!5m2!1sen!2sin",
    image: {
      src: "/woods/images/map.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Metro Station",
        description: "6 Mins",
      },
      {
        title: "Dombivli Station",
        description: "10 Mins",
      },
      {
        title: "Mankoli Flyover",
        description: "10 Mins",
      },
      {
        title: "Kalyan-Shil Road  ",
        description: "5 Mins",
      },
      {
        title: "Airoli-Katai Elevated Road ",
        description: "10 Mins",
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
      "Experience Rustomjee Urban Woods from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/woods/images/deskban1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Rustomjee Urban Woods from the comfort of your home",
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
        src: "/woods/images/ride.png",
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
        "Rustomjee Urban Woods has been registered via MahaRERA registration number: P51700054892 and is available on the website https://maharera.mahaonline.gov.in/ under registered projects.",
      details: [
        {
          title: "Rustomjee Urban Woods",
          reraNumber: "MahaRERA - P51700054892",
          qrCode: "/woods/images/qr.jpg",
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
          "RERA Project Registration No.: P51700054892",
      },
      {
        title: "Site Address",
        description:
          "Rustomjee Urban Woods: Opp, Malang Gad Rd, Kalyan East, Dhokali, Kalyan, Maharashtra 421306",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Rustomjee Urban Woods 1,2 & 3 BHK Flats in Dombivli | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Rustomjee Urban Woods, Thane. 2 & 3 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "Rustomjee Urban Woods",
      "1 BHK",
      "2 bhk",
      "3 bhk",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Rustomjee Urban Woods | Terms & Conditions",
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
      title: "Rustomjee Urban Woods | Privacy Policy",
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
      title: "Rustomjee Urban Woods | Cookies Policy",
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
      title: "Rustomjee Urban Woods | Thank You",
      description: "Thank you for your interest in Rustomjee Urban Woods",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_149",
      publicId: "d28050ad82fd777f9d8d4be37632a02d",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:1b3cdc7b40504e947d6886a08517ac877e7e3224,1678943220",
      __vtCurrency: "1",
      name: "Rustomjee Dombivli",
      cfLeadsProjectSite: "Dosti Eden",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Rustomjee Urban Woods",
      },
    },
  },
};

export type RustomjeeDombivliConfig = typeof rustomjeeDombivliConfig ;
