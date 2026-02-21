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

const route = routes.RahejaJadeCity;

export const rahejaJadeCitySiteConfig = {
  name: "Raheja Jade City",
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
        "Download the brochure to learn more about Raheja Jade City",
    },
  },

  branding: {
    logo: "/raheja-jade-city/images/logo.svg",
    favicon: "/icon.jpg",
    ogImage: "/og-image.jpg",
  },

  hero: {
    banners: [
      {
        src: "/raheja-jade-city/images/banner1.webp",
        alt: "Raheja Jade City Interior",
      },
      {
        src: "/raheja-jade-city/images/banner2.webp",
        alt: "Raheja Jade City Interior",
      },
    ],
    welcome: {
      cta: {
        title: "Download Brochure",
        description:
          "Download the brochure to learn more about Raheja Jade City.",
      },
      title: "Welcome to Raheja Jade City",
      description: `K Raheja Jade City is a distinguished mixed-use development ideally situated in Juinagar, Navi Mumbai, offering a refined blend of residential, retail, and commercial spaces. Spread across an expansive 55-acre land parcel, the project features thoughtfully designed 1, 2, and 3 BHK residences along with spacious Jodi homes, crafted to reflect contemporary lifestyles and modern sensibilities.

Each home at Jade City is designed with well-planned layouts, elegant interiors, and functional spaces that seamlessly combine comfort and convenience. Built around the live-work-play philosophy, the development creates a self-sustained ecosystem where everyday essentials, business spaces, and leisure amenities coexist within the same vibrant community. An international-standard school within the township further enhances its appeal, ensuring access to quality education right at your doorstep.

Residents can enjoy a wide array of premium amenities, including a grand clubhouse, amphitheatre, adventure playground, landscaped open areas, solar-powered common spaces, high-speed elevators, CCTV surveillance, dedicated kids’ play zones, and serene sit-out areas for senior citizens.

Strategically located, Raheja Jade City offers excellent connectivity through the Nerul Flyover and nearby railway stations such as Juinagar and Vashi, along with access to the Kharghar Metro Station. Prominent social and commercial hubs including Inorbit Mall, IKEA, reputed hospitals, educational institutions, business parks, banks, restaurants, and entertainment centers are all within easy reach — ensuring unmatched convenience.

Experience a lifestyle defined by comfort, elegance, and holistic living at K Raheja Jade City.`,
    },
    offer: {
      title: "Booking Open: Limited Time Only",
      location: "At Juinagar, Navi Mumbai By Raheja Universal",
      points: [
        { text: "Exclusive Pre-Launch Benefits" },
        { text: "EOI Amount ₹2 Lac:Book Now" },
        { text: "Best Prices & Early Selection Offer" },
      ],
      cta: {
        title: "Book A Free Site Visit",
        description: "Schedule at your convenience",
      },
      features: [
        {
          title: "Land Parcel",
          value: "55 Acres",
        },
        // {
        //   title: "Floors",
        //   value: "G+32 Floors",
        // },
        {
          title: "Possession",
          value: "Dec 2030",
        },
      ],
      price: {
        title: "Luxurious 1, 2, 3 BHK & Jodi Starts from",
        value: "1.35 Cr",
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
        carpetArea: "490 Sq.ft. – 500 Sq.ft.",
        price: "98 Lacs*",
        suffix: "Onwards",
      },
      {
        type: "1+1 BHK",
        carpetArea: "980 Sq.ft. – 1000 Sq.ft.",
        price: "2.75 Cr – 2.85 Cr",
        suffix: "Onwards",
      },
      {
        type: "2 BHK",
        carpetArea: "700 Sq.ft. – 710 Sq.ft.",
        price: "1.99 Cr",
        suffix: "Onwards",
      },
      {
        type: "2+2 BHK",
        carpetArea: "1400 Sq.ft. - 1420 Sq.ft.",
        price: "3.90 Cr – 4.15 Cr",
        suffix: "Onwards",
      },
      {
        type: "3 BHK",
        carpetArea: "1020 Sq.ft. - 1030 Sq.ft.",
        price: "3.20 Cr",
        suffix: "Onwards",
      },
    ],
    cta: {
      title: "Price Breakup",
      description: "Request complete pricing information",
    },
    detailPricing: {
      image: {
        src: "/raheja-jade-city/images/costing.webp",
        alt: "Raheja Jade City Costing",
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
        src: "/raheja-jade-city/images/masterplan.webp",
        alt: "Master Plan",
      },
      cta: {
        title: "View Master Plan",
        description: "Explore the layout of Raheja Jade City",
      },
    },
    floorPlans: {
      categories: ["All", "1 BHK", "2 BHK", "3 BHK"],
      title: "Floor Plans",
      plans: [
        {
          type: "1 BHK-490-500 Sq.ft.",
          image: "/raheja-jade-city/images/coming.jpg",
          category: "1 BHK",
        },
        {
          type: "2 BHK-700-710 Sq.ft.",
          image: "/raheja-jade-city/images/coming.jpg",
          category: "2 BHK",
        },
        {
          type: "3 BHK-1020-1030 Sq.ft.",
          image: "/raheja-jade-city/images/coming.jpg",
          category: "3 BHK",
        },
      ],
      cta: {
        title: "Enquire Now",
        description: "Explore the layout of Raheja Jade City",
      },
    },
  },

  amenities: {
    title: "Amenities",
    description:
      "Discover a lifestyle enriched with premium amenities and facilities",
    cta: {
      title: "Download Amenities",
      description: "Download the amenities of Raheja Jade City",
    },
    amenities: [
      {
        title: "Clubhouse",
        image: "/raheja-jade-city/images/amenities/clubhouse.webp",
        description: "",
      },
      {
        title: "Swimming Pool",
        image: "/raheja-jade-city/images/amenities/swimmingpools1.webp",
        description: "",
      },
      {
        title: "Multipurpose Hall",
        image: "/raheja-jade-city/images/amenities/MultipurposeHall11.webp",
        description: "",
      },
      {
        title: "Sports Court",
        image: "/raheja-jade-city/images/amenities/multipurposesportscourt.webp",
        description: "",
      },
      {
        title: "Garden",
        image: "/raheja-jade-city/images/amenities/garden.jpg",
        description: "",
      },
      {
        title: "Amphiteatre",
        image: "/raheja-jade-city/images/amenities/amphi_01.webp",
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
      description: "Download the gallery of Raheja Jade City",
    },
    images: [
      {
        title: "",
        image: "/raheja-jade-city/images/gallery/g1.webp",
        description: "Elegantly designed living spaces with premium finishes",
      },
      {
        title: "",
        image: "/raheja-jade-city/images/gallery/g2.webp",
        description: "Breathtaking views of landscaped gardens",
      },
      {
        title: "",
        image: "/raheja-jade-city/images/gallery/g3.webp",
        description: "Resort-style pool with premium amenities",
      },
      {
        title: "",
        image: "/raheja-jade-city/images/gallery/g4.webp",
        description: "Resort-style pool with premium amenities",
      },
    ],
  },

  map: {
    title: "Location",
    description: "Strategically located for your convenience",
    googleMapIframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2872.667025590058!2d73.0279425!3d19.0507104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c32a8e58acc3%3A0xae0923e490d002ff!2sRaheja%20Jade%20City%20%E2%80%93%20Juinagar!5e1!3m2!1sen!2sin!4v1771676127578!5m2!1sen!2sin",
    image: {
      src: "/raheja-jade-city/images/locationmap.webp",
      alt: "Location Map",
    },
    landmarks: [
      {
        title: "Rajiv Gandhi Bridge Nerul",
        description: "7 mins",
      },
      {
        title: "Sion Panvel Highway",
        description: "8 mins",
      },
      {
        title: "Palm Beach Road",
        description: "11 mins",
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
      "Experience Raheja Jade City from the comfort of your home",
    cta: {
      title: "Request Virtual Tour",
      description: "Schedule at your convenience",
    },
    image: {
      src: "/raheja-jade-city/images/banner1.webp",
      alt: "Virtual Tour",
    },
    videoTitle: "Virtual Tour",
    videoDescription:
      "Experience Raheja Jade City from the comfort of your home",
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
        src: "/raheja-jade-city/images/ride.png",
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
        "According to the RERA Act 2016 of the Government of India, all projects of the Raheja Jade City, are listed on the Maharashtra Government's RERA website under registered projects.",
      details: [
        {
          title: "Raheja Jade City",
          reraNumber: "MahaRERA - P51700080277",
          qrCode: "/raheja-jade-city/images/qr.webp",
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
          "RERA Project Registration No.:P51700080277",
      },
      {
        title: "Site Address",
        description:
          "K Raheja Jade City: Juinagar, Navi Mumbai, Maharashtra - 400705",
      },
    ],
    disclaimer:
      "The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.",
  },

  seo: {
    title:
      "Raheja Jade City 2 & 3 BHK Flats in Sion| Price, Floor Plans, Amenities | Request Brochure",
    description:
      "Experience luxury living at Raheja Jade City,Sion. 2 & 3 BHK apartments with world-class amenities.",
    keywords: [
      "luxury apartments",
      "Raheja Jade City",
      "2 bhk",
      "3 bhk",
    ],
  },

  termsAndConditions: {
    seo: {
      title: "Raheja Jade City | Terms & Conditions",
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
      title: "Raheja Jade City | Privacy Policy",
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
      title: "Raheja Jade City | Cookies Policy",
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
      title: "Raheja Jade City | Thank You",
      description: "Thank you for your interest in Raheja Jade City",
    },
  },

  formSubmission: {
    crm: {
      formId: "__vtigerWebForm_147",
      publicId: "41e636a7297d9f5463170d53f10fb4e2",
      baseUrl: "https://company133638.od2.vtiger.com",
      __vtrftk: "sid:1b3cdc7b40504e947d6886a08517ac877e7e3224,1678943220",
      __vtCurrency: "1",
      name: "Raheja Jade City",
      cfLeadsProjectSite: "Dosti Eden",
      leadSource: "Web",
      emailOptin: "1",
    },
    email: {
      apiEndpoint: "/api/send-email",
      template: {
        subject: "New Enquiry from Raheja Jade City",
      },
    },
  },
};

export type RahejaJadeCitySiteConfig = typeof rahejaJadeCitySiteConfig;
