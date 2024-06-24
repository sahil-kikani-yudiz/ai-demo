'use client'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'

function HomePage() {
    const {data : session} = useSession()
     console.log('session', session)
    useEffect(() => {
        if(session?.user){
            sessionStorage.setItem('userId', session.user.email)
        }
    }, [session])

  return (
    <div>HomePage</div>
  )
}

export default HomePage