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

// project section logos
import YadawyHome from "../assets/work-logo/Yadawy.png";
import RabbitHome from "../assets/work-logo/Rabbit.png";
import AuraHome from "../assets/work-logo/AURA.png";
import EasyBuyHome from "../assets/work-logo/EasyBuy.png";
import CryptoplaceHome from "../assets/work-logo/Cryptoplace.png";
import NetflexHome from "../assets/work-logo/Netflex-Clone.png";
import BasketHome from "../assets/work-logo/Basket.png";
import shrimpzoneHome from "../assets/work-logo/Shrimp-zone.png";
import ESportsHome from "../assets/work-logo/esports.png";
import moviesappHome from "../assets/work-logo/Movieapp.png";
import TodoHome from "../assets/work-logo/Todo.png";
import PeripheralHome from "../assets/work-logo/peripherals-ecommerce.png";
import laptopstorev2Home from "../assets/work-logo/Laptopstore.png";
import laptopstorev1Home from "../assets/work-logo/Laptopstorev1.png";
import emptyHome2 from "../assets/work-logo/empty2.png";

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

export const projects = [
  {
    id: 0,
    title: "Yadawy – AI-Powered E-Commerce",
    description:
      "Yadawy is a premium, AI-powered e-commerce platform built to deliver a personalized, secure, and intelligent shopping experience. The platform evolves beyond a traditional marketplace by integrating an AI-driven chatbot assistant and a behavioral recommendation engine, transforming user interactions into a smart, data-driven ecosystem. The frontend is built with React 19, Vite, Tailwind CSS 4, and Redux Toolkit, featuring real-time updates via Socket.io, dynamic data visualizations with Recharts, smooth navigation using React Router 7, and performance optimizations through code splitting with React.lazy and Suspense. The backend is powered by Node.js, Express, and MongoDB, enhanced with enterprise-grade security layers including Helmet, rate limiting, NoSQL sanitization, XSS protection, HPP prevention, and professional logging using Winston. Yadawy implements a robust RBAC system with real-time session invalidation and permission synchronization. Payments are securely handled through an advanced Paymob integration with atomic rollback mechanisms to maintain data integrity. A dedicated AI microservice built with Python and FastAPI powers the NLP-based chatbot and recommendation system. The platform also includes SEO optimization, marketing analytics, and traffic intelligence features, and is independently deployed across Vercel and Hugging Face Spaces for scalability and reliability.",
    image: YadawyHome,
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
    github: "https://github.com/yourusername/yadawy",
    webapp: "https://yadawy.me",
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
  {
    id: 7,
    title: "Shrimp Zone - Restaurant Website",
    description:
      "Built a fully responsive multi-page restaurant website using React, Bootstrap, and React Router. Implemented dynamic routing for smooth navigation and structured reusable components to improve scalability. Styled with Bootstrap to ensure a consistent and user-friendly layout across devices.",
    image: shrimpzoneHome,
    tags: ["React JS", "Bootstrap", "React Router", "Responsive Web Design"],
    github: "https://github.com/youssefassal/Shrimp-Zone-Project",
    webapp: "https://youssefassal.github.io/Shrimp-Zone-Project/",
  },
  {
    id: 8,
    title: "E-Sports Team Website",
    description:
      "Designed and developed a responsive website using HTML, CSS, and Bootstrap to showcase teams, events, and news. Focused on creating a clean layout, smooth navigation, and a visually appealing user experience to highlight e-sports content effectively.",
    image: ESportsHome,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Web Design"],
    github: "https://github.com/youssefassal/3rd-FE-Project",
    webapp: "https://youssefassal.github.io/3rd-FE-Project/",
  },
  {
    id: 9,
    title: "Movies App",
    description:
      "Created a responsive movie browsing website using HTML, CSS, JavaScript, and Bootstrap. Features key sections such as “Opening This Week” and “Coming Soon,” providing users with an organized and engaging way to explore movie releases.",
    image: moviesappHome,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Web Design"],
    github: "https://github.com/youssefassal/Phase1_Task1",
    webapp: "https://youssefassal.github.io/Phase1_Task1/",
  },
  {
    id: 10,
    title: "Simple Todo List App",
    description:
      "Built a simple and responsive Todo List app using HTML, CSS, JavaScript, and Bootstrap. Allows users to add tasks, mark them as completed, and remove them, providing an easy way to stay organized.",
    image: TodoHome,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Web Design"],
    github: "https://github.com/youssefassal/Phase1_Task2",
    webapp: "https://youssefassal.github.io/Phase1_Task2/",
  },
  {
    id: 11,
    title: "Simple Peripherals Store",
    description:
      "Developed a simple e-commerce website for gaming peripherals using HTML, CSS, JavaScript, and Bootstrap. Implemented product search by category and name, along with a signup and login system that stores user information in local storage. Designed to be responsive and user-friendly for smooth browsing and shopping.",
    image: PeripheralHome,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/youssefassal/Shopping-website-1st-javascript",
    webapp:
      "https://youssefassal.github.io/Shopping-website-1st-javascript/index.html",
  },
  {
    id: 12,
    title: "Simple Laptop Store App v2.0",
    description:
      "Built a simple online store using HTML, CSS, and JavaScript. Implemented core e-commerce features including adding products to a cart and automatically calculating the total cart amount. Designed with a focus on simplicity and ease of use.",
    image: laptopstorev2Home,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/youssefassal/First-JS-Project",
    webapp: "https://youssefassal.github.io/First-JS-Project/",
  },
  {
    id: 13,
    title: "Simple Laptop Store App v1.0",
    description:
      "Created a simple, non-responsive laptop store layout using only HTML and CSS. Showcased products in a clean static design to simulate an online storefront.",
    image: laptopstorev1Home,
    tags: ["HTML", "CSS"],
    github: "https://github.com/youssefassal/2nd-FE-project",
    webapp: "https://youssefassal.github.io/2nd-FE-project/",
  },
  {
    id: 14,
    title: "",
    description: "",
    image: emptyHome2,
    tags: [],
    github: "",
    webapp: "",
  },
];
