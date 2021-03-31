import { Session, User } from '@supabase/gotrue-js';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './App.css';
import Home from './Home';
import { supabase } from './lib/Store';
import UserContext from './lib/UserContext';
import Login from './Login';

function App() {
  const [userLoaded, setUserLoaded] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [, setSession] = useState<Session | null>(null);
  const history = useHistory()

  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session);
    setUser(session?.user ?? null);
    setUserLoaded(session ? true : false)
    if (user) {
      signIn(user.id, user.email)
      history.push('/channel/1')
    }

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        const currentUser = session?.user
        setUser(currentUser ?? null);
        setUserLoaded(!!currentUser)
        if (currentUser) {
          signIn(currentUser.id, currentUser.email)
          history.push('/channel/1')
        }
      }
    )

    return () => {
      authListener?.unsubscribe()
    }
  }, [history, user])

  const signIn = async (id: string, username?: string) => {
    const { body } = await supabase.from('users').select('id, username').eq('id', id)
    const result = body![0]

    // If the user exists in the users table, update the username.
    // If not, create a new row.
    result?.id
      ? await supabase.from('users').update({ id, username }).match({ id }).single()
      : await supabase.from('users').insert([{ id, username }]).single()
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    history.push('/')
  }

  return (
    <UserContext.Provider
      value={{
        userLoaded,
        user,
        signIn,
        signOut
      }}
    >
      {!user ? (
        <Login />
      ) : (
        <Home />
      )}
    </UserContext.Provider>
  );
}

export default App;
