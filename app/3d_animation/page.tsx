import { Metadata } from "next";

import Intro from "../../src/components/intro";

export const metadata : Metadata = {
    title: "AJ's Portfolio: 3D Animation"
}

export default function Page() {
    return (
        <div>
            <Intro 
            title="3D Animation"
            desc=""/>
        </div>
    )
}