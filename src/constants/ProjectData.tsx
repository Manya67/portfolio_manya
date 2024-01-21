export interface projectTabsDetail {
  projectName: string;
  subHeading: string;
  picture: string;
  desc: string;
  align: boolean;
  buttonTabs: string[];
  repoLink: string;
  liveLink: string;
}

export const projectTabs: projectTabsDetail[] = [
  {
    projectName: "Food villa",
    subHeading: "Food deliverying web application",
    picture: "../../../utils/images/project.png",
    desc: "Food Villa is a dynamic food-ordering web application showcasing the use of technologies like ReactJS. In this project, I have been able to use different features together and gain a greater understanding of them.",
    align: false,
    buttonTabs: ["ReactJS", "TailwindCSS", "Redux", "ReST API"],
    repoLink: "https://github.com/Manya67/FOODVILLA",
    liveLink: "https://foodvilla-manya.netlify.app/",
  },
  {
    projectName: "Unsplash Clone",
    subHeading: "Picture showing web application",
    picture: "",
    desc: "The application aims to replicate the functionality and user experience of the popular image-sharing platform, Unsplash, by leveraging the Unsplash Live API",
    align: true,
    buttonTabs: ["ReactJS", "TailwindCSS", "Redux", "ReST API"],
    repoLink: "https://github.com/Manya67/Unsplash_Clone",
    liveLink: "https://foodvilla-manya.netlify.app/",
  },
  {
    projectName: "Docs.",
    subHeading: "Note taking web application",
    picture: "../../utils/images/project.png",
    desc: " Project desc Lorem ipsum dolor sit amet, consectetur adipisicingelit. Quod id placeat fuga repellat ullam accusamus voluptatibusvero, eius magni iusto soluta dolorem quaerat,",
    align: false,
    buttonTabs: ["ReactJS", "tailwind css", "redux", "real api", "ReactJS"],
    repoLink: "https://github.com/Manya67/documents",
    liveLink: "https://foodvilla-manya.netlify.app/",
  },
  {
    projectName: "Youtube Clone",
    subHeading: "Video playing web application",
    picture: "",
    desc: " Project desc Lorem ipsum dolor sit amet, consectetur adipisicingelit. Quod id placeat fuga repellat ullam accusamus voluptatibusvero, eius magni iusto soluta dolorem quaerat,",
    align: true,
    buttonTabs: ["ReactJS", "tailwind css", "redux", "real api", "ReactJS"],
    repoLink: "https://github.com/Manya67/youtube_clone",
    liveLink: "https://foodvilla-manya.netlify.app/",
  },
];
