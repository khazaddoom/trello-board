import {useSetAtom} from "jotai";
import {Task, updateTaskAtom} from "../App.tsx";

type TaskItemProps = {
    task: Task
}

export default  function TaskItem({task}: TaskItemProps) {
    const setter = useSetAtom(updateTaskAtom)
    return <div className="taskItem" onClick={() => {
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
    </div>
}