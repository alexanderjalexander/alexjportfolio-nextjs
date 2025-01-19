import {ReactNode} from "react";
import {AuthContextProvider} from "@/components/AuthContext";
import {NavbarDashboard} from "@/components/navbar_dashboard";

export const dynamic = "force-dynamic";

/**
 * Keeps track of whether a user session has been created, and detects user changes.
 *
 * See: <https://github.com/firebase/friendlyeats-web/tree/master/nextjs-end>
 *
 * @param {Readonly<children:ReactNode>} children
 */
export default async function Layout({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <AuthContextProvider>
            <NavbarDashboard />
            <main className="container mx-auto max-w-7xl px-6 flex-grow">
                {children}
            </main>
        </AuthContextProvider>
    );
}
