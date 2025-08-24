import Cards from "./memoryComponents/Cards";
import "./memoryComponents/styles/cards.scss"
import ProjectNavbar from "../../ProjectNavbar/ProjectNavbar";
import { useLocation } from "react-router-dom";

function Memory() {
  return (
    <div className="memory-background">
      <ProjectNavbar/>
      <div className="memory-app">
        <div className="memory-div-left"></div>
        <Cards/>
        <div className="memory-div-right"></div>
      </div>
    </div>
    
  );
}

export default Memory;
