// skills section logos
import bootstraplogo from "../assets/tech-logo/bootstrap.png";
import csslogo from "../assets/tech-logo/css.png";
import gitlogo from "../assets/tech-logo/git.png";
import githublogo from "../assets/tech-logo/github.png";
import htmllogo from "../assets/tech-logo/html.png";
import reactbootstrap from "../assets/tech-logo/Reactbootstrap-icon.png";
import javascriptlogo from "../assets/tech-logo/javascript.png";
import netlifylogo from "../assets/tech-logo/netlify.png";
import reactjslogo from "../assets/tech-logo/reactjs.png";
import reduxlogo from "../assets/tech-logo/redux.png";
import tailwindcsslogo from "../assets/tech-logo/tailwindcss.png";
import vite from "../assets/tech-logo/Vite.png";
// import typescriptlogo from "./assets/tech-logo/typescript.png";
import vercellogo from "../assets/tech-logo/vercel.png";
import vscodelogo from "../assets/tech-logo/vscode.png";
// import csharplogo from "./assets/tech-logo/csharp.png";
import redhatlinuxlogo from "../assets/tech-logo/Red_Hat.png";
import ansibleLogo from "../assets/tech-logo/Ansible.png";
import DockerLogo from "../assets/tech-logo/docker.png";
import KubernetesLogo from "../assets/tech-logo/Kubernetes.png";
import prometheusLogo from "../assets/tech-logo/Prometheus.png";
import grafanaLogo from "../assets/tech-logo/Grafana.png";
import awsLogo from "../assets/tech-logo/AWS.png";
import nodejslogo from "../assets/tech-logo/nodejs.png";
import expressjslogo from "../assets/tech-logo/express-js.png";
import mongodblogo from "../assets/tech-logo/mongodb-logo.png";

// experience section logos
import NeoLogo from "../assets/company-logo/Neo.png";
import DEPILogo from "../assets/company-logo/depi_logo.jpeg";
import CATLogo from "../assets/company-logo/cat_reloaded_logo.jpeg";
import GascoLogo from "../assets/company-logo/Gasco.jpeg";
import WebMasterLogo from "../assets/company-logo/Webmasters_logo.jpeg";

// education section logos
import UniLogo from "../assets/education-logo/Uni.jpeg";

// certification section logos
import DEPICertLogo from "../assets/company-logo/depi_logo.jpeg";
import WebMastersCertLogo from "../assets/company-logo/Webmasters_logo.jpeg";
import GascoCertLogo from "../assets/company-logo/Gasco.jpeg";

// project section logos
import SamoullaHome from "../assets/work-logo/Samoulla.png";
import RabbitHome from "../assets/work-logo/Rabbit.png";
import AuraHome from "../assets/work-logo/AURA.png";
import EasyBuyHome from "../assets/work-logo/EasyBuy.png";
import CryptoplaceHome from "../assets/work-logo/Cryptoplace.png";
import NetflexHome from "../assets/work-logo/Netflex-Clone.png";
import BasketHome from "../assets/work-logo/Basket.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "Vite", logo: vite },
      { name: "React JS", logo: reactjslogo },
      { name: "Tailwind CSS", logo: tailwindcsslogo },
      { name: "HTML", logo: htmllogo },
      { name: "CSS", logo: csslogo },
      { name: "JavaScript", logo: javascriptlogo },
      { name: "Redux", logo: reduxlogo },
      { name: "Bootstrap", logo: bootstraplogo },
      { name: "React Bootstrap", logo: reactbootstrap },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejslogo },
      { name: "Express JS", logo: expressjslogo },
      { name: "MongoDB", logo: mongodblogo },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Red Hat Linux", logo: redhatlinuxlogo },
      { name: "Ansible", logo: ansibleLogo },
      { name: "Docker", logo: DockerLogo },
      { name: "Kubernetes", logo: KubernetesLogo },
      { name: "Prometheus", logo: prometheusLogo },
      { name: "Grafana", logo: grafanaLogo },
      { name: "AWS", logo: awsLogo },
    ],
  },
  // {
  //   title: "Languages",
  //   skills: [
  //     { name: "JavaScript", logo: javascriptlogo },
  //     { name: "C#", logo: csharplogo },
  //   ],
  // },
  {
    title: "Tools",
    skills: [
      { name: "VS Code", logo: vscodelogo },
      { name: "Git", logo: gitlogo },
      { name: "GitHub", logo: githublogo },
      { name: "Netlify", logo: netlifylogo },
      { name: "Vercel", logo: vercellogo },
    ],
  },
];

