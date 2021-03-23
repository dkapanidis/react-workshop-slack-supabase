import React from 'react'
import SideMenu from '../components/SideMenu'
import TopMenu from '../components/TopMenu'
import WorkspaceMenu from '../components/WorkspaceMenu'

function Home() {
  return (
    <header className="font-sans antialiased bg-gray-800 text-gray-200 text-base h-full flex flex-col space-y-0.5">
      <TopMenu />
      <div className="flex flex-1 space-x-0.5">
        <WorkspaceMenu />
        <SideMenu title={"Generic"} />
      </div>
    </header>
  )
}

export default Home
