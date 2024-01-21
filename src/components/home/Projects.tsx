import { useState } from "react";
import { projectTabs } from "../../constants/ProjectData";
import Layout from "../shared/Layout";

const Projects = () => {
  const [loadMore, setLoadMore] = useState(false);
  const [itemCount, setItemCount] = useState(2);
  return (
    <div className="w-[80%] flex flex-col gap-14">
      {projectTabs?.slice(0, itemCount)?.map((data, index) => {
        return <Layout {...data} key={index} />;
      })}
      <div className="flex justify-end">
        <button
          onClick={() => {
            setItemCount(itemCount == 2 ? projectTabs.length : 2);
            setLoadMore(!loadMore);
          }}
          className="border-2 py-2 px-4 rounded-xl"
        >
          {loadMore ? "Show Less" : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default Projects;
