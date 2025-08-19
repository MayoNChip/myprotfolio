import guruImage from "../public/guru.png";
import ChatAppImage from "../public/angularTodos.png";
import DebateItImage from "../public/debateit.png";
import { StaticImageData } from "next/image";
import reactLogo from "../public/reactlogo.png";
import jsLogo from "../public/jslogo.png";
import cssLogo from "../public/csslogo.png";
import nextLogo from "../public/next.svg";
import nodeJsLogo from "../public/nodejslogo.png";
import tailwindLogo from "../public/tailwindlogo.png";
import tsLogo from "../public/Typescript_logo_2020.svg";
import expressLogo from "../public/Expressjs.png";
import chakraLogo from "../public/chakra.png";
import angularLogo from "../public/angular.png";
import postgresLogo from "../public/postgreslogo.png";
import mongoDBLogo from "../public/mongodblogo.png";
import framerMotionLogo from "../public/framermotion.svg";
import bestPalsProject from "../public/bestpals.png";
import hebrewAiImage from "../public/hebrew-ai-homescreen.png";
import vistaPointImage from "../public/vistapoint.png";
import pythonLogo from "../public/pythonlogo.png";
import awsLogo from "../public/awslogo.png";
import nestJsLogo from "../public/nestjslogo.png";

export type Project = {
  id: number;
  title: string;
  description: string;
  responsibilities?: string;
  tags: TagNames[];
  app_url?: string;
  example_user?: string;
  repository_url?: string;
  image: StaticImageData;
  elementId: string;
  hosting?: {
    frontend?: string;
    backend?: string;
  };
};

// Convert the tags array to a mapped type
type TagNames = (typeof tags)[number]["name"]; // Gets the type of an element in the tags array

// Extract tag names as a union type

export const tags = [
  {
    name: "React",
    logo: reactLogo,
  },
  {
    name: "Next",
    logo: nextLogo,
  },
  {
    name: "TailwindCSS",
    logo: tailwindLogo,
  },
  {
    name: "Typescript",
    logo: tsLogo,
  },
  {
    name: "Node",
    logo: nodeJsLogo,
  },
  {
    name: "Express",
    logo: expressLogo,
  },
  {
    name: "NestJS",
    logo: nestJsLogo,
  },
  {
    name: "python",
    logo: pythonLogo,
  },
  {
    name: "AWS",
    logo: awsLogo,
  },

  {
    name: "Javascript",
    logo: jsLogo,
  },
  {
    name: "CSS",
    logo: cssLogo,
  },
  {
    name: "ChakraUI",
    logo: chakraLogo,
  },
  {
    name: "AngularJS",
    logo: angularLogo,
  },
  {
    name: "Frontend",
  },
  {
    name: "Backend",
  },
  {
    name: "Full Stack",
  },
  {
    name: "postgreSQL",
    logo: postgresLogo,
  },
  {
    name: "MongoDB",
    logo: mongoDBLogo,
  },
  {
    name: "FramerMotion",
    logo: framerMotionLogo,
  },
];

