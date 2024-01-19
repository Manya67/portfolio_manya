import AnimatedCursor from "react-animated-cursor";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="w-full bg-darkblue text-cream py-2">
      {/* <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        trailingSpeed={14}
        outerStyle={{
          border: "3px solid #fff",
          background: "none",
        }}
        innerStyle={{ backgroundColor: "white" }}
        clickables={[]}
      /> */}
      <Header />
      <Home />
    </div>
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
