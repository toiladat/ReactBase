import './App.css';
import Data from './Data/Data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './components/Task/index';
import AddTask from './components/AddEditTask/AddTask';
import { useState } from 'react';

function App() {
  const [data,setData]=useState(Data);
  return (
    <>
      <div className='Task'>
        <header>
          <h2>TaskList</h2>
          <AddTask data={data} setData={setData} target={"Add"}/>
        </header>
        {
          // () trong map la return ve gia tri trong()
          //{} trong map phai dung return
          data.map((item)=>(
            <Task item={item} key={item.id} data={data} setData={setData}/>
          ))
        }
      </div>
    </>
  );
}

export default App;
