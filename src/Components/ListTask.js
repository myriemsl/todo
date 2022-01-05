import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";


const ListTask = () => {
  const [status, setstatus] = useState("all");
  const listtasks = useSelector((state) => state.task.listTasks);

  return (
    <div className="listtask">
      <label>
         <input  type="radio" onClick={() => setstatus("all")}/>
          All   
      </label>
      <label>
         <input type="radio" onClick={() => setstatus("done")}/>
          Done
      </label>
      <label>
         <input type="radio" onClick={() => setstatus("undone")}/>
          Undone
      </label>
    
      {status === "done"
        ? listtasks
            .filter((el) => el.isDone === true)
            .map((el) => <Task task={el} key={el.id} />)
        : status === "undone"
        ? listtasks
            .filter((el) => el.isDone === false)
            .map((el) => <Task task={el} key={el.id} />)
        : listtasks.map((el) => <Task task={el} key={el.id} />)}
    </div>
  );
};

export default ListTask;
