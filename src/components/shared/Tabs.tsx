import { headerTabsDetails } from "../../constants/HeaderData";
import { Link } from "react-router-dom";

const Tabs = ({ name, navigateTo }: headerTabsDetails) => {
  return (
    <Link
      to={navigateTo}
      onClick={(e) => {
        if (name == "Contact") {
          window.location.href = "mailto:manyajain62002@gmail.com";
          e.preventDefault();
        }
      }}
      className="dark:hover:text-white"
    >
      <h3 className="tracking-wider">{name}</h3>
    </Link>
  );
};

export default Tabs;
