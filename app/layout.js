'use client'
import { SessionProvider } from 'next-auth/react'
import { useSessionStorage } from './shared/hooks/useSessionstorage'

export default function RootLayout({ children }) {
  function RootLayoutInner({ children }) {
    useSessionStorage();
    return <>{children}</>;
  }

  return (
    <html>
      <body>
        <SessionProvider>
          <RootLayoutInner>{children}</RootLayoutInner>
        </SessionProvider>
      </body>
    </html>
  )
}
