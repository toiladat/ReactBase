import "./DeleteTask.css";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function DeleteTask(props) {
  const{data,setData,taskId}=props;
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const deleteTask=()=>{
    const index=data.findIndex((item)=>(item.id===taskId));
    const dataCoppy=[...data];
    dataCoppy.splice(index,1);
    setData(dataCoppy);
  }

  
  return (
    <>
      <FaTrashAlt className="deleteButton" onClick={handleShow} />
      <Modal className="modal" show={show} onHide={handleClose}>
        <p className="modalTitle">Are you sure you want to delete this task?</p>
        <div className="button">
          <button className="acceptButton" onClick={()=>{handleClose();deleteTask()}}>
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
