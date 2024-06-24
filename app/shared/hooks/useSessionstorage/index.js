'use client'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../../../firebase'

export function useSessionStorage() {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session?.user?.email) {
      sessionStorage.setItem('userEmail', session.user.email)
      const userDoc = doc(db, 'users', session.user.email)
      setDoc(userDoc, {
        email: session.user.email,
        name: session.user.name,
        image: session.user.image
      })
    } else {
      const storedEmail = sessionStorage.getItem('userEmail')
      if (!storedEmail) {
        router.push('/login')
      }
    }
  }, [session, router])
}
