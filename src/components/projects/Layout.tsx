import Buttons from "./Buttons";
import { projectTabsDetail } from "../../constants/ProjectData";

const Layout = (detail: projectTabsDetail) => {
  const { projectName, subHeading, picture, desc, align, buttonTabs } = detail;
  return (
    <div
      className={`w-full flex h-80 gap-8 ${
        align ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className={`w-1/12 h-full bg-green-900 `}></div>
      <div className={`w-5/12 h-full border-2 border-white `}>
        <img src={picture} alt="project" />
      </div>
      <div className="w-5/12 h-full flex flex-col items-start gap-2">
        <h4 className="text-xl leading-none tracking-wide h-[10%]">
          {subHeading}
        </h4>
        <div className="flex flex-col justify-between h-[75%]">
          <h1 className="text-5xl leading-none tracking-wide">{projectName}</h1>
          <div className="flex gap-2 flex-wrap ">
            {buttonTabs.map((btn, index) => {
              return <Buttons name={btn} key={index} />;
            })}{" "}
          </div>
          <p className="text-lg">{desc}</p>
        </div>
        <div className="h-[15%]">
          <button>view repo</button>
        </div>
      </div>
      <div className="w-1/12"></div>
    </div>
  );
};

export default Layout;
/**
 * block
 * photo
 *      photo (hover)
 *
 * heading
 *        heading
 *        desc
 *        points
 *        link
 *
 */
