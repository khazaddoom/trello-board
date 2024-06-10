import {atom, useAtom} from 'jotai'
import NewTask from "./components/NewTask.tsx";
import Swimlanes from "./components/Swimlanes.tsx";


type Task = {
    id: number;
    category: "TODO" | "INPROGRESS" | "DONE",
    task: string
}

export const allTasksAtom = atom<Task[]>([])

export const updateTaskAtom = atom(null, (get, set, task:Task) => {
    const restItems = get(allTasksAtom).filter(item => item.id != task.id)
    set(allTasksAtom, [...restItems, {...task}])
})

export const lastIndexAtom = atom((get) => {
    const all = get(allTasksAtom)
    return all.length
})

function App() {
  return (
    <>
        <NewTask />
        <Swimlanes />
    </>
  )
}

export default App
