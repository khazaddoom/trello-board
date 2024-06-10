import {useContext} from "react";
import {TasksContext} from "../App.tsx";

export default  function TaskItem({task}) {
    const {advanceTask} = useContext(TasksContext)
    return <h3 onClick={() => {
        advanceTask(task.id)
    }}>{task.task}</h3>
}