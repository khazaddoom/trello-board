import {useSetAtom} from "jotai";
import {updateTaskAtom} from "../App.tsx";

export default  function TaskItem({task}) {
    const setter = useSetAtom(updateTaskAtom)
    return <h3 onClick={() => {
        let category = "TODO"
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