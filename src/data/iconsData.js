import { FaReact, FaJs, FaNodeJs, FaCss3Alt, FaGitAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiTypescript, SiExpress } from "react-icons/si";
import { TbBrandBootstrap } from "react-icons/tb";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiHeraldicSun } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

export const technologies = [
  { name: "JavaScript", Icon: FaJs, color: "#F7DF1E" },
  { name: "React", Icon: FaReact, color: "#61DAFB" },
  { name: "Node", Icon: FaNodeJs, color: "#339933" },
  { name: "CSS", Icon: FaCss3Alt, color: "#1572B6" },
  { name: "Mongo", Icon: SiMongodb, color: "#47A248" },
  { name: "Typescript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Bootstrap", Icon: TbBrandBootstrap, color: "#7952B3" },
  { name: "Git", Icon: FaGitAlt, color: "#F1502F" },
  { name: "Express", Icon: SiExpress, color: "#000000" }

];

export const socials = [
  { name: "LinkedIn", Icon: FaLinkedin, color: "#0A66C2", link: "https://linkedin.com/in/arturomrtn/" },
  { name: "GitHub", Icon: FaGithub, color: "#171515", link: "https://github.com/arturomrtn" },
];

export const navbarIcons = [
{name: "Moon", Icon: BsFillMoonStarsFill, color: "bg-gradient-to-b from-black to-[#1E3A8A] text-[#F5DEB3] shadow-[0_0_12px_#F5DEB3] hover:shadow-[0_0_20px_#F5DEB3]"},
{name: "Sun", Icon: GiHeraldicSun, color: "bg-gradient-to-b from-[#4682B4] to-[#87CEEB] text-[#DAA520] shadow-[0_0_8px_#DAA520] hover:shadow-[0_0_15px_#DAA520]"},
{name: "Cross", Icon: RxCross2, color: "bg-red-500 text-white rounded-md shadow-md hover:bg-red-600"}
]