import Skill from "../skills/Skill";
import Intro from "./Intro";
import Links from "./Links";
import Salutation from "./Salutation";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start pt-10 gap-24">
      <div className="w-[80%] pl-2">
        <Salutation />
        <Intro />
        <Links />
      </div>
      <Skill />
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
    education, work exp
    projects 
    footer 
*/
