import {useSetAtom} from "jotai";
import {Task, updateTaskAtom} from "../App.tsx";

type TaskItemProps = {
    task: Task
}

export default  function TaskItem({task}: TaskItemProps) {
    const setter = useSetAtom(updateTaskAtom)
    return <h3 onClick={() => {
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
    }}>{task.task}</h3>
}