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
    title: "Berta Store",
    description: "A website for a clothing store, a freelance project I am currently working on",
    techStack: getTechIcons(["JavaScript", "React", "Tailwind CSS", "Framer Motion"]),
    link: "https://github.com/arturomrtn/bertasite",
  },
  {
    id: 3,
    title: "PokePlace",
    description: "Fullstack web app built to get info about Pokemon using an external API",
    techStack: getTechIcons(["JavaScript", "React", "Express"]),
    link: "https://github.com/arturomrtn/pokeplace",
  },
];

export default projects;

  