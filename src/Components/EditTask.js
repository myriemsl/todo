import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../JS/Actions/index";
import { Button, Modal } from "react-bootstrap";
import { AiOutlineEdit } from "react-icons/ai";

const EditTask = ({ task }) => {
  const [show, setShow] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = () => {
    dispatch(editTask(task.id, newDescription));
    handleClose();
  };

  return (
    <div>
      <div className="taskicon" onClick={handleShow}>
        <AiOutlineEdit style={{color:"#5C76BD"}}/>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTask;
