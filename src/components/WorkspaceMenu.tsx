import { Add } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import db from '../firebase'
import useMousetrap from '../hooks/mousetrap'
import { useStateValue } from '../StateProvider'

function WorkspaceMenu() {
  const [{ user }] = useStateValue() as any;
  const [workspaces, setWorkspaces] = useState<any>([]);
  useEffect(() => {
    db.collection('workspaces')
      .where(`roles.${user.uid}`, "==", "owner").onSnapshot(snapshot => (
        setWorkspaces(snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })))
      )
      )
  }, [user.uid])

  return (
    <div className="bg-gray-900 flex-none w-18 p-5 block overflow-scroll">
      {workspaces.map((workspace: any, index: number) => (
        <WorkspaceButton key={workspace.id} title={workspace.name} workspaceID={workspace.id} shortcut={index + 1} />
      ))}
      <WorkspaceNewButton />
    </div>
  )
}

interface WorkspaceButtonProps { title: string, workspaceID: string, shortcut: number }
function WorkspaceButton({ title, workspaceID, shortcut }: WorkspaceButtonProps) {
  const history = useHistory()
  const onClick = () => history.push(`/workspace/${workspaceID}`)
  useMousetrap(`g ${shortcut}`, onClick);

  return (
    <div data-tip data-for={`${shortcut}`} className="cursor-pointer mb-5">
      <NavLink className="outline-none focus:ring-4 bg-gray-500 h-8 w-8 flex items-center justify-center text-black text-xl font-semibold rounded-lg mb-1 overflow-hidden hover:ring-4 ring-offset-4 ring-offset-gray-900 hover:ring-gray-700" activeClassName="ring-4 ring-gray-300" to={`/workspace/${workspaceID}`}>
        {title[0].toUpperCase()}
      </NavLink>
      <ReactTooltip offset={{ right: 2 }} id={`${shortcut}`} className="tooltip" place="right" effect="solid" delayShow={400} border={false} backgroundColor="transparent">
        <div className="bg-gray-800 p-1 border rounded-md border-gray-700 px-2 text-xl text-gray-300 font-light">
          {title}&nbsp;&nbsp;&nbsp;
          <span className="text-gray-200 text-lg font-extralight"> <code className="bg-gray-700 inset-0 px-1 rounded-md ">G</code> <code className="bg-gray-700 inset-0 px-1 rounded-md">{shortcut}</code></span>
        </div>
      </ReactTooltip>
    </div>
  )
}

function WorkspaceNewButton() {
  const [{ user }] = useStateValue() as any;
  const history = useHistory()
  const addWorkspace = () => {
    const workspaceName = prompt("Please enter the workspace name")
    if (workspaceName) {
      db.collection("workspaces").add({
        name: workspaceName,
        roles: {
          [user.uid]: 'owner',
        }
      }).then((res) => {
        history.push(`/workspace/${res.id}`)
      })
    }
  }

  return (
    <div className="flex flex-auto cursor-pointer" onClick={addWorkspace}>
      <Add data-tip data-for="new-workspace" className="text-gray-400 hover:bg-gray-800 h-8 w-8 flex flex-grow items-center justify-center text-xl font-semibold rounded-lg mb-1 overflow-hidden outline-none" onClick={() => { }} />
      <ReactTooltip offset={{ right: 2 }} id="new-workspace" className="tooltip" place="right" effect="solid" delayShow={400} border={false} backgroundColor="transparent">
        <div className="bg-gray-800 p-1 border rounded-md border-gray-700 px-2 text-xl text-gray-300 font-light">Add Workspace</div>
      </ReactTooltip>
    </div>)
}

export default WorkspaceMenu
