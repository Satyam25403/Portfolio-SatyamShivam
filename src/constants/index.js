import {
  logo,
  project_sample,
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


const projects = [
  {
    name: "Full-Stack Food Delivery Application",
    description:
      "Full-stack food delivery application with three decoupled services: Frontend, Admin Dashboard, and Backend. Implemented JWT-based authentication, RESTful endpoints and payment processing via Stripe. Containerized services using Docker for cross-platform deployment.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "docker", color: "yellow-text-gradient" },
    ],
    image: project_sample,
    source_code_link: "https://github.com/Satyam25403/FoodApp",
  },
  {
    name: "Cloud-Based Video Transcoding Pipeline",
    description:
      "Designed and implemented an automated video upload and transcoding pipeline using Node.js, Docker, and AWS EC2. Integrated AWS services (S3, SSM, SQS) for scalable orchestration and cost-optimized auto-scaling. Enabled seamless file ingestion, validation, and cloud storage using Express.js, Multer, and AWS SDKs.",
    tags: [
      { name: "nodejs", color: "blue-text-gradient" },
      { name: "aws", color: "green-text-gradient" },
      { name: "docker", color: "pink-text-gradient" },
    ],
    image: project_sample,
    source_code_link: "https://github.com/Satyam25403/VideoStreamingProject",
  },
  {
    name: "Bias Detection Dashboard for Non-Tech Users",
    description:
      "Developed an Explainable AI (XAI) web dashboard for dataset bias detection and visualization. Integrated LIME and SHAP for feature-level interpretability and automated PDF report generation with embedded plots and counterfactual explanations. Built using Flask and Matplotlib with React.js and TailwindCSS frontend.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "flask", color: "green-text-gradient" },
      { name: "react", color: "pink-text-gradient" },
    ],
    image: project_sample,
    source_code_link: "https://github.com/Satyam25403/MINI",
  },
  {
    name: "AI-Powered Interview Assistant",
    description:
      "A real-time, resume-aware interview platform built with React that simulates technical interviews using AI. Features candidate–interviewer tabs, dynamic question generation by difficulty level, automated scoring, persistent session management, and a searchable dashboard for interviewer analytics.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "openrouter", color: "pink-text-gradient" },
      { name: "ant-design", color: "yellow-text-gradient" },
    ],
    image: project_sample,
    source_code_link: "https://github.com/sagarkundrapu/AI-Powered-Interview-Assistant",
  },
];


export { services, technologies, navLinks, experiences, projects };