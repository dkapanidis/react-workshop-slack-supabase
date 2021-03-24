
import React, { useEffect, useState } from 'react'
import { Route, Switch, useParams } from 'react-router'
import SideMenu from '../components/SideMenu'
import TopMenu from '../components/TopMenu'
import WorkspaceMenu from '../components/WorkspaceMenu'
import db from '../firebase'
import QueryParams from '../models/queryParams'
import { useStateValue } from '../StateProvider'
import ChannelScreen from './home/ChannelScreen'
import NotFound from './home/NotFound'

function Home() {
  let { workspaceID } = useParams<QueryParams>()
  const [{ user }] = useStateValue() as any;
  const [workspace, setWorkspace] = useState<any>([]);
  useEffect(() => {
    db.collection('workspaces')
      .onSnapshot(snapshot => (
        snapshot.docs.forEach((doc) => {
          if (doc.id === workspaceID) {
            setWorkspace({
              id: doc.id,
              ...doc.data()
            })
          }
        }))
      )
  }, [workspaceID, user.uid])

  return (
    <header className="font-sans antialiased bg-gray-800 text-gray-200 text-base h-screen flex flex-col space-y-0.5 overflow-hidden">
      <TopMenu title={workspace.name} />
      <div className="flex flex-auto overflow-hidden">
        <div className="flex flex-row space-x-0.5">
          <WorkspaceMenu />
          <SideMenu title={workspace.name} />
        </div>
        <Switch>
          <Route path="/workspace/:workspaceID/channel/:channelID"><ChannelScreen /></Route>
          <Route path="/workspace/:workspaceID/"><NotFound /></Route>
        </Switch>
      </div>
    </header>
  )
}

export default Home
