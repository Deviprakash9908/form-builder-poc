import "./App.css";
import { DndProvider } from "react-dnd";
import {HTML5Backend} from 'react-dnd-html5-backend';
import Nav from "./Components/Nav";
import FormComp from "./Components/FormComp";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Nav />
        <div className="formholder">
          <FormComp />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
