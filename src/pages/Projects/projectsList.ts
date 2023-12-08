import { unrealengineIcon, godotIcon, reactIcon, typescriptIcon, reactqueryIcon, sassIcon, mongoIcon, dockerIcon, googlecloudIcon, jsIcon, htmlIcon, cssIcon } from "../../assets";
import financeLiteracyImage from "../../assets/thumbnails/finance_literacy_img.png";
import linkerImage from "../../assets/thumbnails/linker_img.png";
import generatorsImage from "../../assets/thumbnails/generators_img.png";
// import placeholderImage from "../../assets/thumbnails/placeholderImage.png";
import quizImg from "../../assets/thumbnails/quizImg.png";

export const projects = [
  {
    type: "web",
    projects: [
      {
        title: "Finance Literacy Game",
        usedTechImgs: [reactIcon, typescriptIcon, reactqueryIcon, sassIcon, mongoIcon, dockerIcon, googlecloudIcon],
        description:
          "Game is designed to offer players an interactive experience in managing their finances through engaging life-based scenarios. By providing a series of financial challenges, the game aims to enhance players' financial decision-making skills. Game offers detailed charts and data visualizations, providing players with a comprehensive overview of their financial progress.",
        img: financeLiteracyImage,
        video: "",
        liveSiteURL: "https://fmk.bwrd.eu",
        demoSiteURL: "",
        availableForPublic: true,
      },
      {
        title: "QR & Quiz App",
        usedTechImgs: [reactIcon, typescriptIcon, reactqueryIcon, sassIcon],
        description:
          "Created an engaging mobile-centric quiz app for cities Puchov and Uherske Hradiste based on given UX design, encouraging users to explore parks by scanning QR codes for questions about their surroundings. Quiz includes multiple different question kinds. The project also included a simple admin system with users and their progress.",
        img: quizImg,
        video: "",
        liveSiteURL: "https://kvizovahra.sk/",
        demoSiteURL: "",
        availableForPublic: true,
      },
      {
        title: "Generators",
        usedTechImgs: [reactIcon, typescriptIcon, cssIcon],
        description:
          "Made specifically for the company I work for as a software tester, this comprehensive generator tool simplifies our daily tasks. It allows for customizable Lorem Ipsum text generation with adjustable paragraph and character counts, and the creation of random birth numbers for both mens and womens. The project also incorporates a straightforward daily report list feature.",
        img: generatorsImage,
        video: "",
        liveSiteURL: "https://bwrd.eu/#/tipsport",
        demoSiteURL: "",
        availableForPublic: true,
      },
      {
        title: "Linker App",
        usedTechImgs: [jsIcon, htmlIcon, cssIcon],
        description:
          "Crafted during my time as a customer technical support representative, this project aimed to streamline our diagnostic processes by consolidating various tools into one simple linking application. It also featured an organized collection of manuals and essential resources, neatly sorted into relevant categories for quick and easy access.",
        img: linkerImage,
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
        usedTechImgs: [unrealengineIcon],
        description:
          "Immerse yourself in a thrilling adventure. '5 Nights To Live' is a heart-pounding first-person shooter game that thrusts players into a dense, foreboding forest. Battle for survival as you confront nightly onslaughts of relentless zombies, putting your skills and wits to the ultimate test.",
        img: "",
        video: "https://www.youtube.com/embed/CY64diSC2Rg?si=PUTQkDd9IMhzKCcr",
        liveSiteURL: "https://roman-bwoody-durek.itch.io/5-nights-to-live",
        demoSiteURL: "",
        availableForPublic: true,
      },
      {
        title: "Crystal Hunter",
        usedTechImgs: [unrealengineIcon],
        description:
          "Crafted during the TEDI Game Jam #25, 'Crystal Hunter' is a thrilling adventure game that runs on the powerful Unreal Engine 5. Embark on an exciting journey to collect precious crystals while navigating through immersive levels filled with challenging obstacles. Can you conquer the game and emerge as the ultimate Crystal Hunter?",
        img: "",
        video: "https://www.youtube.com/embed/_4y_Be1iaKQ?si=HlgySpobo_fVqPpx",
        liveSiteURL: "https://roman-bwoody-durek.itch.io/crystal-hunter",
        demoSiteURL: "",
        availableForPublic: true,
      },
      {
        title: "Pirate Dodge",
        usedTechImgs: [godotIcon],
        description:
          "Utilizing the versatile Godot game engine, I crafted a thrilling 2D hyper-casual single-player experience, marking my maiden venture into game development. In this adrenaline-packed adventure, players must deftly evade a relentless barrage of cannonballs, striving to survive the onslaught for as long as possible. ",
        img: "",
        video: "https://www.youtube.com/embed/ef8uVD6Uq-k?si=X9pyGCJx3GOegxFL",
        liveSiteURL: "",
        demoSiteURL: "",
        availableForPublic: true,
      },
    ],
  },
];
