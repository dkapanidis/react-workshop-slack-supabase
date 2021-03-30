
import React from 'react'
import { Route, Switch } from 'react-router'
import Chat from './components/Chat'
import SideMenu from './components/SideMenu'
import TopMenu from './components/TopMenu'

function Home() {
  return (
    <header className="font-sans antialiased bg-gray-800 text-gray-200 text-base h-screen flex flex-col space-y-0.5 overflow-hidden">
      <TopMenu />
      <div className="flex flex-auto overflow-hidden">
        <SideMenu />
        <Switch>
          <Route path="/channel/:channelID"><Chat /></Route>
        </Switch>
      </div>
    </header>
  )
}

export default Home
