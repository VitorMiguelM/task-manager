import { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './Components/TaskForm';
import TasksList from './Components/TasksList';

  let initialState = [
  
    {
      id: 1,
      priority: '1',
      title: "First",
      description: "First Task",
    },
    {
      id: 2,
      priority: '3',
      title: "Second",
      description: "Second Task"
    },

  ];

function App() {
  
  const [index, setIndex] = useState(0);
  const [tasks, setTasks] = useState(initialState)
  const [task, setTask] = useState({id: 0});

  useEffect(() => {
    tasks.length <= 0 ? setIndex(1) : setIndex(Math.max.apply(Math, tasks.map(task => task.id)) +1);
  }, [tasks])

  function addTask(task) {
    setTasks([ ...tasks, { ...task, id: index }]);
  }

  function deleteTask(id){
    const filteredTasks = tasks.filter(task => task.id !== id);

    setTasks([...filteredTasks]);
  }

  function cancelTask() {
    setTask({id: 0});
  }

  function updateTask (task){
    setTasks(tasks.map(item => item.id === task.id ? task : item));
    setTask({id: 0}); 
  }

  function selectTask(id){
    const selectedTask = tasks.filter(task => task.id === id);

    setTask(selectedTask[0]);
  }

  return (
    <>
      <TaskForm
        tasks={tasks}
        addTask={addTask}
        updateTask={updateTask}
        cancelTask={cancelTask}
        selectedTask={task}
      />

      <TasksList
        tasks={tasks}
        deleteTask={deleteTask}
        selectTask={selectTask}
      />
    </>
  );
}

export default App;