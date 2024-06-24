'use client'

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export function useSessionStorage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user?.email) {
      sessionStorage.setItem('userEmail', session.user.email);
    } else {
      const storedEmail = sessionStorage.getItem('userEmail');
      if (!storedEmail) {
        router.push('/login');
      }
    }
  }, [session, router]);
}