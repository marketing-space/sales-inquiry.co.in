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

const route = routes.AshfordRegal;

export const ashfordRegalSiteConfig = {
  name: "Ashford Regal Nahur",
  about:
    "Founded in 1990 at a time of change and opportunity in India, Ashford was created by a visionary group of professionals determined to raise the bar in real estate. Built on a strong spirit of collaboration, the company has delivered exceptional developments across Mumbai’s Western and Central corridors. At Ashford, the craft of building a home is thoughtfully balanced with precision in design and functionality. Its true distinction lies in redefining luxury without compromise — creating homes that are not just meant for today, but designed to last for generations.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      "Nahur",
  },
  gtmId: "GTM-TWVKFK3G",
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
        "Download the brochure to learn more about Ashford Regal Nahur",
    },
  },

  branding: {
    logo: "/ashford-regal/images/logo.jpeg",
    favicon: "/icon.jpeg",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/ashford-regal/images/banner-1.webp",
        alt: "Ashford Regal Nahur Interior",
      },
      {
        src: "/ashford-regal/images/banner-2.webp",
        alt: "Ashford Regal Nahur Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Ashford Regal Nahur.",
      },
      title: "Welcome to Ashford Regal Nahur",
      description: `Located in Nahur West, Ashford Regal presents an expansive 5.5-acre township envisioned by Hafeez Contractor, offering an elevated standard of urban living. The development features five 40-storey towers with sweeping views of the Eastern Mangroves, complemented by a five-level podium dedicated to premium lifestyle amenities. With seamless connectivity and close access to the upcoming Goregaon–Mulund Link Road, residents enjoy both comfort and convenience at their doorstep.

Designed to embody timeless elegance, Ashford Regal brings together refined luxury and purposeful living, creating a community defined by comfort and distinction. The thoughtfully planned 1 and 2 BHK residences feature intelligent layouts, high-quality finishes, and interiors crafted to maximize space and functionality — delivering a truly regal living experience every day.
`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Nahur By Ashford Group",
      points: [
        { text: "No Floor Rise*" },
        { text: "Avail Best Payment Plans*" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "5.5 Acres",
        },
        {
          title: "Floors",
          value: "G+39 Storey",
        },
        // {
        //   title: "Possession",
        //   value: "Dec 2030",
        // },
      ],
      price: {
        title: "Luxurious 1 & 2 BHK With Balcony Starts from",
        value: "95 Lacs*",
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
        type: "1 BHK + Deck",
        carpetArea: "On Request",
        price: "95 Lacs*",
        suffix: "Onwards",
      },
      {
        type: "2 BHK + Deck",
        carpetArea: "On Request",
        price: "1.46 Cr*",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/ashford-regal/images/costing.webp",
        alt: "Ashford Regal Nahur Costing",
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
        src: "/ashford-regal/images/masterplan.webp",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Ashford Regal Nahur",
      },
    },
    floorPlans: {
      categories: ["All", "1 BHK", "2 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "1 BHK",
          image: "/ashford-regal/images/plan-1.webp",
          category: "1 BHK",
        },
        {
          type: "2 BHK",
          image: "/ashford-regal/images/plan-1.webp",
          category: "2 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Ashford Regal Nahur",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Ashford Regal Nahur",
    },
    amenities: [
      {
        title: "Cafeteria",
        image: "/ashford-regal/images/amenities/cafeteria_1.webp",
        description: "",
      },
      {
        title: "Swimming Pool",
        image: "/ashford-regal/images/amenities/swimmingpools1.webp",
        description: "",
      },
      {
        title: "Library",
        image: "/ashford-regal/images/amenities/library-lounge.jpg",
        description: "",
      },
      {
        title: "Kid's Play Area",
        image: "/ashford-regal/images/amenities/kidsplayarea.webp",
        description: "",
      },
      {
        title: "Gym",
        image: "/ashford-regal/images/amenities/gym.webp",
        description: "",
      },
      {
        title: "Jain Temple",
        image: "/ashford-regal/images/amenities/temple_01.webp",
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
      description: "Download the gallery of Ashford Regal Nahur",
    },
    images: [
      {
        title: "",
        image: "/ashford-regal/images/gallery/g1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/ashford-regal/images/gallery/g2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/ashford-regal/images/gallery/g3.webp",
        description: "Resort-style pool with premium amenities",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d45934.49462898358!2d72.944018!3d19.15217!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9006dfcf819%3A0x44f7e5fee327fac!2sASHFORD%20Regal!5e1!3m2!1sen!2sus!4v1772272710367!5m2!1sen!2sus",
    image: {
      src: "/ashford-regal/images/locationmap.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Nahur Station ",
        description: "2 Mins",
      },
      {
        title: "Eastern Express Highway",
        description: "6 Mins",
      },
      {
        title: "LBS Road ",
        description: "2 Mins",
      },
      {
        title: "JVLR",
        description: "9 Mins",
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
      "Experience Ashford Regal Nahur from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/ashford-regal/images/banner-1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Ashford Regal Nahur from the comfort of your home",
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
        src: "/ashford-regal/images/ride.png",
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
        "According to the RERA Act 2016 of the Government of India, all projects of the Ashford Regal Nahur, are listed on the Maharashtra Government's RERA website under registered projects.",
      details: [
        {
          title: "Ashford Regal Nahur",
          reraNumber: "MahaRERA - P51800047421",
          qrCode: "/ashford-regal/images/qr.jpg",
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
          "RERA Project Registration No.:P51800047421",
      },
      {
        title: "Site Address",
        description:
          "Ashford Regal Nahur: RM Ashford Regal Rd, Nahur West, Industrial Area, Bhandup West, Mumbai, Maharashtra 400078, India",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Ashford Regal Nahur 1, 2, 3 BHK & Jodi in Navi Mumbai | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Ashford Regal Nahur,Navi Mumbai. 2 & 3 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "Ashford Regal Nahur",
      "1 bhk",
      "2 bhk",
      "3 bhk",
      "jodi",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Ashford Regal Nahur | Terms & Conditions",
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
      title: "Ashford Regal Nahur | Privacy Policy",
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
      title: "Ashford Regal Nahur | Cookies Policy",
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
      title: "Ashford Regal Nahur | Thank You",
      description: "Thank you for your interest in Ashford Regal Nahur",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_175",
      publicId: "092c0d32d0cff27fae3086b6de0055ec",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:1b3cdc7b40504e947d6886a08517ac877e7e3224,1678943220",
      __vtCurrency: "1",
      name: "Ashford Regal",
      cfLeadsProjectSite: "Dosti Eden",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Ashford Regal Nahur",
      },
    },
  },
};

export type AshfordRegalSiteConfig = typeof ashfordRegalSiteConfig;
