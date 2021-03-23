import { FlashOn, InfoOutlined, StarOutline } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import db from '../../firebase'
import QueryParams from '../../models/queryParams'

interface Channel {
  name: string,
}

interface ChannelMessages {
  message: string,
  timestamp: any,
}


function ChannelScreen() {
  const { channelID } = useParams<QueryParams>();
  const [channel, setChannel] = useState<Channel | undefined>()
  useEffect(() => {
    if (channelID) {
      db.collection("rooms").doc(channelID).onSnapshot(snapshot =>
        setChannel(snapshot.data() as Channel)
      )
    }
  }, [channelID])
  return (
    <div className="flex flex-col flex-grow">
      <div className="space-y-0.5 bg-gray-700 flex flex-col flex-grow">
        <ChannelTop channel={channel} />
        <ChannelMessagesScreen />
      </div>
      <ChannelInput channel={channel} />
    </div>
  )
}

interface ChannelTopProps { channel: Channel | undefined }
function ChannelTop({ channel }: ChannelTopProps) {
  return (
    <div className="flex px-4 bg-gray-800 h-16 items-center">
      <div>
        <div className="space-x-2">
          <span className="font-bold text-sm">#{channel?.name}</span>
          <span className="text-base"><StarOutline fontSize="inherit" /></span>
        </div>
        <span className="font-light text-sm">Add a topic</span>
      </div>
      <div className="flex-grow" />
      <InfoOutlined />
    </div>
  )
}

function ChannelMessagesScreen() {
  const { channelID } = useParams<QueryParams>();
  const [channelMessages, setChannelMessages] = useState<ChannelMessages[] | []>([])
  useEffect(() => {
    if (channelID) {
      db.collection("rooms")
        .doc(channelID)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot(snapshot =>
          setChannelMessages(snapshot.docs.map((doc) => doc.data()) as any)
        )
    }
  }, [channelID])
  return (
    <div className="flex flex-col flex-grow px-8 py-4 bg-gray-800">
      {channelMessages.map((msg: any) => (
        <div key={msg?.message}>{msg?.message}</div>
      ))}
    </div>
  )
}

interface ChannelInputProps { channel: Channel | undefined }
function ChannelInput({ channel }: ChannelInputProps) {
  return (
    <div className="px-5 pb-5">
      <div className="px-2 p-2 rounded-md border-gray-500 border flex space-x-4 text-gray-400">
        <FlashOn className="pr-2 border-r border-gray-500" />
        <input className="text-white placeholder-gray-500 bg-transparent outline-none flex-auto" placeholder={`Message #${channel?.name}`}></input>
      </div>
    </div>
  )
}

export default ChannelScreen
