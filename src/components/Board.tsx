import TaskItem from "./TaskItem";

export default function Board({children}) {
    return <section className="column">
        {children}
    </section>
}