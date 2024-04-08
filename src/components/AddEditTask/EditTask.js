import { FaListUl } from "react-icons/fa";
import AddEditTaskForm from './AddEditTaskForm'
import { useState } from "react"

function EditTask(props){
    const { data, setData, target, item } = props;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (<>
        <FaListUl className="updateButton" onClick={handleShow}/>

        <AddEditTaskForm data={data} setData={setData} target={target} handleClose={handleClose}  show={show} editedItem={item}/>

    </>)
}
export default EditTask;