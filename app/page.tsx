import { Metadata } from "next";
import Intro from '../src/components/intro';

export const metadata : Metadata = {
    title: "AJ's Portfolio"
}

export default function Page() {
    return (
        <div>
            <Intro 
            title="ALEXANDER JANSIEWICZ"
            desc="An interactive portfolio of technical expertise in programming, video, motion, animation, and more."/>
        </div>
    )
}