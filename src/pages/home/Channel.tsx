import { InfoOutlined, StarOutline } from '@material-ui/icons'
import React from 'react'
import { useParams } from 'react-router'
import QueryParams from '../../models/queryParams'

function Channel() {
  let { channel } = useParams<QueryParams>()
  return (
    <div className="flex flex-col flex-grow">
      <ChannelTop />
      Channel {channel}
    </div>
  )
}

function ChannelTop() {
  let { channel } = useParams<QueryParams>()
  return (
    <div className="flex px-4 bg-gray-900 h-16 items-center">
      <div>
        <div className="space-x-2">
          <span className="font-bold text-sm">#{channel}</span>
          <span className="text-base"><StarOutline fontSize="inherit" /></span>
        </div>
        <span className="font-light text-sm">Add a topic</span>
      </div>
      <div className="flex-grow" />
      <InfoOutlined />
    </div>
  )
}
export default Channel
