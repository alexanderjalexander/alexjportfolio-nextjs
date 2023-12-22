import { Header1Mono, Header3 } from '@/components/headers'
import { Button } from '@nextui-org/button'

export default function notFound() {
    return (
        <div>
            <Header1Mono text="404" />
            <p className="text-center">We couldn&apos;t find the page you requested.</p>
            
        </div>
    );
}