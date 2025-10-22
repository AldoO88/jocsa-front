import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/context/auth.context';

export function useProtectedRoute() {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
    if (!isLoading && !user) {
        router.replace('/auth/login');
        }
    }, [user, isLoading, router]);
}