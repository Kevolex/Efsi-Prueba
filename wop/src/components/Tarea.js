import React, { useState, useEffect } from 'react';

const Tarea = () => {
    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState(() => {
      const savedTasks = JSON.parse(localStorage.getItem('tasks'));
      return savedTasks || [];
    });
    const [taskCount, setTaskCount] = useState(() => {
      const savedTaskCount = JSON.parse(localStorage.getItem('taskCount'));
      return savedTaskCount || 0;
    });
  
    useEffect(() => {
      document.title = `Tareas Pendientes: ${tasks.length}`;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
  
    useEffect(() => {
      localStorage.setItem('taskCount', JSON.stringify(taskCount));
    }, [taskCount]);
  

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = { task: inputValue, completed: false };
      setTasks([...tasks, newTask]);
      setTaskCount(taskCount + 1);
      setInputValue('');
    }
  };

  const handleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Tareas Pendientes: {taskCount}</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Agregar Tarea</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleTaskCompletion(index)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.task}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tarea;
