'use client'
import { signIn } from "next-auth/react"

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => signIn("google", { callbackUrl: "/" })}>
        Sign in with Google
      </button>
      <button onClick={() => signIn("github", { callbackUrl: "/" })}>
        Sign in with Github
      </button>
    </div>
  )
}