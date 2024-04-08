import "./Task.css";
import DeleteTask from "../DeleteTask/index";
import EditTask from "../AddEditTask/EditTask";

function Task(props) {
  const { item , data, setData } = props;  
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

        <EditTask data={data} setData={setData} target={"Edit"} item={item}/>
        <DeleteTask data={data} setData={setData} taskId={item.id}/>
      </div>
    </>
  );
}
export default Task;
