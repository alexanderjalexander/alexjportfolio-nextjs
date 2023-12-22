import { subtitle, title } from "@/components/primitives";

export function Header1({text}:{text:string}) {
    return (
        <h1 className={title({ size:"lg", fullWidth: true, align:"center" })}>{text}</h1>
    )
}

export function Header2({text}:{text:string}) {
    return (
        <h2 className={title({ size:"md", fullWidth: true, align:"center" })}>{text}</h2>
    )
}

export function Header3({text}:{text:string}) {
    return (
        <h3 className={title({ size:"sm", fullWidth: true, align:"center" })}>{text}</h3>
    )
}

export function Subheader({text}:{text:string}) {
    return (
        <p className={subtitle({ align:"center" })}>{text}</p>
    )
}