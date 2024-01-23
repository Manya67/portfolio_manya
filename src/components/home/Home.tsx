import Skill from "../skills/Skill";
import Intro from "./Intro";
import Links from "../shared/Links";
import Salutation from "./Salutation";
import { link_map, linksTabs } from "../../constants/LinkData";
import TimeLineBox from "./TimeLineBox";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start pt-10 gap-24">
      <div className="w-[90%] sm:w-[80%] pl-2">
        <Salutation />
        <Intro />
        <Links tabs={linksTabs} icons={link_map} />
      </div>
      <Skill />
      <TimeLineBox />
      <Projects />
    </div>
  );
};
export default Home;

/*
home 
    Header --
    hello hey (type animation) ---
    i'm Manya frontend devloper ---
    links ---
    skills --- (crousels) 
    education, work exp ---
    projects --- 
    footer ---
*/
