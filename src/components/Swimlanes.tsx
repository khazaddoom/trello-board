
import {doneItems, inprogressItems, toDoItems} from "../App.tsx";
import TaskItem from "./TaskItem.tsx";
import {useAtom} from "jotai";

export default  function Swimlanes() {

    const [todos] = useAtom(toDoItems)
    const [inprogress] = useAtom(inprogressItems)
    const [done] = useAtom(doneItems)

    return <main className="swimlane">
        <section>
            <h1>ToDo</h1>
            <ul>
                {
                    todos.map(task => <li key={task.id}>
                        <TaskItem task={task}/>
                    </li>)
                }
            </ul>

        </section>
        <section>
            <h1>InProgress</h1>
            {
                inprogress.map(task => <li key={task.id}>
                    <TaskItem task={task}/>
                </li>)
            }
        </section>
        <section>
            <h1>Done</h1>
            {
                done.map(task => <li key={task.id}>
                    <TaskItem task={task}/>
                </li>)
            }
        </section>
    </main>
}