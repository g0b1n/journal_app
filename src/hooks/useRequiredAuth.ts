import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// custome hook for auth required
export function useRequiredAuth() {
    const { data: session, status } = useSession();
    const router = useRouter()

    // redirect to login if not authenticated
    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/auth/signin")
        }
    }, [status, router]);

    if (status === "loading") {
        return { loading: true, session: null };
    }

    return { loading: false, session };
}