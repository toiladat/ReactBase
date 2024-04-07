import "./DeleteTask.css";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function DeleteTask() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);



  
  return (
    <>
      <FaTrashAlt className="deleteButton" onClick={handleShow} />
      <Modal className="modal" show={show} onHide={handleClose}>
        <p className="modalTitle">Are you sure you want to delete this task?</p>
        <div className="button">
          <button className="acceptButton" onClick={handleClose}>
            Delete
          </button>
          <button className="cancleButton" onClick={handleClose}>
            Cancle
          </button>
        </div>
      </Modal>
    </>
  );
}
export default DeleteTask;
