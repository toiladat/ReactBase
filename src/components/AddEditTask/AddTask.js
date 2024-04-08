import { useState } from "react";
import "./AddTask.css";
import { FaClinicMedical } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";

import AddEditTaskForm from './AddEditTaskForm'

function AddTask(props) {
  // props từ app.js là data.json
  const { data, setData, target } = props;
  // target lựa chọn khi click vào add hoặc xóa
  // console.log(target);
  


  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <button className="addTask" onClick={handleShow}>
        <FaClinicMedical className="icon" />
        Add Task
      </button>
      <AddEditTaskForm data={data} setData={setData} target={target} handleClose={handleClose} show={show}/>
    </>
  );
}
export default AddTask;
