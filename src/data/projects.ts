import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "E-commerce App",
    href: "/projects",
    tags: ["MERN", "JWT", "Postman API", "Braintree Paypal"],
    image: {
      LIGHT: "/images/projects/ecom.jpeg",
      DARK: "/images/projects/ecom.jpeg",
    },
  },
  {
    index: 1,
    title: "Food Ordering Platform",
    href: "/projects",
    tags: [
      "MERN",
      "React",
      "Vite",
      "Typescript",
      "Shadcn",
      "Auth0",
      "Stripe CLI",
    ],
    image: {
      LIGHT: "/images/projects/mern-food.jpeg",
      DARK: "/images/projects/mern-food.jpeg",
    },
  },
  {
    index: 2,
    title: "Music App",
    href: "/projects",
    tags: ["Nextjs", "Typescript", "Tailwindcss", "Aceternity-ui", "Vercel"],
    image: {
      LIGHT: "/images/projects/music-app.jpg",
      DARK: "/images/projects/music-app.jpg",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "E-commerce App",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: ["/images/projects/ecom.jpeg", "/images/projects/ecom.jpeg"],
    description:
      "Implemented Product Display, Filtering, Load More, CRUD Operations, User Authentication (Register, Login, Forgot Password), Sluggified URLs, and Braintree PayPal Integration",
    sourceCodeHref: "https://github.com/AshishBhosle17/mern-stack-ecom",
  },
  {
    name: "Food Ordering Platform",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: ["/images/projects/mern-food.jpeg"],
    description:
      "Secure User Authentication, advanced Search functionality with sorting and filtering options, enabled pagination with LIVE Order Tracking/Status. Along with Stripe payment gateway and STRIPE CLI",
    sourceCodeHref: "https://github.com/AshishBhosle17/mern-food-app",
  },
  {
    name: "Nextjs Music-App",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: ["/images/projects/music-app.jpg"],
    description:
      "Built a User friendly, interactive and intuitive Music-app using Aceternity- an open-source UI library and its components along with Tailwind CSS",
    sourceCodeHref: "https://github.com/AshishBhosle17/nextjs-music-app",
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolio.jpg",
      "/images/projects/portfolioLight.webp",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/BUMBAIYA/amitchauhan-v2",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "Covid Tracker",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: [
      "/images/projects/covidTracker.webp",
      "/images/projects/covidTrackerMap.webp",
      "/images/projects/covidTrackerTable.webp",
    ],
    description:
      "Get latest covid related stats in a table where user can filter using country and cases. It also has a map which show every countries data for quick view. It uses an open source api (disease.sh). Made using Reactjs, Javascript and MUI",
    sourceCodeHref: "https://github.com/BUMBAIYA/CovidTracker",
    liveWebsiteHref: "https://bumbaiya.github.io/CovidTracker",
  },
  {
    name: "Stock predictor",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/stockPredictor.webp",
      "/images/projects/stockPredictorCandleChart.webp",
      "/images/projects/stockPredictorCompareChart.webp",
      "/images/projects/stockPredictorLineChart.webp",
    ],
    description:
      "Get prediction of opening and closing price of stocks price. Frontend is made using Reactjs and backend is made using Flask and Machine learning model are trained using Tensorflow",
    sourceCodeHref: "https://github.com/Rohrschachh/Stock-Market-Predictor",
  },
];
