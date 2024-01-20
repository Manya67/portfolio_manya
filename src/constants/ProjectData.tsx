export interface projectTabsDetail {
  projectName: string;
  subHeading: string;
  picture: string;
  desc: string;
  align: boolean;
  buttonTabs: string[];
}

export const projectTabs: projectTabsDetail[] = [
  {
    projectName: "Food villa",
    subHeading: "Food deliverying web application",
    picture: "../../utils/images/project.png",
    desc: " Project desc Lorem ipsum dolor sit amet, consectetur adipisicingelit. Quod id placeat fuga repellat ullam accusamus voluptatibusvero, eius magni iusto soluta dolorem quaerat,",
    align: false,
    buttonTabs: ["ReactJS", "tailwind css", "redux", "real api", "ReactJS"],
  },
  {
    projectName: "Food villa",
    subHeading: "Food deliverying web application",
    picture: "",
    desc: " Project desc Lorem ipsum dolor sit amet, consectetur adipisicingelit. Quod id placeat fuga repellat ullam accusamus voluptatibusvero, eius magni iusto soluta dolorem quaerat,",
    align: true,
    buttonTabs: ["ReactJS", "tailwind css", "redux", "real api", "ReactJS"],
  },
];
