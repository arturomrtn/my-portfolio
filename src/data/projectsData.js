import { technologies } from "./iconsData";

const getTechIcons = (techNames) => {
  return techNames
    .map((name) => technologies.find((tech) => tech.name === name))
    .filter(Boolean);
};

const projects = [
  {
    id: 1,
    title: "SplashGram",
    description: "Fullstack webapp for creating and managing albums with beautiful images",
    techStack: getTechIcons(["JavaScript", "React", "Mongo", "Node", "Express", "Bootstrap"]),
    link: "https://github.com/arturomrtn/splashgram",
  },
  {
    id: 2,
    title: "TheKiniela",
    description: "Web application based on La Quiniela, a traditional sports betting game in Spain. Created with a mate.",
    techStack: getTechIcons(["JavaScript", "Express", "Node", "MongoDB"]),
    link: "https://github.com/TheKiniela/thekiniela",
  },
  {
    id: 3,
    title: "NextWeatherApp",
    description: "Web app created to get info about weather using external APIs",
    techStack: getTechIcons(["JavaScript", "React", "Next.js"]),
    link: "https://mynextweatherapp.vercel.app/",
  },
];

export default projects;

  