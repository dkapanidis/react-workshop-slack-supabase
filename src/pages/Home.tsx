import React from 'react'
import { useParams } from 'react-router'
import SideMenu from '../components/SideMenu'
import TopMenu from '../components/TopMenu'
import WorkspaceMenu from '../components/WorkspaceMenu'
import QueryParams from '../models/queryParams'

function Home() {
  let { title } = useParams<QueryParams>()
  return (
    <header className="font-sans antialiased bg-gray-800 text-gray-200 text-base h-full flex flex-col space-y-0.5">
      <TopMenu title={title} />
      <div className="flex flex-1 space-x-0.5">
        <WorkspaceMenu />
        <SideMenu title={title} />
      </div>
    </header>
  )
}

export default Home
