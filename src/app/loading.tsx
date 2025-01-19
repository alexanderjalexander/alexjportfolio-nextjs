import {Spinner} from "@heroui/react";
import {SubheaderMono} from "@/components/headers";

export default function Loading() {
    return <div className="h-screen flex items-center">
        <div className="h-min m-auto">
            <Spinner className={'m-auto text-center'} />
            <SubheaderMono>Loading...</SubheaderMono>
        </div>
    </div>
}