import { subtitle, title } from "@/components/primitives";

export function Header1({children}:{children: React.ReactNode;}) {
    return (
        <div className={title({ size:"lg", fullWidth: true, align:"center" })}>
            {children}
        </div>
    )
}

export function Header1Mono({children}:{children: React.ReactNode;}) {
    return (
        <div className={title({ font:"mono", size:"lg", fullWidth: true, align:"center" })}>
            {children}
        </div>
    )
}

export function Header2({children}:{children: React.ReactNode;}) {
    return (
        <div className={title({ size:"md", fullWidth: true, align:"center" })}>
            {children}
        </div>
    )
}

export function Header2Mono({children}:{children: React.ReactNode;}) {
    return (
        <div className={title({ font:"mono", size:"md", fullWidth: true, align:"center" })}>
            {children}
        </div>
    )
}

export function Header3({children}:{children: React.ReactNode;}) {
    return (
        <div className={title({ size:"sm", fullWidth: true, align:"center" })}>
            {children}
        </div>
    )
}

export function Header3Mono({children}:{children: React.ReactNode;}) {
    return (
        <div className={title({ font:"mono", size:"sm", fullWidth: true, align:"center" })}>
            {children}
        </div>
    )
}

export function Subheader({children}:{children: React.ReactNode;}) {
    return (
        <div className={subtitle({ align:"center" })}>
            {children}
        </div>
    )
}

export function SubheaderMono({children}:{children: React.ReactNode;}) {
    return (
        <div className={subtitle({ font:"mono", align:"center" })}>
            {children}
        </div>
    )
}