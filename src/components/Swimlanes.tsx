
import {allTasksAtom, toDoItems} from "../App.tsx";
import TaskItem from "./TaskItem.tsx";
import {useAtom} from "jotai";
import {atom} from "jotai/index";

const inprogressItems = atom((get) => get(allTasksAtom).filter(item => item.category == "INPROGRESS"));
const doneItems = atom((get) => get(allTasksAtom).filter(item => item.category == "DONE"));
export const toDoItems = atom(
    (get) => get(allTasksAtom).filter(item => item.category == "TODO"),
    (get, set, newItem:Task) => {
        const allItems = get(allTasksAtom)
        set(allTasksAtom, [...allItems, newItem])
    }
);

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