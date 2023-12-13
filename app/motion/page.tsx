import { Metadata } from "next";
import Intro from '../../src/components/intro';

export const metadata : Metadata = {
    title: "AJ's Portfolio: Motion"
}

export default function Page() {
    return (
        <div>
            <Intro 
            title="Motion"
            desc=""/>
        </div>
    )
}