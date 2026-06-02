 
import axios from 'axios';  
import './App.css';
import CustomButton from './components/CustomButton';
import CustomInput from './components/CustomInput';
import Header from './components/Header';
import Card from './components/Card';
import { useState , useEffect} from 'react';

function App() {

const [add, setAdd]=useState(false);
const [Tasks, setTasks]=useState([]);

const [singleTask, setSingleTask]=useState('');
const [singleDes, setSingleDes]=useState('');

useEffect(() => {
    fetchTasks();
},);

const fetchTasks = async () => {
    try {
        const res = await axios.get('http://localhost:5000/tasks');
        setTasks(res.data);
    } catch (err) {
        console.log(err);
    }
};

const UpdateTask = async (id) => {
    try {
        await axios.put(`http://localhost:5000/tasks/${id}`,{
            complete: true
        });
        
        setTasks(
            Tasks.map(t =>
                t.id === id ? { ...t, complete: true } : t
            )
        );
    } catch (err) {
        console.log(err);
    }
};

const deleteTask = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/tasks/${id}`);
        setTasks(Tasks.filter(t => t.id !== id));
    } catch (err) {
        console.log(err);
    }
};

const addToCard = async () => {
    try {
        const res = await axios.post('http://localhost:5000/tasks', {
            task: singleTask,
            des: singleDes
        });

        setTasks([...Tasks, res.data]);
        ClearInput();
    } catch (err) {
        console.log(err);
    }
};

const ClearInput =()=>
{
    setSingleTask('');
    setSingleDes('');
    
}


const handleCustomTask =(event)=>
{
    setSingleTask(event.target.value);
}

const handleCustomDes =(event)=>
{
    setSingleDes(event.target.value);
}



const handleInput =()=>
{
    setAdd(!add)
}


    return ( 
        <div className='main'>
            <div className='inputSection'>
               <Header handleInput={handleInput}  />
                {add===true ?
                    <>
                    <CustomInput  value={singleTask}  placeHolder='Enter Task' name='Task' change={handleCustomTask}  /> 
                    <CustomInput   value={singleDes} placeHolder='Enter Description' name='Description' change={handleCustomDes}  />
                    <div className='btnwrapper'>
                    <CustomButton color='White' bg='#1877F2'  name='Save Task' click={addToCard} />
                    <CustomButton color='White' bg='red'  name='Cancle'   click={ClearInput} />
                </div>
                    </>:null
                }
               
               
            </div>

            <div className='cardSection'>
               {
                Tasks.map((t)=>
                ( 
                    <Card title={t.task} des={t.des}   key={t.id} delete={()=>deleteTask(t.id)}  
                       update={()=>UpdateTask(t.id)}  complete={t.complete}  />
                ))
               }
               {
                }
            </div>
        </div>
     );
}

export default  App;