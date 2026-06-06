import { SiC, SiPython, SiJavascript, SiHtml5, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiScikitlearn, SiTensorflow, SiPandas, SiNumpy, SiGit, SiGithub, SiPostman, SiUipath } from "react-icons/si";
import { FaBrain, FaJava, FaCss3Alt, FaCode,FaBolt } from "react-icons/fa";

export const skillsCategories = ["Languages", "Frontend", "Backend", "AI/ML", "Tools"];

export const skills = [
  // Languages
  { name: "Python", category: "Languages", icon: SiPython, level: 88 },
  { name: "Java", category: "Languages", icon: FaJava, level: 80 },
  { name: "JavaScript", category: "Languages", icon: SiJavascript, level: 85 },

  // Frontend
  { name: "React", category: "Frontend", icon: SiReact, level: 80 },
  { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss, level: 85 },

  // Backend
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, level: 75 },
  { name: "Express.js", category: "Backend", icon: SiExpress, level: 75 },
  { name: "MongoDB", category: "Backend", icon: SiMongodb, level: 70 },

  // AI/ML
  { name: "Machine Learning", category: "AI/ML", icon: FaBrain, level: 75 },
  { name: "Scikit-Learn", category: "AI/ML", icon: SiScikitlearn, level: 70 },
  { name: "Pandas", category: "AI/ML", icon: SiPandas, level: 80 },

  // Tools
  { name: "Git & GitHub", category: "Tools", icon: SiGithub, level: 85 },
  { name: "UiPath", category: "Tools", icon: SiUipath, level: 70 },
  { name: "Thunder Client", category: "Tools", icon: FaBolt, level: 70 },

];
