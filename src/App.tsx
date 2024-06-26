import {atom, useAtom} from 'jotai'
import NewTask from "./components/NewTask.tsx";
import Swimlanes from "./components/Swimlanes.tsx";
import {useEffect} from "react";


export type Task = {
    id: number;
    category: "TODO" | "INPROGRESS" | "DONE",
    task: string
}

export const allTasksAtom = atom<Task[]>([{
    id: 1,
    category: "INPROGRESS",
    task: "Write Code"
}])

export const inprogressItems = atom((get) => get(allTasksAtom).filter(item => item.category == "INPROGRESS"));
export const doneItems = atom((get) => get(allTasksAtom).filter(item => item.category == "DONE"));
export const toDoItems = atom(
    (get) => get(allTasksAtom).filter(item => item.category == "TODO"),
    (get, set, newItem:Task) => {
        const allItems = get(allTasksAtom)
        set(allTasksAtom, [...allItems, newItem])
    }
);

export const updateTaskAtom = atom(null, (get, set, task:Task) => {
    const restItems = get(allTasksAtom).filter(item => item.id != task.id)
    set(allTasksAtom, [...restItems, {...task}])
})

export const lastIndexAtom = atom((get) => {
    const all = get(allTasksAtom)
    return all.length
})

function App() {
    const allTasks = useAtom(allTasksAtom)
    console.log(allTasks)
  return (
    <>
        <NewTask />
        <Swimlanes />
    </>
  )
}

export default App
