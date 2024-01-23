import { Tooltip } from "@mui/material";
import { skillTabs, skill_map } from "../../constants/SkillData";

const Skill = () => {
  return (
    <div className="w-full bg-lighter dark:bg-grey mt-14 py-6 flex flex-col justify-start items-center gap-10">
      <h1 className="text-4xl text-darkest dark:text-lighter font-bold tracking-wider ">
        Skilled in
      </h1>
      <div className="flex flex-row justify-center items-center gap-8 w-full">
        {skillTabs.map(({ name }, index) => {
          const SkillLogo = skill_map[name];
          return (
            <Tooltip key={index} title={name} placement="bottom">
              <div className="dark:text-lighter dark:hover:text-white text-grey hover:text-darkest">
                <SkillLogo size="3em" />
              </div>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
