import { Add, AlternateEmail, ArrowDropDown, Bookmark, Create, ExpandMore, Forum, Inbox, InsertComment, Message, MoreVert, SettingsEthernet } from '@material-ui/icons'
import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import QueryParams from '../models/queryParams'

interface Props { title: string }
function SideMenu({ title }: Props) {
  return (
    <div className="flex flex-col w-64 h-full space-y-0.5 overflow-hidden">
      <SideMenuTitle title={title} />
      <SideMenuOptions />
    </div>)
}

interface SideMenuTitleProps { title: string }
function SideMenuTitle({ title }: SideMenuTitleProps) {
  return (
    <div className="bg-gray-900 py-3 px-4 flex justify-between">
      <div className="flex flex-auto items-center">
        <h1 className="font-semibold leading-tight truncate">{title}</h1>
        <ExpandMore />
      </div>
      <div className="bg-gray-200 text-black rounded-full p-2 flex">
        <Create />
      </div>
    </div>
  )
}

function SideMenuOptions() {
  return (
    <div className="bg-gray-900 text-sm opacity-75 flex-grow overflow-auto">
      <SideMenuActions />
      <SideMenuChannels />
      <SideMenuDMs />
      <SideMenuApps />
    </div>
  )
}

function SideMenuActions() {
  return (
    <div className="py-2">
      <SideMenuAction icon={<InsertComment />} text="Threads" to="threads" />
      <SideMenuAction icon={<Forum />} text="All DMs" to="dms" />
      <SideMenuAction icon={<AlternateEmail />} text="Mentions &amp; reactions" to="mentions" />
      <SideMenuAction icon={<Bookmark />} text="Saved items" to="saved" />
      <SideMenuAction icon={<SettingsEthernet />} text="Slack Connect" to="connect" />
      <SideMenuAction icon={<MoreVert />} text="More" to="more" />
    </div>
  )
}

interface SideMenuActionProps { icon: any, text: string, to: string }
function SideMenuAction({ icon, text, to }: SideMenuActionProps) {
  const { title } = useParams<QueryParams>()
  return (
    <NavLink activeClassName="bg-blue-500 font-semibold text-white" className="flex items-center py-0.5 px-2 space-x-4 hover:bg-gray-800" to={`/workspace/${title}/${to}`}>
      <span>{icon}</span>
      <span>{text}</span>
    </NavLink>
  )
}

function SideMenuChannels() {
  const { title } = useParams<QueryParams>()
  var channels = ["general", "foo"]
  return (
    <div className="py-2">
      <div className="px-2 mb-2 flex items-center space-x-1">
        <ArrowDropDown />
        <div>Channels</div>
      </div>
      {channels.map((channel) => (
        <NavLink activeClassName="bg-blue-500 font-semibold text-white" className="flex items-center pl-6 py-1 px-4 space-x-4 hover:bg-gray-800" to={`/workspace/${title}/channel/${channel}`}>
          <span>#</span>
          <span>{channel}</span>
        </NavLink>
      ))}
      <div className="pl-4 py-1 px-4 space-x-2">
        <Add className="bg-gray-800 py-1 rounded-md" />
        <span>Add channels</span>
      </div>
    </div>
  )
}

function SideMenuDMs() {
  const { title } = useParams<QueryParams>()
  var dms = ["Dimitris", "Joan", "Jorge"]

  return (
    <div className="py-2">
      <div className="px-2 mb-2 flex items-center space-x-1">
        <ArrowDropDown />
        <div>Direct messages</div>
      </div>
      {dms.map((dm) => (
        <NavLink activeClassName="bg-blue-500 font-semibold text-white" className="flex items-center pl-6 py-1 px-4 space-x-6 hover:bg-gray-800" to={`/workspace/${title}/message/${dm}`}>
          <span></span>
          {/* <span className="text-white">{dm} <span className="text-grey text-sm opacity-50">you</span></span> */}
          <span className="text-white">{dm}</span>
        </NavLink>
      ))}
      <div className="pl-4 py-1 px-4 space-x-2">
        <Add className="bg-gray-800 py-1 rounded-md" />
        <span>Add teammates</span>
      </div>
    </div>
  )
}

function SideMenuApps() {
  const { title } = useParams<QueryParams>()
  var apps = ["GitHub", "Google Calendar"]

  return (
    <div className="py-2">
      <div className="px-2 mb-2 flex items-center space-x-1">
        <ArrowDropDown />
        <div>Apps</div>
      </div>
      {apps.map((app) => (
        <NavLink activeClassName="bg-blue-500 font-semibold text-white" className="flex items-center pl-6 py-1 px-4 space-x-6 hover:bg-gray-800" to={`/workspace/${title}/app/${app}`}>
          <span></span>
          <span className="text-white">{app}</span>
        </NavLink>
      ))}
      <div className="pl-4 py-1 px-4 space-x-2">
        <Add className="bg-gray-800 py-1 rounded-md" />
        <span>Add apps</span>
      </div>
    </div>
  )
}

export default SideMenu
