import React from 'react'
import WorkspaceNewButton from './WorkspaceNewButton'
import WorkspaceButton from './WorkspaceButton'

function WorkspaceMenu() {
  return (
    <div className="bg-gray-900 flex-none w-18 p-5 block">
    <WorkspaceButton title="Kubernetes" shortcut={1} />
    <WorkspaceButton title="Generic" shortcut={2} />
    <WorkspaceNewButton />
  </div>
  )
}

export default WorkspaceMenu
