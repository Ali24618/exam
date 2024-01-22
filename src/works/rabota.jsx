import { useState } from "react";

const U = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const removeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const toggleTaskCompletion = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    const pendingTasksCount = tasks.filter(task => !task.completed).length;
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <div className="row">
                            <div className="col-12 text-center bg-dark text-light text mt-5 p-5">
                                <h2><b>Pending Tasks {pendingTasksCount}</b></h2>
                                    {tasks.map((task, index) => (
                                        <p key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                            {task.text}
                                            <button className="btn btn-outline-danger ml-2" onClick={() => removeTask(index)}><i class="fa-solid fa-trash"></i></button>
                                            <button className="btn btn-outline-danger" onClick={() => toggleTaskCompletion(index)}>
                                                {task.completed ? 'Undo' : 'Complete'}
                                            </button>
                                        </p>
                                    ))}
                                <div className="row">
                                    <div className="col-10">
                                        <input onChange={(e) => setNewTask(e.target.value)} placeholder="Textttt" type="text" className="form-control mt-3" />
                                    </div>
                                    <div className="col-2">
                                        <button className="btn btn-outline-primary mt-3" onClick={addTask}><i class="fa-solid fa-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default U;