import {useContext, useState} from "react";
import {TasksContext} from "../App.tsx";

export default  function NewTask() {
    const [task, setTask] = useState("")
    const {addTask} = useContext(TasksContext)
    return <form onSubmit={e => {
        e.preventDefault()
        if(!task) return
        // update global state
        addTask(task)
        setTask("")
    }}>
        <input type="text" name="newtask" id="newTaskId" value={task} onChange={e => setTask(e.target.value)}/>
        <input type="submit" value="Add Task" />
    </form>
}