export const getProjectTags = (project: Project) => {
  return tags.filter((tag) => project.tags.includes(tag.name));
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Hebrew AI - AI Transcription Platform",
    elementId: "hebrew-ai",
    description:
      "Hebrew AI is a specialized AI transcription platform for Hebrew and English audio files. Built with Next.js and advanced language processing, it offers accurate transcription, sentiment analysis, content summarization, and translation capabilities. The platform uses custom 'ivrit.ai' language models to handle Israeli slang, dialects, and professional terminology with high accuracy.",
    responsibilities:
      "Led frontend development of the transcription interface, implemented user authentication and file upload systems, optimized performance for large audio file processing, and integrated AI transcription APIs with real-time progress tracking.",
    tags: ["Next", "React", "TailwindCSS", "Frontend", "Typescript"],
    app_url: "https://www.hebrew-ai.com",
    repository_url: "",
    image: hebrewAiImage,
    hosting: {
      frontend: "AWS",
      backend: "AWS",
    },
  },
  {
    id: 2,
    title: "VistaPoint - Israel Heritage Sites",
    elementId: "vistapoint",
    description:
      "VistaPoint is a heritage tourism platform featuring physical points of interest across Israel. Visitors can discover historical sites, memorials, and landmarks by scanning QR codes on-location to access rich historical content and stories about each site's significance.",
    responsibilities:
      "Implemented AI-powered translation features, developed new UI components and designs, performed comprehensive bug fixes, and built a separate lead scraping application for business development (currently in development).",
    tags: ["AngularJS", "NestJS", "Full Stack", "Typescript"],
    app_url: "https://israelpoi.com/",
    repository_url: "",
    image: vistaPointImage,
    hosting: {
      frontend: "AWS",
      backend: "AWS",
    },
  },
  {
    id: 6,
    elementId: "guru",
    title: "guru - Grocery shop",
    description:
      "guru is a grocery shop full stack project, it was a group project as part of my bootcamp at ITC israel. I worked on the frontend side of the project.",
    responsibilities:
      "Developed the complete frontend interface using React and ChakraUI, implemented responsive design patterns, created reusable component library, and integrated with backend APIs for product management and shopping cart functionality.",
    tags: ["React", "ChakraUI", "Frontend", "Javascript"],
    repository_url: "https://github.com/MayoNChip/group-project-frontend",
    image: guruImage,
  },
  {
    id: 4,
    title: "do! - Todo's App",
    elementId: "do",
    description:
      "A to do app that was made to learn and practice angular. It was made with angular and tailwindcss and took advantage of the jsonplaceholder api to allow users to login and manage todos. below is an email to login for testing (password does not matter, any 6 characters or more will do). hosted on Vercel.",
    responsibilities:
      "Built the complete Angular application from scratch, implemented authentication flow with JSONPlaceholder API, designed responsive UI with TailwindCSS, and deployed the application with proper hosting configuration.",
    tags: ["AngularJS", "TailwindCSS", "Frontend", "Typescript"],
    example_user: "Telly.Hoeger@billy.biz",
    repository_url: "https://github.com/MayoNChip/angular-todoapp",
    app_url: "https://angular-todoapp-idoc.vercel.app/",
    image: ChatAppImage,
    hosting: {
      frontend: "Vercel",
    },
  },
  {
    id: 5,
    title: "BestPals - Pet Adoption App",
    elementId: "pet",
    description:
      "BestPals is a pet adoption app. Made with React and ChakraUI for the frontend, mongoDB, express and cloudinary for the backend. originally it was coded in javascript and later migrated to typescript. users can foster or adopt pets. The administrator can add and edit pets and see the admin dashboard. You are welcome to register and try it out.",
    responsibilities:
      "Developed full-stack application including React frontend with ChakraUI, Express.js backend with MongoDB, integrated Cloudinary for image management, implemented user authentication and admin dashboard, and migrated entire codebase from JavaScript to TypeScript.",
    tags: ["React", "Full Stack", "ChakraUI", "MongoDB", "Express"],
    app_url: "https://full-stack-pet-adoption-mayo-n-chip.vercel.app/",
    repository_url:
      "https://github.com/MayoNChip/full-stack-pet-adoption-MayoNChip",
    image: bestPalsProject,
    hosting: {
      frontend: "Vercel",
      backend: "AWS",
    },
  },
  {
    id: 3,
    title: "Debate It",
    elementId: "debate",
    description:
      "Debate It is a live debating app. Made with AngularJS and TailwindCSS for the frontend, mySQL, express and some pyton for the backend. it utilizes socket.io for live chat and peers for the video call. users can create and join rooms as debaters, watch live debates that are currently in progress and chat with other people. users can also watch previous debate sessions in the archives.",
    responsibilities:
      "Built full-stack live debating platform with Angular frontend, implemented real-time communication using Socket.io, integrated video calling with WebRTC/Peers, developed MySQL database architecture with Express.js backend, and created archive system for previous debates.",
    tags: ["AngularJS", "TailwindCSS", "Full Stack", "mySQL"],
    app_url: "http://www.debateit.app",
    repository_url: "",
    image: DebateItImage,
    hosting: {
      frontend: "AWS",
      backend: "AWS",
    },
  },
];
