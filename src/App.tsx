import NewTask from "./components/NewTask.tsx";
import {createContext, PropsWithChildren, useEffect, useState} from "react";
import Swimlanes from "./components/Swimlanes.tsx";

export const TasksContext = createContext<{
    allTasks: Task[],
    getTasks?: (category?: string) => Task[],
    addTask?: (task: string) => void,
    advanceTask: (taskId: number) => void
}>({
    allTasks: [],
    getTasks: () => [],
    addTask: () => {},
    advanceTask: () => {}
})

type Task = {
    id: number;
    category: "TODO" | "INPROGRESS" | "DONE",
    task: string
}

let taskIndex = 1;

function TasksWrapper({children}: PropsWithChildren) {

    const [allTasks, updateTasks] = useState<Task[]>([])

    useEffect(() => {
        console.log(allTasks)
    }, [allTasks])

    const getTasks = (category?: string) => {
        if(category)
            return allTasks.filter(task => task.category == category);
        else
            return allTasks;
    }

    const addTask = (task: string) => {
        updateTasks(prevTasks => ([...prevTasks, {
            id: taskIndex++,
            category: "TODO",
            task
        }]))
    }

    const advanceTask = (taskId: number) => {
        console.log(taskId)
        const oldTask = allTasks.find(task => task.id == taskId)
        console.log(oldTask)
        if(oldTask) {
            let category:Task["category"] = "TODO"
            if(oldTask.category == "TODO") {
                category = "INPROGRESS"
            }
            else if(oldTask.category == "INPROGRESS"){
                category = "DONE"
            }
            else {
                category = "TODO";
            }

            updateTasks((prevState) => {
                prevState = prevState.filter(task => task.id != taskId)
                return [...prevState, {...oldTask, category}]
            })
        }
    }


    return <TasksContext.Provider value={{
        allTasks,
        getTasks,
        addTask,
        advanceTask
    }}>
        {children}
    </TasksContext.Provider>
}

function App() {
  return (
    <TasksWrapper>
        <NewTask />
        <Swimlanes />
    </TasksWrapper>
  )
}

export default App
