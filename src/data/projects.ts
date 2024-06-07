import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

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
    name: "My Portfolio",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/portfolio.jpg"],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/AshishBhosle17/my-portfolio",
    liveWebsiteHref: "https://my-portfolio-xi-sand.vercel.app/",
  },
  {
    name: "e-Commerce Website",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: ["/images/projects/ecom-app.png"],
    description:
      "Fully responsive and multi-page Ecommerce website using HTML CSS and JS. Dynamic Product listing and interactive elements like hover effects, flexbox and CSS grid for layouts",
    sourceCodeHref: "https://github.com/AshishBhosle17/Ecommerce-web-site",
    liveWebsiteHref: "https://ecommerce-site-by-ashish.vercel.app/#",
  },
  {
    name: "REACT Routing App",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: ["/images/projects/react-route.png"],
    description:
      "Integrated React Router with state management libraries like Redux for managing application-wide state related to routing.",
    sourceCodeHref: "https://github.com/AshishBhosle17/React-Routing-Website",
    liveWebsiteHref: "https://react-routing-website-psi.vercel.app/",
  },
];
