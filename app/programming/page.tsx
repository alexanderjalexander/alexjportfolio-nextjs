import { Metadata } from "next";
import Intro from '../../src/components/intro';

export const metadata : Metadata = {
    title: "AJ's Portfolio: Programming"
}

export default function Page() {
    return (
        <div>
            <Intro 
            title="Programming"
            desc=""/>
        </div>
    )
}