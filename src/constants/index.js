import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  nextjs,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  figma,
  threejs,
  UTutor,
  AIStudily,
  StudmenConstruction,
  Raybarkwill,
  Xamaa,
  Macbeth,
  RayPfp,
  byteCamp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "UI / UX designer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS ",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Next Js",
    icon: nextjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Freelance Web Developer",
    company_name: "Samosa King",
    icon: null,
    iconBg: "#3944bc",
    date: "October 2021 - Present",
    points: [
      "Freelance web developement projects ranging from small restuarants website to full stack eccomerce apps.",
      "Multi-tasked across multiple functions and roles to meet deadlines and organizational expectations.",
      "Using technologies case by case: React, Next JS, Graph Ql, Mongo DB & Prisma ORM, Express, HTML/CSS.",
      "Outreaching & Coldcalling to companies for potential clients.",
    ],
  },
  {
    title: "Coding Instructor",
    company_name: "Byte Camp",
    icon: byteCamp,
    iconBg: "#ffffff",
    date: "June 2023 - September 2023",
    points: [
      "Taught kids aged 9-14 Game Development and 3d modelling.",
      "Led lectures in front of the class and helped struggling students with 1 to 1 help.",
      "Used various software's such as - Blender, Godot, Inkscape, Scratch, and Kaden Live.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "My name is Raymond Barkwill and I am the owner of the R2B Frontrow group. I am a coaching consulting group that works with high-performance rugby players from around North America. I reached out to Abdullah back in 2021 about building my first website for a consulting business I wanted to grow. From the initial moments of speaking with him, I felt a level of professionalism",
    testimonialMore:
      "that was above his years. His communication within the project was outstanding and I felt that I was very receptive to my requirements and desires regarding how I wanted to display my skills toward informing my potential clients about the services I offer. He was open to me enquiring about his insight and direction within the design of the webpage that would help best highlight me and my business. At the end of the final project came out exactly the way I envisioned it and he has followed up multiple times towards updating and improving the site.",
    name: "Ray Barkwill",
    designation: "Owner",
    company: "R2b Frontrow and Former National Canadian Rugby Player",
    image: RayPfp,
  },
];

const projects = [
  {
    name: "Xamaa Tech.",
    description: "Company Website for my web development services.",
    tags: [
      {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Mux Video",
        color: "pink-text-gradient",
      },
    ],
    image: Xamaa,
    siteLink: "https://xaamatech.netlify.app/",
  },
  {
    name: "UTutor",
    description:
      "UTUTor is an AI-powered course generator that quickly creates tailored learning modules for learners.",
    tags: [
      {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "Open AI",
        color: "green-text-gradient",
      },
      {
        name: "Youtube API",
        color: "pink-text-gradient",
      },
    ],
    image: UTutor,
    siteLink: "https://ututor-ai.netlify.app",
  },
  {
    name: "Studily AI",
    description:
      "AI Studily is an AI-driven platform that personalizes learning experiences to help students study more effectively.",
    tags: [
      {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "Open AI",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: AIStudily,
    siteLink: "https://aistudily.vercel.app/",
  },
  {
    name: "Macbeth Resource",
    description:
      "A resource for a shakespearean play called Macbeth. It allows user to create account and ask questions or post about something they've learned. It also has all chapter summaries for the book Mabeth",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Graph-Ql",
        color: "green-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "pink-text-gradient",
      },
      {
        name: "JWT tokens",
        color: "blue-text-gradient",
      },
    ],
    image: Macbeth,
    siteLink: "https://mymacbeth.netlify.app/",
    source_code_link: "https://github.com/abdullahbinazeem/FullAuthAPP",
  },
  {
    name: "Studmen Construction Website",
    description:
      "Studmen Construction is a modern website showcasing professional construction services, quality workmanship, and a commitment to exceptional project delivery.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "pink-text-gradient",
      },
    ],
    image: StudmenConstruction,
    siteLink: "https://studmen-construction-test.netlify.app/",
  },
  {
    name: "R2B Portal",

    description:
      "Front end web application developed in react js, it is a web portfolio for Ray Barkwill. A retired Canadian national rugby player.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "pink-text-gradient",
      },
    ],
    image: Raybarkwill,
    siteLink: "http://r2bfrontrow.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
