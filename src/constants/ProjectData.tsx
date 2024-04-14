export interface projectTabsDetail {
  id: string;
  projectName: string;
  subHeading: string;
  desc: string;
  align: boolean;
  buttonTabs: buttonTabsDetail[];
  repoLink: string;
  liveLink: string;
}

export interface buttonTabsDetail {
  name: string;
}

export const projectTabs: projectTabsDetail[] = [
  {
    id: "food",
    projectName: "Food villa",
    subHeading: "Food deliverying web application",
    desc: "Food Villa is a dynamic food-ordering web application showcasing the use of technologies like ReactJS. In this project, I have been able to use different features together and gain a greater understanding of them.",
    align: false,
    buttonTabs: [
      { name: "ReactJS" },
      { name: "Custom Hooks" },
      { name: "Redux" },
      { name: "Rest API" },
      { name: "Search" },
    ],
    repoLink: "https://github.com/Manya67/FOODVILLA",
    liveLink: "https://foodvilla-manya.netlify.app/",
  },
  {
    id: "unsplash",
    projectName: "Unsplash Clone",
    subHeading: "Picture showing web application",
    desc: "The application aims to replicate the functionality and user experience of the popular image-sharing platform, Unsplash, by leveraging the Unsplash Live API",
    align: true,
    buttonTabs: [
      { name: "ReactJS" },
      { name: "Pagination" },
      { name: "Infinite scrolling" },
      { name: "Axios" },
    ],
    repoLink: "https://github.com/Manya67/Unsplash_Clone",
    liveLink: "https://unsplashbymanya.netlify.app",
  },
  {
    id: "docs",
    projectName: "Docs.",
    subHeading: "Note taking web application",
    desc: ` "Docs" – a sleek and intuitive note-displaying app designed for seamless organization and effortless accessibility. With an innovative touch of Framer Motion drag property, navigating through your notes becomes an engaging and fluid experience`,
    align: false,
    buttonTabs: [
      { name: "ReactJS" },
      { name: "TailwindCSS" },
      { name: "Framer Motion" },
      { name: "Drag" },
    ],
    repoLink: "https://github.com/Manya67/documents",
    liveLink: "https://docs-manya.netlify.app/",
  },
  {
    id: "wordFinder",
    projectName: "Frequent word finder",
    subHeading: "Finds list of most occuring words",
    desc: `Developed this app to find skill requirements based on the most frequent words in the job description.`,
    align: true,
    buttonTabs: [
      { name: "Data Structures" },
      { name: "ReactJS" },
      { name: "TailwindCSS" },
    ],
    repoLink: "https://github.com/Manya67/frequentWordFinder",
    liveLink: "https://frequent-word-finder.netlify.app/",
  },
  {
    id: "weather",
    projectName: "Aaj ka mousam",
    subHeading: "Weather displaying web application",
    desc: `It is a web application displaying the current weather details and future 5 days details`,
    align: false,
    buttonTabs: [
      { name: "OpenWeatherAPI" },
      { name: "Conditional-rendering" },
      { name: "Unit changes" },
    ],
    repoLink: "https://github.com/Manya67/weatherApp",
    liveLink: "https://aajkamousam-manya.netlify.app/",
  },
  {
    id: "youtube",
    projectName: "VidClone",
    subHeading: "Video playing web application",
    desc: "VidClone is a cutting-edge video-sharing platform designed to revolutionize online content consumption. With an intuitive interface reminiscent of popular platforms, VidClone offers users a seamless experience for uploading, sharing, and discovering a diverse range of videos.",
    align: true,
    buttonTabs: [
      { name: "ReactJS" },
      { name: "TailwindCSS" },
      { name: "Redux" },
      { name: "Rest API" },
    ],
    repoLink: "https://github.com/Manya67/youtube_clone",
    liveLink: "",
  },
];
