import { headerTabsDetails } from "../../constants/HeaderData";
import { Link } from "react-router-dom";

const Tabs = ({ name, navigateTo }: headerTabsDetails) => {
  return (
    <Link to={navigateTo}>
      <h3 className="tracking-wider">{name}</h3>
    </Link>
  );
};

export default Tabs;
