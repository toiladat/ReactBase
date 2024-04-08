function StatusTask(props) {
  const { data, setData, item } = props;

  const changeStatus = () => {

    let nextStatus = "";
    if (item.status === "To Do") nextStatus = "In Progress";
    else if (item.status === "In Progress") nextStatus = "Done";
    else nextStatus = "To Do";



    let index = data.findIndex((task) => task.id === item.id);
    const dataCoppy = [...data];
    dataCoppy[index] = {
      id: item.id,
      title: item.title,
      priority: item.priority,
      status: nextStatus,
      progress: 0,
    };
    setData(dataCoppy);
  };



  return (
    <>
      <button className="proceButton" onClick={changeStatus}>
        {item.status}
      </button>
    </>
  );
}
export default StatusTask;
