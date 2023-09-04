import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  nextjs,
  Prisma,
  MySQL,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  samosaKing,
  r2b,
  SamosaSite,
  Raybarkwill,
  Muisician,
  Macbeth,
  SnakeGame,
  BookKeeperUI,
  RayPfp,
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
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Next Js",
    icon: nextjs,
  },
  {
    name: "Prisma",
    icon: Prisma,
  },
  {
    name: "MySQL",
    icon: MySQL,
  },
];

const experiences = [
  {
    title: "Front end Developer",
    company_name: "Samosa King",
    icon: samosaKing,
    iconBg: "#323234",
    date: "June 2020 - September 2020",
    points: [
      "Created UI / UX designs of web page",
      "Collaborated with designers and helped them implement their ideas through HTML / CSS",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Deploying webpage and finalizing SEO",
    ],
  },
  {
    title: "React Js Developer",
    company_name: "R2B Frontrow",
    icon: r2b,
    iconBg: "#111111",
    date: "October 2021 - Febuary 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Creating an architecture for react based components aswell as mapping out JSON files to each component",
      "Implementing responsive design and ensuring proper copyright policies.",
      "Buying domain and hosting clients website on the web",
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
    name: "Ray Barkwill Portal",

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
  {
    name: "Samosa King",
    description:
      "A food truck website for AL Rahman Samosa King. A local samosa food truck buisiness in Victoria, BC",
    tags: [
      {
        name: "HTML/CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
    ],
    image: SamosaSite,
    siteLink: "https://www.alrahman.ca/",
  },
  {
    name: "Multiplayer 2d Snake game",
    description:
      "A 2 player snake game with uses socket servers to interact between users.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.io",
        color: "green-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "pink-text-gradient",
      },
    ],
    image: SnakeGame,
    siteLink: "https://snakio.netlify.app/",
    source_code_link: "https://github.com/ABDAZ321/SocketServer",
  },
  {
    name: "Book keeper UI design",
    description: "A UI/UX design for a book keeping agency.",
    tags: [
      {
        name: "Adobe Xd",
        color: "green-text-gradient",
      },
    ],
    image: BookKeeperUI,
    siteLink: "https://dribbble.com/shots/20952786-Book-Keeping-UI",
  },
  {
    name: "Muisician Site",
    description: "A website for a muisician with CSS grids",
    tags: [
      {
        name: "HTML/CSS",
        color: "green-text-gradient",
      },
      {
        name: "Grids",
        color: "blue-text-gradient",
      },
    ],
    image: Muisician,
    siteLink: "https://gary-simon.netlify.app/",
    source_code_link: "https://github.com/abdullahbinazeem/CSS-grids-proj",
  },
];

export { services, technologies, experiences, testimonials, projects };
