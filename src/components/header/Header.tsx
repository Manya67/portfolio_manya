import { headerTabs } from "../../constants/HeaderData";
import Logo from "./Logo";
import Tabs from "../shared/Tabs";
import { TbSunFilled, TbMoonFilled } from "react-icons/tb";
import useTheme from "../../context/Theme";

const Header = () => {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const toggle = () => {
    if (themeMode === "light") {
      darkTheme();
    } else lightTheme();
  };
  return (
    <div className="w-full flex justify-center items-center h-20">
      <div className="w-[80%] h-full flex justify-between items-center gap-2 ">
        {/* <Logo /> */}
        <div className="h-full w-full flex justify-end items-center text-2xl gap-8 px-2 ">
          {headerTabs.map((tab, index) => {
            return (
              <Tabs name={tab.name} navigateTo={tab.navigateTo} key={index} />
            );
          })}
        </div>
        <button
          className="h-10 w-12 rounded-full flex items-center justify-center"
          onClick={() => toggle()}
        >
          {themeMode === "light" ? (
            <TbMoonFilled size="1.85em" color="#000" />
          ) : (
            <TbSunFilled size="1.85em" color="#FFD700" />
          )}
        </button>
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


  navigation links 
  
*/