export const experience = [
  {
    id: 0,
    img: NeoLogo,
    role: "Co-Founder & Full-Stack Developer",
    company: "Neo",
    date: "Feb 2026 - Present",
    desc: "Co-Founder of Neo Software, a web development company focused on building modern, scalable digital products. Leading the design and development of custom web applications, and software solutions for startups and businesses.",
    skills: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "UI/UX Design",
      "HTML5",
      "CSS",
      "JavaScript",
      "Node.js",
      "Responsive Web Design",
    ],
    credential: "",
  },
  {
    id: 1,
    img: DEPILogo,
    role: "DevOps Trainee",
    company: "Digital Egypt Pioneers Initiative - DEPI",
    date: "Jun 2025 - Dec 2025",
    desc: "Currently training in DevOps practices, including Linux commands, Git/GitHub, Ansible, Docker, Kubernetes, Prometheus, Grafana, and AWS. Building a strong foundation in automation, containerization, and deployment workflows to support scalable and efficient software delivery.",
    skills: [
      "Linux",
      "Red Hat Linux",
      "Git",
      "GitHub",
      "Ansible",
      "Docker",
      "Kubernetes",
      "Prometheus",
      "Grafana",
      "AWS",
    ],
    credential:
      "https://drive.google.com/file/d/1hSJobBrzrMq_ELrbA_N_Zq_3SAP5D-MO/view?usp=sharing",
  },
  {
    id: 2,
    img: CATLogo,
    role: "Vice Head of Game Development",
    company: "CAT Reloaded",
    date: "Nov 2024 - Nov 2025",
    desc: "Led and supported a student community focused on game development. Organized workshops, guided peers in learning game development tools and concepts, and contributed to building interactive projects. Gained leadership, teamwork, and technical communication skills while fostering a collaborative learning environment.",
    skills: [
      "C#",
      "Git",
      "GitHub",
      "Game Art",
      "2D Animation",
      "Unity",
      "Pixel Art",
    ],
    credential: "",
  },
  {
    id: 3,
    img: GascoLogo,
    role: "Network Internship",
    company: "Egyptian Natural Gas Company - Gasco",
    date: "Aug 2025 - Sep 2025",
    desc: "a 1-month internship at the Egyptian Natural Gas Company (GASCO), where I gained practical experience in IT infrastructure, telecommunications, and SCADA systems, explored technologies like NEC Microwave Networks and VSAT, and received an introduction to Safety Engineering.",
    skills: ["SCADA", "Fire Safety", "Safety", "Network"],
    credential:
      "https://drive.google.com/file/d/1ZjsTU_V5NSO-8_NOxASFqVIvqzoDKqZ3/view?usp=sharing",
  },
  {
    id: 4,
    img: WebMasterLogo,
    role: "Front End Development Intern",
    company: "Web Masters",
    date: "Jul 2025 - Aug 2025",
    desc: "Contributed to front-end development projects using React.js, Tailwind CSS, and Vite. Built responsive and scalable UI components based on real-world design specifications. Collaborated in an agile environment, participating in code reviews, daily stand-ups, and teamwork to deliver high-quality features.",
    skills: [
      "HTML5",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS",
      "Vite",
      "Bootstrap",
      "Responsive Web Design",
    ],
    credential:
      "https://drive.google.com/file/d/1KkHX981VAhwUn_Y3e_QTZkB4FUSGNKJ6/view?usp=sharing",
  },
];

export const education = [
  {
    id: 0,
    img: UniLogo,
    school: "Mansoura University",
    date: "Sep 2021 - Jul 2026",
    grade: "3.92 CGPA",
    desc: "Studying core areas of communication systems, computer engineering, and related fields, with a strong academic performance (GPA: 3.92). The program covers subjects such as data structures, database systems, operating systems, internet engineering, and computer networks.",
    degree:
      "Bachelor of Engineering - B.E. in Communication & Computer Engineering",
  },
];

