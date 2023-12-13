import { Metadata } from "next";
import Intro from '../../src/components/intro';

export const metadata : Metadata = {
    title: "AJ's Portfolio: Video Editing"
}

export default function Page() {
    return (
        <div>
            <Intro 
            title="Video Editing"
            desc=""/>
        </div>
    )
}