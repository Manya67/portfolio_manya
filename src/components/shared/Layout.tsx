import Buttons from "./Buttons";
import { projectTabsDetail } from "../../constants/ProjectData";
import { Link } from "react-router-dom";

const Layout = (detail: projectTabsDetail) => {
  const {
    projectName,
    subHeading,
    picture,
    desc,
    align,
    buttonTabs,
    repoLink,
    liveLink,
  } = detail;
  return (
    <div
      className={`w-full flex h-80 gap-8 ${
        align ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div
        className={`w-1/12 h-full bg-gradient-to-t from-[#cc0479] via-[#ff0096] to-[#ff4cb5]`}
      ></div>
      <Link
        to={liveLink}
        target="_blank"
        className="w-5/12 h-full border-2 dark:border-grey hover:bg-black/60"
      >
        <img
          src={picture}
          alt="project"
          className="object-fill w-full h-full hover:opacity-50"
        />
      </Link>
      <div className="w-5/12 h-full flex flex-col items-start gap-2">
        <h4 className="text-xl leading-none tracking-wide h-[10%]">
          {subHeading}
        </h4>
        <div className="flex flex-col justify-between h-[75%]">
          <h1 className="text-5xl leading-none tracking-wide text-highlighter">
            {projectName}
          </h1>
          <div className="flex gap-2 flex-wrap ">
            {buttonTabs.map((btn, index) => {
              return <Buttons name={btn} key={index} />;
            })}{" "}
          </div>
          <p className="text-lg">{desc}</p>
        </div>
        <Link to={repoLink} target="_blank">
          <div className="h-[15%]">
            <button className="border-2 py-2 px-4 rounded-xl border-lightGrey text-lightGrey hover:text-darkest dark:border-lighter dark:text-lighter hover:border-highlighter dark:hover:border-highlighter dark:hover:text-white ">
              View repositary
            </button>
          </div>
        </Link>
      </div>
      <div className="w-1/12"></div>
    </div>
  );
};

export default Layout;
/**
 *
 * hover - text
 * images
 * color of block
 *
 */
