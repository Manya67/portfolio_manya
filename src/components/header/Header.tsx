import { headerTabs } from "../../constants/HeaderData";
import Logo from "./Logo";
import Tabs from "./Tabs";
import { TbSunFilled } from "react-icons/tb";

const Header = () => {
  return (
    <div className="w-full h-20 flex justify-between items-center px-4 gap-2 shadow-2xl border-b-[1px] border-cream">
      <Logo />
      <div className="h-full w-full flex justify-end items-center text-3xl gap-8 px-2 ">
        {headerTabs.map((tab, index) => {
          return (
            <Tabs name={tab.name} navigateTo={tab.navigateTo} key={index} />
          );
        })}
      </div>
      <div className="h-[85%] w-20 bg-cream rounded-full flex items-center justify-center">
        <TbSunFilled size="3em" color="#0b2545" />
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
