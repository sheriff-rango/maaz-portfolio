// src/data.js

import * as Icons from './Components/Icons'

export const projects = [
  {
    title: "React Multistep Form",
    subtitle: "React and Bootstrap",
    description: "Simple Form using States and Hooks ",
    image: "https://i.ibb.co/2nMdhq8/Screenshot-2024-05-23-174414.png",
    link: "https://i.ibb.co/2nMdhq8/Screenshot-2024-05-23-174414.png",
  },
  {
    title: "Pomodoro Timer",
    subtitle: "React and CSS",
    description: "This Project displays  State Hook usage ",
    image: "https://i.ibb.co/jVHFv7c/Screenshot-2024-05-23-174701.png",
    link: "https://pomodorotimer224.netlify.app",
  },
  {
    title: "Weather App",
    subtitle: "React, Bootstrap, and CSS",
    description:
      "Will display the weather of any city in the United States currently, this displays API knowledge",
    image: "https://i.ibb.co/2MntG5B/Screenshot-2024-05-23-174752.png",
    link: "https://google.com",
  },
  {
    title: "Simple To Do App",
    subtitle: "React Hooks",
    description:
      "This is a really simple App that shows simplicity and functionality",
    image: "https://i.ibb.co/GPdW14v/Screenshot-2024-05-23-180134.png",
    link: "https://pythonbootcamp.com",
  },
];
// src/data.js
export const skills_old = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Bootstrap",
  "Node.js",
  "Material UI",
];

export const skills = [
  { title: "HTML", icon: (props) => <Icons.HTMLIcon width={24} heigth={24} {...props} /> },
  { title: "CSS", icon: (props) => <Icons.CSSIcon width={24} heigth={24} {...props} /> },
  { title: "JavaScript", icon: (props) => <Icons.JavaScriptIcon width={24} heigth={24} {...props} /> },
  { title: "TypeScript", icon: (props) => <Icons.TypeScriptIcon width={24} heigth={24} {...props} /> },
  { title: "React", icon: (props) => <Icons.ReactIcon width={24} heigth={24} {...props} /> },
  { title: "Bootstrap", icon: (props) => <Icons.BootstrapIcon width={24} heigth={24} {...props} /> },
  { title: "Node.js", icon: (props) => <Icons.NodeIcon width={24} heigth={24} {...props} /> },
  { title: "Material UI", icon: (props) => <Icons.MaterialIcon width={24} heigth={24} {...props} /> },
]