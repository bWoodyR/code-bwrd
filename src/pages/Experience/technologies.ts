import {photoshopIcon, premiere_proIcon, cssIcon, dockerIcon, figmaIcon, githubIcon, godotIcon, googlecloudIcon, htmlIcon, jiraIcon, jsIcon, mongoIcon, nodejsIcon, postmanIcon, reactIcon, reactqueryIcon, sassIcon, typescriptIcon, unrealengineIcon } from "../../assets";

export const technologies = [
  {
    type: "frontend",
    technologies: [
      {
        img: reactIcon,
        title: "React JS",
      },
      {
        img: typescriptIcon,
        title: "Typescript",
      },
      {
        img: reactqueryIcon,
        title: "React Query",
      },
      {
        img: jsIcon,
        title: "Javascript",
      },
      {
        img: sassIcon,
        title: "SASS",
      },
      {
        img: htmlIcon,
        title: "HTML",
      },
      {
        img: cssIcon,
        title: "CSS",
      },
    ],
  },
  {
    type: "backend",
    technologies: [
      {
        img: nodejsIcon,
        title: "Node JS",
      },
      {
        img: mongoIcon,
        title: "Mongo DB",
      },
      {
        img: dockerIcon,
        title: "Docker",
      },
      {
        img: googlecloudIcon,
        title: "Google Cloud",
      },
    ],
  },
  {
    type: "game dev",
    technologies: [
      {
        img: unrealengineIcon,
        title: "Unreal Engine",
      },
      {
        img: godotIcon,
        title: "Godot",
      },
    ],
  },
  {
    type: "others",
    technologies: [
      {
        img: postmanIcon,
        title: "Postman",
      },
      {
        img: githubIcon,
        title: "Github",
      },
      {
        img: figmaIcon,
        title: "Figma",
      },

      {
        img: jiraIcon,
        title: "Jira",
      },
      {
        img: photoshopIcon,
        title: "Photoshop",
      },
      {
        img: premiere_proIcon,
        title: "Premiere Pro",
      },
    ],
  },
];
