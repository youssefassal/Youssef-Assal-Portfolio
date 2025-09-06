// skills section logos
import bootstraplogo from "./assets/tech-logo/bootstrap.png";
import csslogo from "./assets/tech-logo/css.png";
import gitlogo from "./assets/tech-logo/git.png";
import githublogo from "./assets/tech-logo/github.png";
import htmllogo from "./assets/tech-logo/html.png";
import javascriptlogo from "./assets/tech-logo/javascript.png";
import netlifylogo from "./assets/tech-logo/netlify.png";
import nextjslogo from "./assets/tech-logo/nextjs.png";
import reactjslogo from "./assets/tech-logo/reactjs.png";
import reduxlogo from "./assets/tech-logo/redux.png";
import tailwindcsslogo from "./assets/tech-logo/tailwindcss.png";
import typescriptlogo from "./assets/tech-logo/typescript.png";
import vercellogo from "./assets/tech-logo/vercel.png";
import vscodelogo from "./assets/tech-logo/vscode.png";
import csharplogo from "./assets/tech-logo/csharp.png";
import redhatlinuxlogo from "./assets/tech-logo/Red_Hat.png";
import ansibleLogo from "./assets/tech-logo/Ansible.png";
import DockerLogo from "./assets/tech-logo/docker.png";
import KubernetesLogo from "./assets/tech-logo/Kubernetes.png";
import reactbootstrap from "./assets/tech-logo/Reactbootstrap-icon.png";

// experience section logos
import CATLogo from "./assets/company-logo/cat_reloaded_logo.jpeg";
import DEPILogo from "./assets/company-logo/depi_logo.jpeg";
import WebMasterLogo from "./assets/company-logo/Webmasters_logo.jpeg";

// education section logos
import UniLogo from "./assets/education-logo/Uni.jpeg";

// project section logos
import NetflexHome from "./assets/work-logo/Netflex-Clone.png";
import BasketHome from "./assets/work-logo/Basket.png";
import shrimpzoneHome from "./assets/work-logo/Shrimp-zone.png";
import ESportsHome from "./assets/work-logo/esports.png";
import moviesappHome from "./assets/work-logo/Movieapp.png";
import TodoHome from "./assets/work-logo/Todo.png";
import PeripheralHome from "./assets/work-logo/peripherals-ecommerce.png";
import laptopstorev2Home from "./assets/work-logo/Laptopstore.png";
import laptopstorev1Home from "./assets/work-logo/Laptopstorev1.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmllogo },
      { name: "CSS", logo: csslogo },
      { name: "JavaScript", logo: javascriptlogo },
      { name: "TypeScript", logo: typescriptlogo },
      { name: "React JS", logo: reactjslogo },
      { name: "Next JS", logo: nextjslogo },
      { name: "Redux", logo: reduxlogo },
      { name: "Tailwind CSS", logo: tailwindcsslogo },
      { name: "Bootstrap", logo: bootstraplogo },
      { name: "React Bootstrap", logo: reactbootstrap },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Red Hat Linux", logo: redhatlinuxlogo },
      { name: "Ansible", logo: ansibleLogo },
      { name: "Docker", logo: DockerLogo },
      { name: "Kubernetes", logo: KubernetesLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javascriptlogo },
      { name: "TypeScript", logo: typescriptlogo },
      { name: "C#", logo: csharplogo },
    ],
  },
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
    img: DEPILogo,
    role: "DevOps Trainee",
    company: "Digital Egypt Pioneers Initiative - DEPI",
    date: "Jun 2025 - Present",
    desc: "Currently training in DevOps practices, including Linux commands, Git/GitHub, Ansible, Docker, and Kubernetes. Building a strong foundation in automation, containerization, and deployment workflows to support scalable and efficient software delivery.",
    skills: [
      "Linux",
      "Red Hat Linux",
      "Git",
      "GitHub",
      "Ansible",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    id: 1,
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
  },
  {
    id: 2,
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
  },
  {
    id: 3,
    img: CATLogo,
    role: "Vice Head of Game Development",
    company: "CAT Reloaded",
    date: "Nov 2024 - Present",
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
    degree: "Bachelor of Engineering - B.E. in Communication & Computer Engineering",
  }
];

