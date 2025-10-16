import {
  logo,
  school,
  college,
  cloud_intern,
  intermediate,
  web,
  backend,
  devops,
  html,
  css,
  javascript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  github,
  docker,
  kubernetes,
  helm,
  aws,
  jenkins,
  terraform
} from "../assests/assets.js";

const navLinks = [
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
    title: "MERN Stack Web Dev",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Devops Engineer",
    icon: devops,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "Git",
    icon: git,
  },
  {
    name: "Github",
    icon: github,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Helm",
    icon: helm,
  },
  {
    name: "AWS Cloud",
    icon: aws,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Terraform",
    icon: terraform,
  },

];

const experiences = [
  {
    title: "Matriculation (schooling)",
    company_name: "Sri Vijnana Vihara English Medium school",
    icon: school,
    iconBg: "#383E56",
    date: "2007 - April 2019",
    points: [
      "Served as the School Pupils Leader, demonstrating leadership and responsibility.",
      "Secured 94.72% in CBSE Class 10 board examinations.",
      "Achieved 3rd place in a national-level Vedic Mathematics quiz at Gynana-Vijnana Mela.",
      "Awarded Best Outgoing Student of the Year 2018–19 by the school.",
    ],
  },
  {
    title: "Intermediate Education",
    company_name: "Narayana Junior College",
    icon: intermediate,
    iconBg: "#E6DEDD",
    date: "2019 - 2022",
    points: [
      "Secured 98.7% in Intermediate State Board (Science Stream – PCM).",
      "Achieved an EAMCET Rank of 1488 in the state-level engineering entrance exam(EAPCET).",
      "Scored 96 percentile in JEE Mains with a Rank of 33,000",
      "Demonstrated consistent academic excellence across competitive and board examinations.",
    ],
  },
  {
    title: "Undergraduate (B.Tech) Degree",
    company_name: "VR Siddhartha Engineering College",
    icon: college,
    iconBg: "#E6DEDD",
    date: "2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Cloud Computing Intern",
    company_name: "Inversion Consultancy LLP",
    icon: cloud_intern,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];


// const projects = [
//   {
//     name: "Full stack Food delivery App",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "AI powered interview assistant",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Bias detection dashboard for Non-Tech users",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];

export { services, technologies, navLinks, experiences };