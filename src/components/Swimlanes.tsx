import {useContext} from "react";
import {TasksContext} from "../App.tsx";
import TaskItem from "./TaskItem.tsx";

export default  function Swimlanes() {
    const {allTasks} = useContext(TasksContext)
    return <main className="swimlane">
        <section>
            <h1>ToDo</h1>
            <ul>
                {
                    allTasks.filter(task => task.category == "TODO").map(task => <li key={task.id}>
                        <TaskItem task={task}/>
                    </li>)
                }
            </ul>

        </section>
        <section>
            <h1>InProgress</h1>
            {
                allTasks.filter(task => task.category == "INPROGRESS").map(task => <li key={task.id}>
                    <TaskItem task={task}/>
                </li>)
            }
        </section>
        <section>
            <h1>Done</h1>
            {
                allTasks.filter(task => task.category == "DONE").map(task => <li key={task.id}>
                    <TaskItem task={task}/>
                </li>)
            }
        </section>
    </main>
}