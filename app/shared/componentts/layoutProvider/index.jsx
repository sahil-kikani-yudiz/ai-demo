'use client'
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { useSessionStorage } from '../../hooks/useSessionstorage'
import Header from '../header'

function LayoutProvider({children}) {
  function RootLayoutInner({ children }) {
    useSessionStorage()
    return <>{children}</>
  }
  return (
    <SessionProvider>
      <RootLayoutInner>
        <Header/>
        {children}
        </RootLayoutInner>
    </SessionProvider>
  )
}

export default LayoutProvider
