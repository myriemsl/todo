import "./App.css";
import AddTask from "./Components/AddTask";
import ListTask from "./Components/ListTask";
import { BsListCheck } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <div className="App">
      <section className="details">
        <div className="userdetails">
          <p> To Do List </p>
          <BsListCheck id="icon"/> 
        </div>
        <div className="containerdetails">
         <AddTask/>
         <ListTask/>
       </div>
      </section>
    </div>
  );
}

export default App;
