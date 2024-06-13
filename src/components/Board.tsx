import { PropsWithChildren } from "react"
import {useSetAtom} from "jotai/index";
import {Task, updateTaskAtom} from "../App.tsx";

type BoardProps = PropsWithChildren & {
    id: string
}

export default function Board({children, id}: BoardProps) {
    const setter = useSetAtom(updateTaskAtom)
    const dropHandler = ev => {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move";
        const taskDropped = JSON.parse(ev.dataTransfer.getData("application/json"))
        if(ev.target.id) {
            console.log(ev.target.id)
            setter({...taskDropped, category: ev.target.id})
        }
        return
    }
    const dragoverHandler = ev => {
        ev.preventDefault();
        console.log(ev)
    }
    return <section id={id} className="column" onDrop={event => dropHandler(event)} onDragOver={event => dragoverHandler(event)}>
        {children}
    </section>
}