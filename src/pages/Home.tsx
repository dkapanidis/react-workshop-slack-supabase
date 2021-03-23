import React from 'react'
import SideMenu from '../components/SideMenu'
import TopMenu from '../components/TopMenu'
import WorkspaceMenu from '../components/WorkspaceMenu'

function Home() {
  return (
    <header className="App-header bg-gray-700 h-full flex flex-col space-y-0.5">
      <TopMenu />
      <div className="font-sans antialiased flex-1 flex space-x-0.5">
        <WorkspaceMenu />
        <SideMenu title={"Generic"} />
      </div>
    </header>
  )
}

export default Home
