import { Tooltip } from "@mui/material";
import { skillTabs, skill_map } from "../../constants/SkillData";

const Skill = () => {
  return (
    <div className="w-full bg-grey mt-14 py-6 flex flex-col justify-start items-center gap-10">
      <h1 className="text-4xl text-darkblue font-bold tracking-wider ">
        Technologies worked with
      </h1>
      <div className="flex flex-row justify-center items-center gap-8 w-full">
        {skillTabs.map(({ name }, index) => {
          const SkillLogo = skill_map[name];
          return (
            <Tooltip key={index} title={name} placement="bottom">
              <div>
                <SkillLogo size="3em" color="#0b2545" />
              </div>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
