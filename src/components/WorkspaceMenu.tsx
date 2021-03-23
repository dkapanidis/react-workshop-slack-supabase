import { Add } from '@material-ui/icons'
import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import useMousetrap from '../hooks/mousetrap'

function WorkspaceMenu() {
  return (
    <div className="bg-gray-900 flex-none w-18 p-5 block">
      <WorkspaceButton title="Kubernetes" shortcut={1} />
      <WorkspaceButton title="Generic" shortcut={2} />
      <WorkspaceNewButton />
    </div>
  )
}

interface WorkspaceButtonProps { title: string, shortcut: number }
function WorkspaceButton({ title, shortcut }: WorkspaceButtonProps) {
  const history = useHistory()
  const onClick = () => history.push(`/workspace/${title.toLowerCase()}`)
  useMousetrap(`g ${shortcut}`, onClick);

  return (
    <div data-tip data-for={`${shortcut}`} className="cursor-pointer mb-5">
      <NavLink className="outline-none focus:ring-4 bg-gray-500 h-8 w-8 flex items-center justify-center text-black text-xl font-semibold rounded-lg mb-1 overflow-hidden hover:ring-4 ring-offset-4 ring-offset-gray-900 hover:ring-gray-700" activeClassName="ring-4 ring-gray-300" to={`/workspace/${title.toLowerCase()}`}>
        {title[0]}
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
  return (
    <div className="flex flex-auto cursor-pointer">
      <Add data-tip data-for="new-workspace" className="text-gray-400 hover:bg-gray-800 h-8 w-8 flex flex-grow items-center justify-center text-xl font-semibold rounded-lg mb-1 overflow-hidden outline-none" onClick={() => { }} />
      <ReactTooltip offset={{ right: 2 }} id="new-workspace" className="tooltip" place="right" effect="solid" delayShow={400} border={false} backgroundColor="transparent">
        <div className="bg-gray-800 p-1 border rounded-md border-gray-700 px-2 text-xl text-gray-300 font-light">Add Workspace</div>
      </ReactTooltip>
    </div>)
}

export default WorkspaceMenu
