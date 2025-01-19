import {Spinner} from "@nextui-org/react";
import {SubheaderMono} from "@/components/headers";

export default function Loading() {
    return <div className="h-screen flex items-center">
        <div className="h-min m-auto">
            <Spinner />
            <SubheaderMono>Loading...</SubheaderMono>
        </div>
    </div>
}