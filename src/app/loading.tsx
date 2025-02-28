import {Spinner} from "@heroui/spinner";
import {SubheaderMono} from "@/components/text/headers";

export default function Loading() {
    return <div className="h-screen flex items-center align-middle justify-center">
        <div className="h-min w-min m-auto">
            <Spinner className={'m-auto text-center w-full'} />
            <SubheaderMono>Loading...</SubheaderMono>
        </div>
    </div>
}