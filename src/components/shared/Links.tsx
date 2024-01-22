import { Link } from "react-router-dom";
import { linkDetails } from "../../constants/LinkData";
import { Tooltip } from "@mui/material";

interface links {
  tabs: linkDetails[];
  icons: any;
}
const Links = ({ tabs, icons }: links) => {
  return (
    <div className="pt-5 w-full flex items-center justify-start gap-5">
      {tabs.map(({ name, link }: linkDetails, index: number) => {
        const LinkLogo = icons[name];
        return (
          <Tooltip title={name} key={index}>
            <Link to={link} target="_blank">
              <span className="h-[2.85em] w-[2.85em] dark:bg-lighter dark:hover:bg-white rounded-full flex justify-center items-center">
                <LinkLogo size="1.85em" color="#181818" />
              </span>
            </Link>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default Links;
