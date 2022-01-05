import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../JS/Actions/index";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    if (description) {
      dispatch(addTask({ id: Math.random(), description: description, isDone: false }));
      setDescription("");
    } else {
      alert("Can't add an empty Task!");
    }
  };
  return (
    <div className="addtask">
      <form onSubmit={handleChange} >
         <input type="text" placeholder="enter your task..." onChange={(e) => setDescription(e.target.value)} value={description}/>
          <button className="addbtn" onClick={handleChange}>
             Add
          </button>
      </form>    
    </div>

  );
};

export default AddTask;
