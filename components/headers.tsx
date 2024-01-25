import { subtitle, title } from "@/components/primitives";
import classNames from "classnames";

export function Header1({children, className,}:{children: React.ReactNode; className?: string;}) {
    return (
        <div className={classNames(title({ size:"lg", fullWidth: true, align:"center" }), className)}>
            {children}
        </div>
    )
}

export function Header1Mono({children, className,}:{children: React.ReactNode; className?: string;}) {
    return (
        <div className={classNames(title({ font:"mono", size:"lg", fullWidth: true, align:"center" }), className)}>
            {children}
        </div>
    )
}

export function Header2({children, className,}:{children: React.ReactNode; className?: string;}) {
    return (
        <div className={classNames(title({ size:"md", fullWidth: true, align:"center" }), className)}>
            {children}
        </div>
    )
}

export function Header2Mono({children, className,}:{children: React.ReactNode; className?: string;}) {
    return (
        <div className={classNames(title({ font:"mono", size:"md", fullWidth: true, align:"center" }), className)}>
            {children}
        </div>
    )
}

export function Header3({children, className,}:{children: React.ReactNode; className?: string;}) {
    return (
        <div className={classNames(title({ size:"sm", fullWidth: true, align:"center" }), className)}>
            {children}
        </div>
    )
}

export function Header3Mono({children, className,}:{children: React.ReactNode; className?: string;}) {
    return (
        <div className={classNames(title({ font:"mono", size:"sm", fullWidth: true, align:"center" }), className)}>
            {children}
        </div>
    )
}

export function Subheader({children, className,}:{children: React.ReactNode; className?: string;}) {
    return (
        <div className={classNames(subtitle({ align:"center" }), className)}>
            {children}
        </div>
    )
}

export function SubheaderMono({children, className,}:{children: React.ReactNode; className?: string;}) {
    return (
        <div className={classNames(subtitle({ font:"mono", align:"center" }), className)}>
            {children}
        </div>
    )
}