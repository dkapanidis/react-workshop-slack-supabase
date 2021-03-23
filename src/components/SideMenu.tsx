import { Add, AlternateEmail, ArrowDropDown, Bookmark, Create, ExpandMore, Forum, Inbox, InsertComment, Message, MoreVert, SettingsEthernet } from '@material-ui/icons'
import React from 'react'

interface Props { title: string }
function SideMenu({ title }: Props) {
  return (
    <div className="bg-gray-800 text-gray-200 text-base flex flex-col w-64 h-full space-y-0.5 overflow-hidden">
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
      < SideMenuChannels />
      <SideMenuDMs />
      <SideMenuApps />
    </div>
  )
}

function SideMenuActions() {
  return (
    <div className="py-2">
      <SideMenuAction icon={<InsertComment/>}  title="Threads" />
      <SideMenuAction icon={<Forum/>} title="All DMs" />
      <SideMenuAction icon={<AlternateEmail/>} title="Mentions &amp; reactions" />
      <SideMenuAction icon={<Bookmark/>} title="Saved items" />
      <SideMenuAction icon={<SettingsEthernet/>} title="Slack Connect" />
      <SideMenuAction icon={<MoreVert/>} title="More" />
    </div>
  )
}
interface SideMenuActionProps { icon: any, title: string }
function SideMenuAction({icon, title }: SideMenuActionProps) {
  return (
    <div className="py-0.5 px-2 space-x-4">
      <span>{icon}</span>
      <span>{title}</span>
    </div>
  )
}

function SideMenuChannels() {
  return (
    <div className="py-2">
      <div className="px-2 mb-2 flex items-center space-x-1">
        <ArrowDropDown />
        <div>Channels</div>
      </div>
      <div className="pl-6 py-1 px-4 space-x-4">
        <span>#</span>
        <span>general</span>
      </div>
      <div className="pl-4 py-1 px-4 space-x-2">
        <Add className="bg-gray-800 py-1 rounded-md" />
        <span>Add channels</span>
      </div>
    </div>
  )
}

function SideMenuDMs() {
  return (
    <div className="py-2">
      <div className="px-2 mb-2 flex items-center space-x-1">
        <ArrowDropDown />
        <div>Direct messages</div>
      </div>
      <div className="pl-6 py-1 px-4 space-x-6">
        <span></span>
        <span className="text-white">Dimitris <span className="text-grey text-sm opacity-50">you</span></span>
      </div>
      <div className="pl-4 py-1 px-4 space-x-2">
        <Add className="bg-gray-800 py-1 rounded-md" />
        <span>Add teammates</span>
      </div>
    </div>
  )
}

function SideMenuApps() {
  return (
    <div className="py-2">
      <div className="px-2 mb-2 flex items-center space-x-1">
        <ArrowDropDown />
        <div>Apps</div>
      </div>
      <div className="pl-6 py-1 px-4 space-x-6">
        <span></span>
        <span className="text-white">GitHub</span>
      </div>
      <div className="pl-6 py-1 px-4 space-x-6">
        <span></span>
        <span className="text-white">Google Calendar</span>
      </div>
      <div className="pl-4 py-1 px-4 space-x-2">
        <Add className="bg-gray-800 py-1 rounded-md" />
        <span>Add apps</span>
      </div>
    </div>
  )
}

export default SideMenu
