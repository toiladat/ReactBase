import "./Task.css";
import { FaListUl } from "react-icons/fa";
import DeleteTask from "../DeleteTask/index"
function Task(props) {
  const { item } = props;  
  return (
    <>
      <div className="taskList">
        <div className="taskTitle">
          <span>Task</span>
          <span className="taskContent">{item.title}</span>
        </div>
        <div className="taskPri">
          <span>Priority</span>
          <span className={`taskLevel-${item.priority}`}>{item.priority}</span>
        </div>
        <button className="proceButton">{item.status}</button>
        <FaListUl className="updateButton" />
        <DeleteTask/>
      </div>
    </>
  );
}
export default Task;
