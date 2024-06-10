import {useState} from "react";
import {useAtom} from "jotai";
import {lastIndexAtom} from "../App.tsx";
import {toDoItems} from "./Swimlanes.tsx";

export default  function NewTask() {
    const [task, setTask] = useState("")
    const [_, setToDoAtom] = useAtom(toDoItems)
    const [lastIndex] = useAtom(lastIndexAtom)

    return <form onSubmit={e => {
        e.preventDefault()
        if(!task) return
        // update global state
        setToDoAtom({
            id: lastIndex,
            category: "TODO",
            task
        })
        setTask("")
    }}>
        <input type="text" name="newtask" id="newTaskId" value={task} onChange={e => setTask(e.target.value)}/>
        <input type="submit" value="Add Task" />
    </form>
}