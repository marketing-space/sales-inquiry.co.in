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

const route = routes.SiddhaWadala;

export const siddhaWadalaSiteConfig = {
  name: "Siddha Sky Wadala",
  about:
    "Sejal Realty was founded with a clear vision to enhance India’s infrastructure through a strong focus on social redevelopment and SRA initiatives. Dedicated to preserving Mumbai’s architectural and natural heritage, the Group strives to nurture, safeguard, and maintain the city’s legacy. Guided by the foresight of its Chairman, Managing Director, and a team of committed professionals, Sejal Realty continues to pursue new milestones with its core values of Excellence, Innovation, and Passion, building trust at every step.",
  contact: {
    phone: "+919619095795",
    whatsapp: "+919619095795",
    address:
      "Sion",
  },
  gtmId: "GTM-WX7SFDVF",
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
        "Download the brochure to learn more about Siddha Wadala",
    },
  },

  branding: {
    logo: "/siddha-wadala/images/logo.webp",
    favicon: "/icon.jpg",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/siddha-wadala/images/banner-1.webp",
        alt: "Siddha Wadala Interior",
      },
      {
        src: "/siddha-wadala/images/banner-2.webp",
        alt: "Siddha Wadala Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Siddha Wadala.",
      },
      title: "Welcome to Siddha Wadala",
      description: `Welcome to Siddha Sky – The Altaire Collection
Rising 400 feet above the city, the iconic rooftop skywalk redefines luxury living. With over 25 world-class rooftop amenities, you can indulge in infinity living anytime you desire. Sip your favorite drink at the exclusive Sky Bar while soaking in breathtaking views of the metropolis, and feel truly privileged every single day.

Step into thoughtfully designed 2 & 3 BHK residences that combine elegance with comfort, creating a timeless masterpiece you’ll be proud to call home. Wadala, now emerging as a prime hub of growth and investment, offers unmatched connectivity to major infrastructure projects and leading business districts.

Live beyond the ordinary—discover Siddha Sky, where life meets luxury in the sky.`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Wadala By Siddha Group",
      points: [
        { text: "Exciting Offers On Spot Booking" },
        { text: "Get 25:75 Subvention" },
        { text: "Go infinite 400 FT. Above Sea Level" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "6.5 Acres",
        },
        {
          title: "Floors",
          value: "29 Floors",
        },
        {
          title: "Possession",
          value: "Dec 2025",
        },
      ],
      price: {
        title: "Luxurious 2 & 3 BHK Skywalk Residence",
        value: "1.80 Cr*",
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
        type: "2 BHK with Balcony",
        carpetArea: "717 Sq.ft.",
        price: "1.95 Cr",
        suffix: "Onwards",
      },
      {
        type: "2 BHK with Balcony",
        carpetArea: "737 Sq.ft.",
        price: "2.01 Cr",
        suffix: "Onwards",
      },
      {
        type: "3 BHK",
        carpetArea: "916 Sq.ft.",
        price: "2.50 Cr",
        suffix: "Onwards",
      },
      
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/siddha-wadala/images/costing.webp",
        alt: "Siddha Wadala Costing",
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
        src: "/siddha-wadala/images/masterplan.jpg",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Siddha Wadala",
      },
    },
    floorPlans: {
      categories: ["All", "2 BHK", "3 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "2 BHK-717 Sq.ft.",
          image: "/siddha-wadala/images/floor-1.jpg",
          category: "2 BHK",
        },
        {
          type: "2 BHK-737 Sq.ft.",
          image: "/siddha-wadala/images/floor-1.jpg",
          category: "2 BHK",
        },
        {
          type: "3 BHK-916 Sq.ft.",
          image: "/siddha-wadala/images/floor-2.jpg",
          category: "3 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Siddha Wadala",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Siddha Wadala",
    },
    amenities: [
      {
        title: "Sky Jog With Nature",
        image: "/siddha-wadala/images/amenities/joggingpath_1.webp",
        description: "",
      },
      {
        title: "Informal Lawn Seating",
        image: "/siddha-wadala/images/amenities/casual-seating.png",
        description: "",
      },
      {
        title: "Art Corner",
        image: "/siddha-wadala/images/amenities/ArtRoom.jpg ",
        description: "",
      },
      {
        title: "Covered Lounge Seating",
        image: "/siddha-wadala/images/amenities/coverseating.png",
        description: "",
      },
      {
        title: "Yoga Lawn with Stage",
        image: "/siddha-wadala/images/amenities/yogazone_1.webp",
        description: "",
      },
      {
        title: "Seating Under Tree",
        image: "/siddha-wadala/images/amenities/seatingundertree.png",
        description: "",
      },
      {
        title: "Party Lawn with Amphitheatre",
        image: "/siddha-wadala/images/amenities/amphitheatre.webp",
        description: "",
      },
      {
        title: "BBQ with Dining Area",
        image: "/siddha-wadala/images/amenities/bbq.jpg",
        description: "",
      },
      {
        title: "Hammock Sitting",
        image: "/siddha-wadala/images/amenities/hammock.png",
        description: "",
      },
      {
        title: "Pergola Seating",
        image: "/siddha-wadala/images/amenities/pergola.jpg",
        description: "",
      },
      {
        title: "Work/Study Pods with Wi-Fi",
        image: "/siddha-wadala/images/amenities/studypod.png",
        description: "",
      },
      {
        title: "Senior Citizen Area",
        image: "/siddha-wadala/images/amenities/seniorcitizencorner11.webp",
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
      description: "Download the gallery of Siddha Wadala",
    },
    images: [
      {
        title: "",
        image: "/siddha-wadala/images/gallery/g4.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/siddha-wadala/images/gallery/g5.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/siddha-wadala/images/gallery/g6.webp",
        description: "Resort-style pool with premium amenities",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2872.9147962479365!2d72.8675830752044!3d19.036394282160032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfaf78bb0ba7%3A0x40bc1d125e65498a!2sSiddha%20Sky%2C%20Wadala!5e1!3m2!1sen!2sin!4v1757073735043!5m2!1sen!2sin",
    image: {
      src: "/siddha-wadala/images/locationmap.jpg",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: " Wadala station",
        description: "15 mins",
      },
      {
        title: " Monorail Station ",
        description: "1 Min",
      },
      {
        title: "Auxilium Convent High School",
        description: "10 Mins",
      },
      {
        title: " Chinmay Nursing Home ",
        description: "5 Mins",
      },
      {
        title: " Eastern Express Highway",
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
    description:
      "Experience Siddha Wadala from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/siddha-wadala/images/banner-1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Siddha Wadala from the comfort of your home",
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
        src: "/siddha-wadala/images/ride.png",
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
        "According to the RERA Act 2016 of the Government of India, all projects of the Siddha Wadala, are listed on the Maharashtra Government's RERA website under registered projects.",
      details: [
        {
          title: "Siddha Wadala",
          reraNumber: "MahaRERA - P51900021031",
          qrCode: "/siddha-wadala/images/qr.webp",
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
          "RERA Project Registration No.:P51900021031",
      },
      {
        title: "Site Address",
        description:
          "Siddha Wadala:GTB Nagar Monorail Station, Indira Nagar, Koliwada, Sion, Mumbai, Maharashtra 400037",
      },
      {
        title: "Contact Us",
        description:
          "Contact Us : 7|B66, Kedarnath Temple Rd,Nehru Nagar, Kurla East , Mumbai 400024",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Siddha Wadala 2 & 3 BHK Flats in Bhandup | Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Siddha Wadala, Bhandup. 2 & 3 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "Siddha Wadala",
      "2 bhk",
      "3 bhk",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Siddha Wadala | Terms & Conditions",
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
      title: "Siddha Wadala | Privacy Policy",
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
      title: "Siddha Wadala | Cookies Policy",
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
      title: "Siddha Wadala | Thank You",
      description: "Thank you for your interest in Siddha Wadala",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_150",
      publicId: "7410c2cc688acba102277306204ca291",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:1b3cdc7b40504e947d6886a08517ac877e7e3224,1678943220",
      __vtCurrency: "1",
      name: "Arkade Bhandup",
      cfLeadsProjectSite: "Dosti Eden",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Siddha Wadala",
      },
    },
  },
};

export type SiddhaWadalaSiteConfig = typeof siddhaWadalaSiteConfig;