export const certifications = [
  {
    id: 0,
    img: DEPICertLogo,
    title: "DevOps Professional Training",
    issuer: "Digital Egypt Pioneers Initiative - DEPI",
    date: "Dec 2025",
    desc: "Completed an intensive government-sponsored DevOps track covering Linux, Git, Ansible, Docker, Kubernetes, Prometheus, Grafana, and AWS cloud infrastructure.",
    credential:
      "https://drive.google.com/file/d/1hSJobBrzrMq_ELrbA_N_Zq_3SAP5D-MO/view?usp=sharing",
    skills: ["Linux", "Docker", "Kubernetes", "Ansible", "AWS", "Grafana"],
  },
  {
    id: 1,
    img: WebMastersCertLogo,
    title: "Front End Development Internship",
    issuer: "Web Masters",
    date: "Aug 2025",
    desc: "Completed a hands-on front-end internship building production-quality UI components with React.js, Tailwind CSS, and Vite in an agile team environment.",
    credential:
      "https://drive.google.com/file/d/1KkHX981VAhwUn_Y3e_QTZkB4FUSGNKJ6/view?usp=sharing",
    skills: [
      "React JS",
      "Tailwind CSS",
      "Vite",
      "JavaScript",
      "Responsive Design",
    ],
  },
  {
    id: 2,
    img: GascoCertLogo,
    title: "Network & IT Infrastructure Internship",
    issuer: "Egyptian Natural Gas Company - Gasco",
    date: "Sep 2025",
    desc: "Completed a 1-month internship gaining hands-on exposure to IT infrastructure, SCADA systems, NEC Microwave Networks, VSAT, and Safety Engineering.",
    credential:
      "https://drive.google.com/file/d/1ZjsTU_V5NSO-8_NOxASFqVIvqzoDKqZ3/view?usp=sharing",
    skills: [
      "SCADA",
      "Network",
      "VSAT",
      "IT Infrastructure",
      "Safety Engineering",
    ],
  },
];

