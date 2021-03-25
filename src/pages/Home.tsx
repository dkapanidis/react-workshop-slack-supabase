
import React from 'react'
import { Route, Switch } from 'react-router'
import SideMenu from '../components/SideMenu'
import TopMenu from '../components/TopMenu'
import Chat from './home/Chat'
import NotFound from './home/NotFound'

function Home() {
  return (
    <header className="font-sans antialiased bg-gray-800 text-gray-200 text-base h-screen flex flex-col space-y-0.5 overflow-hidden">
      <TopMenu />
      <div className="flex flex-auto overflow-hidden">
        <div className="flex flex-row space-x-0.5">
          <SideMenu />
        </div>
        <Switch>
          <Route path="/channel/:channelID"><Chat /></Route>
          <Route path="/"><NotFound /></Route>
        </Switch>
      </div>
    </header>
  )
}

export default Home
