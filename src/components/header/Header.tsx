import { headerTabs } from "../../constants/HeaderData";
import Logo from "./Logo";
import Tabs from "./Tabs";
import { TbSunFilled } from "react-icons/tb";

const Header = () => {
  return (
    <div className="w-full flex justify-center items-center h-20">
      <div className="w-[80%] h-full flex justify-between items-center gap-2 ">
        <Logo />
        <div className="h-full w-full flex justify-end items-center text-2xl gap-8 px-2 ">
          {headerTabs.map((tab, index) => {
            return (
              <Tabs name={tab.name} navigateTo={tab.navigateTo} key={index} />
            );
          })}
        </div>
        <div className="h-10 w-12 bg-cream rounded-full flex items-center justify-center">
          <TbSunFilled size="1.85em" color="#0b2545" />
        </div>
      </div>
    </div>
  );
};

export default Header;

/*
  header  
        logo manya
        home 
        project 
        contact
        theme 

  hover 
  link 
  animation
*/
