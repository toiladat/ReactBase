import { useState } from "react";
import "./AddTask.css";
import { FaClinicMedical } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import data from "../../Data/Data.json";

function AddTask(props) {
  // props từ app.js là data.json
  const { data, setData } = props;

  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  // gán giá trị pri mặc định và set giá trị khi click
  const [selectedPriority, setSelectedPriority] = useState("low");
  const handleClick = (priority) => {
    setSelectedPriority(priority);
  };

  //khởi tạo 1 task mới
  const [newId, setNewId] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newPri, setNewPri] = useState("low");
  const [newStatus, setNewStatus] = useState("to do");
  const [newProgress, setNewProgress] = useState(0);

  // setNewTitle khi user nhap
  const onChangeAddTask = (e) => {
    setNewTitle(e.currentTarget.value);
  };

  const addTask = () => {
    const newTask = {
      id: "",
      title: newTitle,
      priority: selectedPriority,
      status: "To Do",
      progress: 0,
    };
    // thêm task
    console.log(data);
    setData([newTask, ...data]);

    //reset form để không lấy val cũ
    setNewId("");
    setNewTitle("");
    setNewPri("low");
    setNewStatus("to do");
    setNewProgress(0);
  };

  return (
    <>
      <button className="addTask" onClick={handleShow}>
        <FaClinicMedical className="icon" />
        Add Task
      </button>
      <Modal className="modal" show={show} onHide={handleClose}>
        <h3> Add Task </h3> <label for="taskInput"> Task </label>
        <input
          placeholder="Type your task here"
          autoComplete="off"
          id="taskInput"
          onChange={onChangeAddTask}
        />
        <label for="priorityTask"> Priority </label>
        <ul id="priorityTask">
          {["high", "medium", "low"].map((pri) => (
            <li
              key={pri}
              className={`${
                selectedPriority === pri ? `${pri}-selected` : ``
              } ${pri}`}
              onClick={() => {
                handleClick(pri);
              }}
            >
              {pri}
            </li>
          ))}
        </ul>
        <button
          className={`addButton${!newTitle?'-disable':''}`}
          disabled={!newTitle}
          onClick={() => {
            handleClose();
            addTask();
          }}
        >
          Add
        </button>
      </Modal>
    </>
  );
}
export default AddTask;
