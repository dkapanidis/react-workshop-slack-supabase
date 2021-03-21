import React from 'react'
import ReactTooltip from 'react-tooltip'
import useMousetrap from './hooks/mousetrap';
import { useHistory } from 'react-router-dom';

interface Props { title: string, shortcut: number }
function WorkspaceButton({ title, shortcut }: Props) {
  const history = useHistory()
  const onClick = () => history.push(`/workspace/${title.toLowerCase()}`)
  useMousetrap(`g ${shortcut}`, onClick);

  return (
    <div data-tip data-for={`${shortcut}`} className="cursor-pointer mb-5" onClick={onClick}>
      <div className="bg-gray-500 h-10 w-10 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden hover:ring-4 ring-offset-4 ring-offset-current ring-gray-400">
        {title[0]}
      </div>
      <ReactTooltip offset={{ right: 2 }} id={`${shortcut}`} className="tooltip" place="right" effect="solid" delayShow={400} border={false} backgroundColor="transparent">
        <div className="bg-gray-800 p-1 border rounded-md border-gray-700 px-2 text-2xl text-gray-300 font-light">
          {title}&nbsp;&nbsp;&nbsp;
          <span className="text-gray-200 text-lg font-extralight"> <code className="bg-gray-700 inset-0 px-1 rounded-md ">G</code> <code className="bg-gray-700 inset-0 px-1 rounded-md">{shortcut}</code></span>
        </div>
      </ReactTooltip>
    </div>
  )
}

export default WorkspaceButton
