import { subtitle, title } from "@/components/text/primitives";
import classNames from "classnames";

export function Header1(
    {children, className,fullWidth,align}:
    {children?: React.ReactNode; 
        className?: string;
        fullWidth?: boolean, 
        align?: ('center' | 'right' | 'left' | 'justify' | 'start' | 'end' | undefined)}) {
    return (
        <div className={classNames(title({ 
            size:"lg", 
            fullWidth: ((fullWidth !== null && fullWidth !== undefined) ? fullWidth : true), 
            align:((align) ? (align) : "center") }), className)}>
            {children}
        </div>
    )
}

export function Header1Mono(
    {children, className,fullWidth,align}:
    {children?: React.ReactNode; 
        className?: string;
        fullWidth?: boolean, 
        align?: ('center' | 'right' | 'left' | 'justify' | 'start' | 'end' | undefined)}) {
    return (
        <div className={classNames(title({ 
            font:"mono", 
            size:"lg", 
            fullWidth: ((fullWidth !== null && fullWidth !== undefined) ? fullWidth : true), 
            align:((align) ? (align) : "center") }), 
            className)}>
                {children}
        </div>
    )
}

export function Header2(
    {children, className,fullWidth,align}:
    {children?: React.ReactNode; 
        className?: string;
        fullWidth?: boolean, 
        align?: ('center' | 'right' | 'left' | 'justify' | 'start' | 'end' | undefined)}) {
    return (
        <div className={classNames(title({ 
            size:"md", 
            fullWidth: ((fullWidth !== null && fullWidth !== undefined) ? fullWidth : true), 
            align:((align) ? (align) : "center") }), 
            className)}>
                {children}
        </div>
    )
}

export function Header2Mono(
    {children, className,fullWidth,align}:
    {children?: React.ReactNode; 
        className?: string; 
        fullWidth?: boolean, 
        align?: ('center' | 'right' | 'left' | 'justify' | 'start' | 'end' | undefined)}) {
    return (
        <div className={classNames(title({ 
            font:"mono", 
            size:"md", 
            fullWidth: ((fullWidth !== null && fullWidth !== undefined) ? fullWidth : true), 
            align:((align) ? (align) : "center")}), 
            className)}>
                {children}
        </div>
    )
}

export function Header3(
    {children, className,fullWidth,align}:
    {children?: React.ReactNode; 
        className?: string; 
        fullWidth?: boolean, 
        align?: ('center' | 'right' | 'left' | 'justify' | 'start' | 'end' | undefined)}) {
    return (
        <div className={classNames(title({ 
            size:"sm", 
            fullWidth: ((fullWidth !== null && fullWidth !== undefined) ? fullWidth : true), 
            align:((align) ? (align) : "center")}), 
            className)}>
                {children}
        </div>
    )
}

export function Header3Mono(
    {children, className,fullWidth,align}:
    {children?: React.ReactNode; 
        className?: string; 
        fullWidth?: boolean, 
        align?: ('center' | 'right' | 'left' | 'justify' | 'start' | 'end' | undefined)}) {
    return (
        <div className={classNames(title({ 
            font:"mono", 
            size:"sm", 
            fullWidth: ((fullWidth !== null && fullWidth !== undefined) ? fullWidth : true), 
            align:((align) ? (align) : "center")}),
            className)}>
                {children}
        </div>
    )
}

export function Subheader(
    {children, className, align}:
    {children?: React.ReactNode; 
        className?: string;
        align?: ('center' | 'right' | 'left' | 'justify' | 'start' | 'end' | undefined)}) {
    return (
        <div className={classNames(subtitle({ 
            align:((align) ? (align) : "center") }), 
            className)}>
                {children}
        </div>
    )
}

export function SubheaderMono(
    {children, className, align}:
    {children?: React.ReactNode; 
        className?: string;
        fullWidth?: boolean, 
        align?: ('center' | 'right' | 'left' | 'justify' | 'start' | 'end' | undefined)}) {
    return (
        <div className={classNames(subtitle({ 
            font:"mono", 
            align:((align) ? (align) : "center") }), 
            className)}>
                {children}
        </div>
    )
}