export const projects = [
  {
    id: 0,
    title: "Samoulla – AI-Powered E-Commerce",
    description:
      "Samoulla is a premium, AI-powered e-commerce platform built to deliver a personalized, secure, and intelligent shopping experience. The platform evolves beyond a traditional marketplace by integrating an AI-driven chatbot assistant and a behavioral recommendation engine, transforming user interactions into a smart, data-driven ecosystem. The frontend is built with React 19, Vite, Tailwind CSS 4, and Redux Toolkit, featuring real-time updates via Socket.io, dynamic data visualizations with Recharts, smooth navigation using React Router 7, and performance optimizations through code splitting with React.lazy and Suspense. The backend is powered by Node.js, Express, and MongoDB, enhanced with enterprise-grade security layers including Helmet, rate limiting, NoSQL sanitization, XSS protection, HPP prevention, and professional logging using Winston. Samoulla implements a robust RBAC system with real-time session invalidation and permission synchronization. Payments are securely handled through an advanced Paymob integration with atomic rollback mechanisms to maintain data integrity. A dedicated AI microservice built with Python and FastAPI powers the NLP-based chatbot and recommendation system. The platform also includes SEO optimization, marketing analytics, and traffic intelligence features, and is independently deployed across Vercel and Hugging Face Spaces for scalability and reliability.",
    image: SamoullaHome,
    tags: [
      "React 19",
      "Vite",
      "Tailwind CSS 4",
      "Redux Toolkit",
      "React Router 7",
      "Socket.io",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "RBAC",
      "Paymob Payments",
      "AI Chatbot",
      "Recommendation System",
      "FastAPI",
      "Python",
      "SEO Optimization",
      "Admin Analytics",
      "Security Hardening",
      "Vercel Deployment",
      "Hugging Face Spaces",
    ],
    github: "",
    webapp: "https://www.samoulla.com/ar",
  },
  {
    id: 1,
    title: "Rabbit E-Commerce",
    description:
      "Rabbit is a full-stack e-commerce platform designed to deliver a complete online shopping experience with a powerful admin management system. The frontend is built using React 19, Vite, and Tailwind CSS v4, providing a fast, responsive, and clean user interface with seamless navigation powered by React Router 7. State management is handled using Redux Toolkit, ensuring predictable and scalable application state, while Axios is used for efficient API communication. The platform supports secure authentication with JWT and Bcrypt, persistent cart functionality, advanced product filtering, real-time search, and a smooth checkout flow integrated with the PayPal JavaScript SDK. On the backend, Rabbit leverages Node.js, Express 5, and MongoDB with Mongoose to manage users, products, and orders, along with Cloudinary and Multer for optimized image uploads. An integrated admin dashboard enables full CRUD operations for products, user management, order tracking, and inventory control. The application is configured for deployment on Vercel, ensuring reliability and production-ready performance.",
    image: RabbitHome,
    tags: [
      "React 19",
      "Vite",
      "Tailwind CSS v4",
      "Redux Toolkit",
      "React Router 7",
      "Axios",
      "Node.js",
      "Express 5",
      "MongoDB",
      "JWT Authentication",
      "Bcrypt",
      "PayPal Integration",
      "Cloudinary",
      "Admin Dashboard",
      "Product Filtering",
      "Order Management",
      "Responsive Design",
      "Vercel Deployment",
    ],
    github: "https://github.com/youssefassal/Rabbit",
    webapp: "https://assal-rabbit-store.vercel.app/",
  },
  {
    id: 2,
    title: "AURA E-Commerce",
    description:
      "AURA is a premium, modern e-commerce platform engineered with a strong focus on performance, scalability, and refined user experience. Built using React 19, Vite, and Tailwind CSS v4, the frontend features a centralized theming system powered by semantic tokens and dynamic gradients, delivering a sleek dark-mode-first UI with smooth animations via Framer Motion. State management is handled with Zustand, while React Router 7 ensures robust client-side navigation. On the backend, AURA leverages Node.js, Express 5, MongoDB, and Redis (Upstash) to deliver secure, high-performance APIs with JWT-based authentication using HttpOnly cookies. The platform includes a full Admin Suite with real-time analytics powered by Recharts, product and inventory management, and featured product controls. Secure payments are seamlessly integrated using Stripe, with Cloudinary handling optimized image storage. Both frontend and backend are independently deployed on Vercel, ensuring reliability, scalability, and fast global performance.",
    image: AuraHome,
    tags: [
      "React 19",
      "Vite",
      "Tailwind CSS v4",
      "Zustand",
      "Framer Motion",
      "React Router 7",
      "Node.js",
      "Express 5",
      "MongoDB",
      "Redis (Upstash)",
      "JWT Authentication",
      "Stripe Payments",
      "Cloudinary",
      "Admin Dashboard",
      "Responsive Design",
      "Vercel Deployment",
    ],
    github: "https://github.com/youssefassal/AURA_Ecommerce",
    webapp: "https://neo-aura-ecommerce.vercel.app/",
  },
  {
    id: 3,
    title: "EasyBuy Ecommerce",
    description:
      "EasyBuy is a modern and fully responsive e-commerce website built with React 19, Vite, and TailwindCSS, featuring product listings, detailed product views with image zoom, and interactive carousels powered by Swiper. The project integrates real-time notifications with React Toastify and React Hot Toast, as well as user-friendly confirmation dialogs using SweetAlert2. Designed with smooth navigation via React Router DOM and deployed on Vercel, EasyBuy showcases skills in building scalable, user-focused shopping experiences with clean UI and responsive design.",
    image: EasyBuyHome,
    tags: [
      "React JS",
      "Vite",
      "TailwindCSS",
      "React Router DOM",
      "Swiper",
      "React Inner Image Zoom",
      "React Toastify",
      "React Hot Toast",
      "SweetAlert2",
      "Responsive Design",
      "Vercel Deployment",
    ],
    github: "https://github.com/youssefassal/EasyBuy-ecommerce",
    webapp: "https://easybuy-ecommerce.vercel.app/",
  },
  {
    id: 4,
    title: "Cryptoplace Web App",
    description:
      "CryptoPlace is a responsive cryptocurrency web application built with React 19, Vite, and CSS, featuring interactive data visualization using React Google Charts. It provides a clean, user-friendly interface with smooth navigation powered by React Router DOM, making it easy to explore cryptocurrency trends across devices. The project is deployed on Vercel, showcasing skills in frontend development, data visualization, and responsive design.",
    image: CryptoplaceHome,
    tags: [
      "React JS",
      "Vite",
      "CSS",
      "React Google Charts",
      "React Router DOM",
      "Responsive Design",
      "Vercel Deployment",
    ],
    github: "https://github.com/youssefassal/Cryptoplace",
    webapp: "https://youssef-assal-cryptoplace.vercel.app/",
  },
  {
    id: 5,
    title: "Netflix Clone",
    description:
      "I built a fully responsive Netflix clone with a modern React 19 + Vite setup. The app features secure authentication (signup & login) powered by Firebase, smooth client-side routing with React Router, and real-time user interaction feedback through React-Toastify. Designed with a mobile-first approach, it adapts seamlessly across devices (mobile, tablet, desktop). The project is deployed on Vercel for fast and reliable hosting ",
    image: NetflexHome,
    tags: [
      "React JS",
      "Vite",
      "CSS",
      "Firebase Auth",
      "React Firebase Hooks",
      "React Toastify",
      "Responsive Design",
      "Vercel Deployment",
    ],
    github: "https://github.com/youssefassal/Netflix-Clone",
    webapp: "https://youssef-assal-netflix.vercel.app/",
  },
  {
    id: 6,
    title: "Basket – E-Commerce Website",
    description:
      "Developed a responsive e-commerce web app using React, Vite, and Tailwind CSS. Implemented product listings, detailed views, a shopping cart system, and simulated authentication. Managed state with React Context API, integrated mock APIs using Axios, and optimized performance with lazy loading and code splitting.",
    image: BasketHome,
    tags: [
      "React JS",
      "Vite",
      "Tailwind CSS",
      "Context API",
      "Axios",
      "Responsive Design",
      "Vercel",
    ],
    github: "https://github.com/youssefassal/Basket-Ecommerce",
    webapp: "https://basket-ruddy.vercel.app/",
  },
];
