
import {doneItems, inprogressItems, toDoItems} from "../App.tsx";
import Board from "./Board.tsx";
import TaskItem from "./TaskItem.tsx";
import {useAtom} from "jotai";

export default  function Swimlanes() {

    const [todos] = useAtom(toDoItems)
    const [inprogress] = useAtom(inprogressItems)
    const [done] = useAtom(doneItems)

    return <main className="swimlane">
        <Board id="TODO">
            <div className="header">
                <h3 className="header-title">To Do</h3>
            </div>
            <ul className="tasks">
                {todos.map(task => <TaskItem task={{...task}}/>)}
            </ul>
        </Board>
        <Board id="INPROGRESS">
            <div className="header">
                <h3 className="header-title">In Progress</h3>
            </div>
            <ul className="tasks">
                    {inprogress.map(task => <TaskItem task={{...task}}/>)}
            </ul>
        </Board>
        <Board id="DONE">
            <div className="header">
                <h3 className="header-title">Done</h3>
            </div>
            <ul className="tasks">
                {done.map(task => <TaskItem task={{...task}}/>)}
            </ul>
        </Board>
    </main>
}