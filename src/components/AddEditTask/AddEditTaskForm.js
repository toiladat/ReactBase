import Modal from "react-bootstrap/Modal";
import data from "../../Data/Data.json";
import { useState,useEffect } from "react";
function AddEditTaskForm(props) {

  const{data,setData,target,handleClose,show, editedItem}=props;

//   console.log(target);

    const addEditHandle= ()=>{
        target==="Add"?  addTask (): editTask();
        handleClose();
    }

  //khởi tạo 1 task mới phụ thuộc vào thêm hay sửa
  
 const [newId, setNewId] = useState(editedItem?`${editedItem.id}`:'');
 const [newTitle, setNewTitle] = useState(editedItem?`${editedItem.title}`:'');
 const [newPri, setNewPri] = useState(editedItem?`${editedItem.priority}`:'low');
 const [newStatus, setNewStatus] = useState(editedItem?`${editedItem.status}`:'to do');
 const [newProgress, setNewProgress] = useState(editedItem?`${editedItem.progress}`:'0');
 console.log(editedItem);


  // gán giá trị pri mặc định và set giá trị khi click
 

  const handleClick = (priority) => {
    setNewPri(priority);
  };

  // setNewTitle khi user nhap


  // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // setIsValid(regex.test(value));


  // const str = "your string here";
  // const isValid = /^.{1,20}$/.test(str);
  // console.log(isValid); // true nếu chuỗi không vượt quá 20 ký tự, ngược lại là false

  const [isValid,setIsValid]=useState(false);
  const regex=/^.{1,20}$/;

  const onChangeAddTask = (e) => {
    setIsValid(regex.test(e.currentTarget.value));
    setNewTitle(e.currentTarget.value);
  };

  // tìm id lớn nhất trong data( task sau cùng)
  const maxId=data.reduce((maxCurrId,currItem)=>(Math.max(maxCurrId,parseInt(currItem.id))), 0);

//   console.log(data);

  const addTask = () => {
    const newTask = {
      id: `${maxId+1}`,
      title: newTitle,
      priority: newPri,
      status: newStatus,
      progress: 0,
    };
    // thêm task

  
    setData([newTask, ...data]);

    //reset form để không lấy val cũ
    setNewId("");
    setNewTitle("");
    setNewPri("low");
    setNewStatus("To Do");
    setNewProgress(0);
  };

  const editTask=()=>{
    let index= data.findIndex((item)=>(item.id===editedItem.id));
    const dataCoppy=[...data];
    dataCoppy[index]={
        id: editedItem.id,
        title: newTitle,
        priority: newPri,
        status: newStatus,
        progress: 0,
      };
    setData(dataCoppy);
    // không clear modal vì nếu set lại thì dữ lieuej trong rơw bị đổi
    }
  
 

  return (
    <>
      <Modal className="modal" show={show} onHide={handleClose}>
        <h3> {target} Task </h3> <label for="taskInput"> Task </label>
        <input
          placeholder="Type your task here"
          autoComplete="off"
          id="taskInput"
          value={newTitle}
          onChange={onChangeAddTask}
        />
        <label for="priorityTask"> Priority </label>
        <ul id="priorityTask">
          {["high", "medium", "low"].map((pri) => (
            <li
              key={pri}
              className={`${
                newPri === pri ? `${pri}-selected` : ``
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
          className={`addButton${!newTitle||!isValid ? "-disable" : ""}`}
          disabled={!newTitle||!isValid}
          onClick={() => {
            addEditHandle();
          }}
        >
          {target}
        </button>
      </Modal>
    </>
  );
}
export default AddEditTaskForm;