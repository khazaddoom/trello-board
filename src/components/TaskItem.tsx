import {useSetAtom} from "jotai";
import {Task, updateTaskAtom} from "../App.tsx";
import {useEffect, useRef} from "react";

type TaskItemProps = {
    task: Task
}

export default  function TaskItem({task}: TaskItemProps) {
    const setter = useSetAtom(updateTaskAtom)
    const taskItemRef = useRef<HTMLLIElement>(null)

    useEffect(() => {
        if(taskItemRef.current) {
            taskItemRef.current.addEventListener("dragstart", ev => {
                ev.stopPropagation()
                if(ev && ev.dataTransfer) {
                    ev.dataTransfer.dropEffect = "move"
                    ev.dataTransfer.setData("application/json", JSON.stringify(task))
                }
            })
        }
    },[taskItemRef])

    return <li className="taskItem" ref={taskItemRef} draggable onClick={() => {
        let category:Task["category"] = "TODO"
        if(task.category == "TODO") {
            category = "INPROGRESS"
        }
        else if(task.category == "INPROGRESS"){
            category = "DONE"
        }
        else {
            category = "TODO";
        }
        setter({...task, category: category})
    }}>
        <div className="texts">
            <h3 className="title">{task.task}</h3>
            <h3 className="subtitle">{task.task}</h3>
        </div>
        <div className="tag tag-low">LOW</div>
    </li>
}