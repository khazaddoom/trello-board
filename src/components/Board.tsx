import { PropsWithChildren } from "react"

type BoardProps = PropsWithChildren & {}

export default function Board({children}: BoardProps) {
    return <section className="column">
        {children}
    </section>
}