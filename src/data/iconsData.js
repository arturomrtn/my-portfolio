import { FaReact, FaJs, FaNodeJs, FaCss3Alt, FaGitAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiTypescript, SiExpress } from "react-icons/si";
import { TbBrandBootstrap } from "react-icons/tb";

export const technologies = [
  { name: "JavaScript", Icon: FaJs, color: "#F7DF1E" },
  { name: "React", Icon: FaReact, color: "#61DAFB" },
  { name: "Node", Icon: FaNodeJs, color: "#339933" },
  { name: "CSS", Icon: FaCss3Alt, color: "#1572B6" },
  { name: "Mongo", Icon: SiMongodb, color: "#47A248" },
  { name: "Typescript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Bootstrap", Icon: TbBrandBootstrap, color: "#7952B3" },
  { name: "Git", Icon: FaGitAlt, color: "#F1502F" }

];

export const socials = [
  { name: "LinkedIn", Icon: FaLinkedin, color: "#0A66C2", link: "https://linkedin.com/in/arturomrtn/" },
  { name: "GitHub", Icon: FaGithub, color: "#171515", link: "https://github.com/arturomrtn" },
];
