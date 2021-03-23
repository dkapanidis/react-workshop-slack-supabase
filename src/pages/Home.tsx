
import React from 'react'
import { Route, Switch, useParams } from 'react-router'
import SideMenu from '../components/SideMenu'
import TopMenu from '../components/TopMenu'
import WorkspaceMenu from '../components/WorkspaceMenu'
import QueryParams from '../models/queryParams'
import Channel from './home/Channel'
import NotFound from './home/NotFound'

function Home() {
  let { title } = useParams<QueryParams>()
  return (
    <header className="font-sans antialiased bg-gray-800 text-gray-200 text-base h-full flex flex-col space-y-0.5">
      <TopMenu title={title} />
      <div className="flex flex-auto">
        <div className="flex flex-row space-x-0.5">
          <WorkspaceMenu />
          <SideMenu title={title} />
        </div>
        <Switch>
          <Route path="/workspace/:title/channel/:channel"><Channel /></Route>
          <Route path="/workspace/:title/"><NotFound /></Route>
        </Switch>
      </div>
    </header>
  )
}

export default Home
