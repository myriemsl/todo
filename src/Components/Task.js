import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, doneTask } from "../JS/Actions/index";
import EditTask from "./EditTask";
import { AiOutlineDelete } from "react-icons/ai";
import { MdRemoveDone, MdOutlineDone } from "react-icons/md";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className="task">
        <span className={task.isDone ? "done" : null}>{task.description}</span>
        <EditTask task={task}/>
        <div className="taskicon"  onClick={() => dispatch(doneTask(task.id))}>
          {task.isDone ?  <MdRemoveDone style={{color:"#1454CF"}}/> : <MdOutlineDone style={{color:"#1454CF"}}/> }
        </div>        
        <div className="taskicon" onClick={() => dispatch(deleteTask(task.id))}>
          <AiOutlineDelete style={{color:"#C20E45"}}/>
        </div>
    </div>
  );
};

export default Task;
