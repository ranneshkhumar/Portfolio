import { SiC, SiPython, SiJavascript, SiHtml5, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiScikitlearn, SiTensorflow, SiPandas, SiNumpy, SiGit, SiGithub, SiPostman, SiUipath } from "react-icons/si";
import { FaBrain, FaJava, FaCss3Alt, FaCode } from "react-icons/fa";

export const skillsCategories = ["Languages", "Frontend", "Backend", "AI/ML", "Tools"];

export const skills = [
  // Languages
  { name: "C", category: "Languages", icon: SiC, level: 85 },
  { name: "Java", category: "Languages", icon: FaJava, level: 80 },
  { name: "Python", category: "Languages", icon: SiPython, level: 88 },
  { name: "JavaScript", category: "Languages", icon: SiJavascript, level: 85 },
  
  // Frontend
  { name: "HTML", category: "Frontend", icon: SiHtml5, level: 90 },
  { name: "CSS", category: "Frontend", icon: FaCss3Alt, level: 85 },
  { name: "React", category: "Frontend", icon: SiReact, level: 80 },
  { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss, level: 85 },

  // Backend
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, level: 75 },
  { name: "Express.js", category: "Backend", icon: SiExpress, level: 75 },
  { name: "MongoDB Atlas", category: "Backend", icon: SiMongodb, level: 70 },

  // AI/ML
  { name: "Scikit-Learn", category: "AI/ML", icon: SiScikitlearn, level: 70 },
  { name: "TensorFlow", category: "AI/ML", icon: SiTensorflow, level: 65 },
  { name: "Pandas", category: "AI/ML", icon: SiPandas, level: 80 },
  { name: "NumPy", category: "AI/ML", icon: SiNumpy, level: 80 },
  { name: "Machine Learning", category: "AI/ML", icon: FaBrain, level: 75 },

  // Tools
  { name: "Git", category: "Tools", icon: SiGit, level: 85 },
  { name: "GitHub", category: "Tools", icon: SiGithub, level: 85 },
  { name: "VS Code", category: "Tools", icon: FaCode, level: 90 },
  { name: "Postman", category: "Tools", icon: SiPostman, level: 75 },
  { name: "UiPath", category: "Tools", icon: SiUipath, level: 60 },
  { name: "Lovable", category: "Tools", icon: FaBrain, level: 65 },
];
