import financeLiteracyImage from "../../assets/thumbnails/finance_literacy_img.png";
import placeholderImage from "../../assets/thumbnails/placeholderImage.png";
import unreaclEnginIcon from "../../assets/techIcons/unrealengineIcon.svg";
import godotIcon from "../../assets/techIcons/godotIcon.svg";
import reactIcon from "../../assets/techIcons/reactIcon.svg";
import typescriptIcon from "../../assets/techIcons/typescriptIcon.svg";
import reactQueryIcon from "../../assets/techIcons/reactqueryIcon.svg";
import sassIcon from "../../assets/techIcons/sassIcon.svg"
import mongoIcon from "../../assets/techIcons/mongodbIcon.svg";
import dockerIcon from "../../assets/techIcons/dockerIcon.svg";
import googleCloud from "../../assets/techIcons/googlecloudIcon.svg";
import jsIcon from "../../assets/techIcons/jsIcon.svg";
import htmlIcon from "../../assets/techIcons/htmlIcon.svg";
import cssIcon from "../../assets/techIcons/cssIcon.svg";




export const projects = [
  {
    type: "web",
    projects: [
      {
        title: "Finance Literacy Game",
        usedTechImgs: [reactIcon, typescriptIcon, reactQueryIcon, sassIcon, mongoIcon, dockerIcon, googleCloud],
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim aut repellat nostrum quas laboriosam sed provident blanditiis quo nemo omnis, quaerat exercitationem fugiat placeat eum obcaecati numquam. Perferendis praesentium cupiditate maxime, illo repudiandae quis. Officiis excepturi, suscipit, corporis sint minima necessitatibus eum amet obcaecati velit voluptates odio error. Soluta, consequuntur.",
        img: financeLiteracyImage,
        video: "",
        liveSiteURL: "https://fmk.bwrd.eu",
        availableForPublic: true,
      },
      {
        title: "QR & Quiz App",
        usedTechImgs: [reactIcon, typescriptIcon, sassIcon],
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim aut repellat nostrum quas laboriosam sed provident blanditiis quo nemo omnis, quaerat exercitationem fugiat placeat eum obcaecati numquam. Perferendis praesentium cupiditate maxime, illo repudiandae quis. Officiis excepturi, suscipit, corporis sint minima necessitatibus eum amet obcaecati velit voluptates odio error. Soluta, consequuntur.",
        img: placeholderImage,
        video: "",
        liveSiteURL: "https://quiz-bwrd.netlify.app/",
        availableForPublic: true,
      },
      {
        title: "Generators",
        usedTechImgs: [reactIcon, typescriptIcon, cssIcon],
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim aut repellat nostrum quas laboriosam sed provident blanditiis quo nemo omnis, quaerat exercitationem fugiat placeat eum obcaecati numquam. Perferendis praesentium cupiditate maxime, illo repudiandae quis. Officiis excepturi, suscipit, corporis sint minima necessitatibus eum amet obcaecati velit voluptates odio error. Soluta, consequuntur.",
        img: placeholderImage,
        video: "",
        liveSiteURL: "",
        availableForPublic: true,
      },
      {
        title: "Internal Linker System",
        usedTechImgs: [jsIcon, htmlIcon, cssIcon],
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim aut repellat nostrum quas laboriosam sed provident blanditiis quo nemo omnis, quaerat exercitationem fugiat placeat eum obcaecati numquam. Perferendis praesentium cupiditate maxime, illo repudiandae quis. Officiis excepturi, suscipit, corporis sint minima necessitatibus eum amet obcaecati velit voluptates odio error. Soluta, consequuntur.",
        img: placeholderImage,
        video: "",
        liveSiteURL: "",
        availableForPublic: false,
      },
    ],
  },
  {
    type: "game dev",
    projects: [
      {
        title: "5 Nights To Live",
        usedTechImgs: [unreaclEnginIcon],
        description:
          "Immerse yourself in a thrilling adventure. '5 Nights To Live' is a heart-pounding first-person shooter game that thrusts players into a dense, foreboding forest. Battle for survival as you confront nightly onslaughts of relentless zombies, putting your skills and wits to the ultimate test.",
        img: "",
        video: "https://www.youtube.com/embed/CY64diSC2Rg?si=PUTQkDd9IMhzKCcr",
        liveSiteURL: "https://roman-bwoody-durek.itch.io/5-nights-to-live",
        availableForPublic: true,
      },
      {
        title: "Crystal Hunter",
        usedTechImgs: [unreaclEnginIcon],
        description:
          "Crafted during the TEDI Game Jam #25, 'Crystal Hunter' is a thrilling adventure game that runs on the powerful Unreal Engine 5. Embark on an exciting journey to collect precious crystals while navigating through immersive levels filled with challenging obstacles. Can you conquer the game and emerge as the ultimate Crystal Hunter?",
        img: "",
        video: "https://www.youtube.com/embed/_4y_Be1iaKQ?si=HlgySpobo_fVqPpx",
        liveSiteURL: "https://roman-bwoody-durek.itch.io/crystal-hunter",
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
        availableForPublic: true,
      },
    ],
  },
];
