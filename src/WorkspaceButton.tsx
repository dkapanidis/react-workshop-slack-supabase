import React from 'react'

interface Props { title: string, id: number }
function WorkspaceButton({ title, id }: Props) {
  return (
    <div className="cursor-pointer mb-5">
      <div className="bg-gray-500 h-10 w-10 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden hover:ring-4 ring-offset-4 ring-offset-current ring-gray-400">
        {title[0]}
      </div>
    </div>
  )
}

export default WorkspaceButton
