import { Header1Mono, Header3 } from '@/components/headers'
import { Button } from '@nextui-org/button'

export default function notFound() {
    return (
        <div>
            <Header1Mono className="pt-32">404</Header1Mono>
            <p className="text-center">We couldn&apos;t find the page you requested.</p>
            
        </div>
    );
}