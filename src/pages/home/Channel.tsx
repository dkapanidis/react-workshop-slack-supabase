import { FlashOn, InfoOutlined, StarOutline } from '@material-ui/icons'
import React from 'react'
import { useParams } from 'react-router'
import QueryParams from '../../models/queryParams'

function Channel() {
  return (
    <div className="flex flex-col flex-grow">
      <ChannelTop />
      <ChannelMessages />
      <ChannelInput />
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

function ChannelMessages() {
  const messages = ["hi", 'there']
  return (
    <div className="flex-grow">
      {messages.map((msg) => (
        <div>{msg}</div>
      ))}
    </div>
  )
}

function ChannelInput() {
  let { channel } = useParams<QueryParams>()
  return (
    <div className="px-5 pb-5">
      <div className="px-2 p-2 rounded-md border-gray-500 border flex space-x-4 text-gray-400">
        <FlashOn className="pr-2 border-r border-gray-500" />
        <input className="text-white placeholder-gray-500 bg-transparent outline-none flex-auto" placeholder={`Message #${channel}`}></input>
      </div>
    </div>
  )
}

export default Channel
