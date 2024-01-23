import financeLiteracyImage from "../../assets/thumbnails/finance_literacy_img.png";
import linkerImage from "../../assets/thumbnails/linker_img.png";
import generatorsImage from "../../assets/thumbnails/generators_img.png";
// import placeholderImage from "../../assets/thumbnails/placeholderImage.png";
import quizImg from "../../assets/thumbnails/quizImg.png";
import { technologies } from "../../pages/Experience/technologies";

const getUsedTech = (type: string, techs: string[]) => {
  const frontendTechnologies = technologies[0].technologies;
  const backendTechnologies = technologies[1].technologies;
  const gameDevTechnologies = technologies[2].technologies;
  const usedTech = [];

  const allTechnologies = type === "web" ? frontendTechnologies.concat(backendTechnologies) : gameDevTechnologies;

  for (let i = 0; i < techs.length; i++) {
    const addTech = allTechnologies.find((item) => item.title === techs[i]);
    usedTech.push(addTech);
  }
  return usedTech as {img: string, title: string, labels: string[]}[]
};

export const projects = [
  {
    type: "web",
    projects: [
      {
        title: "OpenAI Chat & Images",
        path: "gpt",
        usedTechImgs: getUsedTech("web", ["Next JS", "Typescript", "React Query", "Tailwind", "Mongo DB", "Prisma ORM", "Docker"]),
        description: "",
        img: [""],
        video: "",
        liveSiteURL: "https://gpt.bwrd.eu",
        demoSiteURL: "",
        availableForPublic: true,
      },
      {
        title: "Finance Literacy Game",
        path: "finance-literacy",
        usedTechImgs: getUsedTech("web", ["React JS", "Typescript", "React Query", "SASS", "Mongo DB", "Docker", "Google Cloud"]),
        description:
          "Game is designed to offer players an interactive experience in managing their finances through engaging life-based scenarios. By providing a series of financial challenges, the game aims to enhance players' financial decision-making skills. Game offers detailed charts and data visualizations, providing players with a comprehensive overview of their financial progress.",
        img: [financeLiteracyImage],
        video: "",
        liveSiteURL: "https://fmk.bwrd.eu",
        demoSiteURL: "",
        availableForPublic: true,
      },
      {
        title: "QR & Quiz App",
        path: "quiz-app",
        usedTechImgs: getUsedTech("web", ["React JS", "Typescript", "React Query", "SASS"]),
        description:
          "Created an engaging mobile-centric quiz app for cities Puchov and Uherske Hradiste based on given UX design, encouraging users to explore parks by scanning QR codes for questions about their surroundings. Quiz includes multiple different question kinds. The project also included a simple admin system with users and their progress.",
        img: [quizImg],
        video: "",
        liveSiteURL: "https://kvizovahra.sk/",
        demoSiteURL: "",
        availableForPublic: true,
      },
      {
        title: "Generators",
        path: "generators",
        usedTechImgs: getUsedTech("web", ["React JS", "Typescript", "CSS"]),
        description:
          "Made specifically for the company I work for as a software tester, this comprehensive generator tool simplifies our daily tasks. It allows for customizable Lorem Ipsum text generation with adjustable paragraph and character counts, and the creation of random birth numbers for both mens and womens. The project also incorporates a straightforward daily report list feature.",
        img: [generatorsImage],
        video: "",
        liveSiteURL: "https://bwrd.eu/#/tipsport",
        demoSiteURL: "",
        availableForPublic: true,
      },
      {
        title: "Linker App",
        path: "linker-app",
        usedTechImgs: getUsedTech("web", ["Javascript", "HTML", "CSS"]),
        description:
          "Crafted during my time as a customer technical support representative, this project aimed to streamline our diagnostic processes by consolidating various tools into one simple linking application. It also featured an organized collection of manuals and essential resources, neatly sorted into relevant categories for quick and easy access.",
        img: [linkerImage],
        video: "",
        liveSiteURL: "",
        demoSiteURL: "",
        availableForPublic: false,
      },
    ],
  },
  {
    type: "game dev",
    projects: [
      {
        title: "5 Nights To Live",
        path: "5-nights-to-live",
        usedTechImgs: getUsedTech("gamedev", ["Unreal Engine"]),
        description:
          "Immerse yourself in a thrilling adventure. '5 Nights To Live' is a heart-pounding first-person shooter game that thrusts players into a dense, foreboding forest. Battle for survival as you confront nightly onslaughts of relentless zombies, putting your skills and wits to the ultimate test.",
        img: [""],
        video: "https://www.youtube.com/embed/CY64diSC2Rg?si=PUTQkDd9IMhzKCcr",
        liveSiteURL: "https://roman-bwoody-durek.itch.io/5-nights-to-live",
        demoSiteURL: "",
        availableForPublic: true,
      },
      {
        title: "Crystal Hunter",
        path: "crystal-hunter",
        usedTechImgs: getUsedTech("gamedev", ["Unreal Engine"]),
        description:
          "Crafted during the TEDI Game Jam #25, 'Crystal Hunter' is a thrilling adventure game that runs on the powerful Unreal Engine 5. Embark on an exciting journey to collect precious crystals while navigating through immersive levels filled with challenging obstacles. Can you conquer the game and emerge as the ultimate Crystal Hunter?",
        img: [""],
        video: "https://www.youtube.com/embed/_4y_Be1iaKQ?si=HlgySpobo_fVqPpx",
        liveSiteURL: "https://roman-bwoody-durek.itch.io/crystal-hunter",
        demoSiteURL: "",
        availableForPublic: true,
      },
      {
        title: "Pirate Dodge",
        path: "pirate-dodge",
        usedTechImgs: getUsedTech("gamedev", ["Godot"]),
        description:
          "Utilizing the versatile Godot game engine, I crafted a thrilling 2D hyper-casual single-player experience, marking my maiden venture into game development. In this adrenaline-packed adventure, players must deftly evade a relentless barrage of cannonballs, striving to survive the onslaught for as long as possible. ",
        img: [""],
        video: "https://www.youtube.com/embed/ef8uVD6Uq-k?si=X9pyGCJx3GOegxFL",
        liveSiteURL: "",
        demoSiteURL: "",
        availableForPublic: true,
      },
    ],
  },
];
