import React, { useState } from 'react';
import { supabase } from './lib/Store';

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (type: string, username: string, password: string) => {
    try {
      const { error, user } =
        type === 'LOGIN'
          ? await supabase.auth.signIn({ email: username, password })
          : await supabase.auth.signUp({ email: username, password })
      // If the user doesn't exist here and an error hasn't been raised yet,
      // that must mean that a confirmation email has been sent.
      // NOTE: Confirming your email address is required by default.
      if (error) {
        alert('Error with auth: ' + error.message)
      }
      else if (!user) alert('Signup successful, confirmation mail should be sent soon!')
    } catch (error) {
      console.log('error', error)
      alert(error.error_description || error)
    }
  }

  const clickLogin = (e: any) => {
    e.preventDefault()
    handleLogin('LOGIN', username, password)
  }

  const clickSignup = (e: any) => {
    e.preventDefault()
    handleLogin('SIGNUP', username, password)
  }

  return (
    <form className="items-center flex flex-col w-full pt-12">
      <img alt="Slack" src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg" width="135" title="Slack"></img>
      <h1 className="font-bold tracking-tight text-5xl pt-10">Sign in to your workspace</h1>
      <h1 className="text-lg font-light pt-5">Enter your workspace's Slack URL</h1>
      <input autoFocus value={username} onChange={(e) => setUsername(e.target.value)} className="p-3 mt-5 w-96 border border-gray-400 rounded-md" placeholder="Your username" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="p-3 mt-5 w-96 border border-gray-400 rounded-md" placeholder="Your password" />
      <button
        className="p-2 mt-5 w-96 bg-indigo-900 rounded-md text-white font-bold text-lg"
        onClick={clickLogin}>Login</button>
      <button
        className="p-2 mt-5 w-96 bg-indigo-900 rounded-md text-white font-bold text-lg"
        onClick={clickSignup}>Signup</button>

      <div className="pt-6 w-96 justify-start text-xs space-x-1">
        <span className="font-light">Don't now your workspace URL?</span>
        <span className="text-blue-800">Find your workspaces</span>
      </div>
      <div className="pt-2 w-96 justify-start text-xs space-x-1">
        <span className="font-light">Looking to create a workspace instead?</span>
        <span className="text-blue-800">Create a new workspace</span>
      </div>
    </form>
  )
}

export default Login
