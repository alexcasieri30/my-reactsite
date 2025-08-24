import Board from "./components/Board";
import ControlBoard from "./components/ControlBoard";
import ProjectNavbar from "../../ProjectNavbar/ProjectNavbar";
import "./components/styles/Board.scss";

function App() {
  return (
    <div className="esketch-background">
      <ProjectNavbar/>
      <div className="App">
        <Board/>
      </div>
    </div>
    
  );
}

export default App;
