import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Dashboard',
}

export default function Dashboard() {
    return (
    <div className="py-16">
        <p>You are logged into the dashboard.</p>
    </div>
    )
}