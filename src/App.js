import {useState} from 'react'
import Header from './Header'
import Tasks from './Tasks'
import AddTask from './AddTask'
function App() {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState([
    {id :1, 
     text :'istanbul',
     reminder :true,
     day:'september sunday 12'
    },
    {id :2, 
     text :'esses',
     reminder :true,
     day:'september sunday 12'
    },
    {id :3, 
    text :'umut',
    reminder :false,
    day:'september sunday 12'
    }
])
  // Add Tasks 
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1 
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  
  }
  // Delete Task 

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  // Toggle Reminder
  const toggleReminder = (id) => {
   setTasks(tasks.map((task) => task.id === id ? { ...task, reminder : !task.reminder} : task))
  }

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask}/>}
    { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : <p style={{color: 'red'}}>no todo Yesss..</p>}
    </div>
  )
}
export default App