export const projects = [
  {
    id: 0,
    title: "Netflix Clone",
    description:
      "I built a fully responsive Netflix clone with a modern React 19 + Vite setup. The app features secure authentication (signup & login) powered by Firebase, smooth client-side routing with React Router, and real-time user interaction feedback through React-Toastify. Designed with a mobile-first approach, it adapts seamlessly across devices (mobile, tablet, desktop). The project is deployed on Vercel for fast and reliable hosting ",
    image: NetflexHome,
    tags: ["React JS", "Vite", "CSS", "Firebase Auth", "React Firebase Hooks", "React Toastify", "Responsive Design", "Vercel Deployment"],
    github: "https://github.com/youssefassal/Netflix-Clone",
    webapp: "https://youssef-assal-netflix.vercel.app/",
  },
  {
    id: 1,
    title: "Basket – E-Commerce Website",
    description:
      "Developed a responsive e-commerce web app using React, Vite, and Tailwind CSS. Implemented product listings, detailed views, a shopping cart system, and simulated authentication. Managed state with React Context API, integrated mock APIs using Axios, and optimized performance with lazy loading and code splitting.",
    image: BasketHome,
    tags: ["React JS", "Vite", "Tailwind CSS", "Context API", "Axios", "Responsive Design", "Vercel"],
    github: "https://github.com/youssefassal/Basket-Ecommerce",
    webapp: "https://basket-ruddy.vercel.app/",
  },
  {
    id: 2,
    title: "Shrimp Zone - Restaurant Website",
    description:
      "Built a fully responsive multi-page restaurant website using React, Bootstrap, and React Router. Implemented dynamic routing for smooth navigation and structured reusable components to improve scalability. Styled with Bootstrap to ensure a consistent and user-friendly layout across devices.",
    image: shrimpzoneHome,
    tags: ["React JS", "Bootstrap", "React Router", "Responsive Web Design"],
    github: "https://github.com/youssefassal/Shrimp-Zone-Project",
    webapp: "https://youssefassal.github.io/Shrimp-Zone-Project/",
  },
  {
    id: 3,
    title: "E-Sports Team Website",
    description:
      "Designed and developed a responsive website using HTML, CSS, and Bootstrap to showcase teams, events, and news. Focused on creating a clean layout, smooth navigation, and a visually appealing user experience to highlight e-sports content effectively.",
    image: ESportsHome,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Web Design"],
    github: "https://github.com/youssefassal/3rd-FE-Project",
    webapp: "https://youssefassal.github.io/3rd-FE-Project/",
  },
  {
    id: 4,
    title: "Movies App",
    description:
      "Created a responsive movie browsing website using HTML, CSS, JavaScript, and Bootstrap. Features key sections such as “Opening This Week” and “Coming Soon,” providing users with an organized and engaging way to explore movie releases.",
    image: moviesappHome,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Web Design"],
    github: "https://github.com/youssefassal/Phase1_Task1",
    webapp: "https://youssefassal.github.io/Phase1_Task1/",
  },
  {
    id: 5,
    title: "Simple Todo List App",
    description:
      "Built a simple and responsive Todo List app using HTML, CSS, JavaScript, and Bootstrap. Allows users to add tasks, mark them as completed, and remove them, providing an easy way to stay organized.",
    image: TodoHome,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Web Design"],
    github: "https://github.com/youssefassal/Phase1_Task2",
    webapp: "https://youssefassal.github.io/Phase1_Task2/",
  },
  {
    id: 6,
    title: "Simple Peripherals Store",
    description:
      "Developed a simple e-commerce website for gaming peripherals using HTML, CSS, JavaScript, and Bootstrap. Implemented product search by category and name, along with a signup and login system that stores user information in local storage. Designed to be responsive and user-friendly for smooth browsing and shopping.",
    image: PeripheralHome,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/youssefassal/Shopping-website-1st-javascript",
    webapp: "https://youssefassal.github.io/Shopping-website-1st-javascript/index.html",
  },
  {
    id: 7,
    title: "Simple Laptop Store App v2.0",
    description:
      "Built a simple online store using HTML, CSS, and JavaScript. Implemented core e-commerce features including adding products to a cart and automatically calculating the total cart amount. Designed with a focus on simplicity and ease of use.",
    image: laptopstorev2Home,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/youssefassal/First-JS-Project",
    webapp: "https://youssefassal.github.io/First-JS-Project/",
  },
  {
    id: 8,
    title: "Simple Laptop Store App v1.0",
    description:
      "Created a simple, non-responsive laptop store layout using only HTML and CSS. Showcased products in a clean static design to simulate an online storefront.",
    image: laptopstorev1Home,
    tags: ["HTML", "CSS"],
    github: "https://github.com/youssefassal/2nd-FE-project",
    webapp: "https://youssefassal.github.io/2nd-FE-project/",
  }
];
