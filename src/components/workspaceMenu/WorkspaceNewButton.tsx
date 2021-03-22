import React from 'react'
import ReactTooltip from 'react-tooltip'

function WorkspaceNewButton() {
  return (
    <div className="cursor-pointer">
      <div data-tip data-for="new-workspace" className="text-gray-400 hover:bg-gray-800 h-8 w-8 flex items-center justify-center text-xl font-semibold rounded-lg mb-1 overflow-hidden">
        <svg className="fill-current h-8 w-8 block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" /></svg>
      </div>
      <ReactTooltip offset={{ right: 2 }} id="new-workspace" className="tooltip" place="right" effect="solid" delayShow={400} border={false} backgroundColor="transparent">
        <div className="bg-gray-800 p-1 border rounded-md border-gray-700 px-2 text-xl text-gray-300 font-light">Add Workspace</div>
      </ReactTooltip>

    </div>)
}

export default WorkspaceNewButton
