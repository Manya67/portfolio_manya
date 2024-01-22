import AnimatedCursor from "react-animated-cursor";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import { ThemeProvider } from "./context/Theme";
import { useEffect, useState } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="w-full bg-lighter text-dark dark:bg-darkest dark:text-lighter py-2">
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          trailingSpeed={14}
          outerStyle={{
            border: "3px solid #FFD700",
            background: "none",
          }}
          innerStyle={{ backgroundColor: "#FFD700" }}
          clickables={["a"]}
        />
        <Header />
        <Home />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

/*
 body 
    upper header 
    main container
 about us 
    details 
 projects 
 skills 
 contact 
*/
