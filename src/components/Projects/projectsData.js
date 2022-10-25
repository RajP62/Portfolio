import {
  project1Laptop,
  project1Mobile,
  project2Laptop,
  project2Mobile,
  project3Laptop,
  project3Mobile,
  project4Laptop,
  project4Mobile,
} from "./projectImages";

export const projectData = [
  {
    id: 1,
    image: project1Laptop,
    transitionImage: project1Mobile,
    title: "Smallcase is a website which deals which different finance products/schemes.",
    codeLink: "https://github.com/RajP62/Unit-3-Project-smallcase",
    liveLink: "https://smallcaseproject.herokuapp.com/home",
    techStack: ["Ejs", "TailwindCss", "Javascript", "Express", "Mongodb"]
  },
  {
    id: 2,
    image: project4Laptop,
    transitionImage: project4Mobile,
    title: "This is the clone of Dineout which is a platform that enables customers to directly make reservations for nearby restaurants and book the tables. Note: This project is completely for educational purposes",
    codeLink: "https://github.com/RajP62/Dineout",
    liveLink: "https://dineoutclone-gamma.vercel.app/",
    techStack: ["React", "Redux", "Express", "MongoDB", "Meterial-UI", "Cookie-parser", "JWT"]
  },
  {
    id: 3,
    image: project2Laptop,
    transitionImage: project2Mobile,
    title: "Yesstyle.com is an e-commerce website which deals in the segment of fashion and beauty & wellness.",
    codeLink: "https://github.com/pummysh/YesStyle",
    liveLink: "https://yesstyleclone.netlify.app/",
    techStack: ["HTML","CSS","Javascript"]
  },
  {
    id: 4,
    image: project3Laptop,
    transitionImage: project3Mobile,
    title: "This is a personal project created for the implementation of Youtube app using Youtube-api",
    codeLink: "https://github.com/RajP62/Youtube-Implementation",
    liveLink: "https://youtubedashboard.netlify.app/",
    techStack: ["HTML","CSS","Javascript"]
  },
]
