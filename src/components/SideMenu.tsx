import { Add, AlternateEmail, ArrowDropDown, ArrowRight, Bookmark, Create, ExpandMore, Forum, InsertComment, MoreVert, SettingsEthernet } from '@material-ui/icons'
import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { addChannel, useStore } from '../lib/Store'

function SideMenu() {
  return (
    <div className="flex flex-col w-56 h-full space-y-0.5 overflow-hidden">
      <SideMenuTitle />
      <SideMenuOptions />
    </div>)
}

function SideMenuTitle() {
  return (
    <div className="bg-gray-900 py-3 px-4 flex justify-between">
      <div className="flex flex-auto items-center">
        <h1 className="font-semibold leading-tight truncate">Slack</h1>
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
    <div className="bg-gray-900 text-sm flex-grow overflow-auto space-y-4">
      <SideMenuActions />
      <SideMenuChannels />
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
  return (
    <NavLink activeClassName="bg-blue-500 font-semibold text-white" className="flex items-center py-0.5 px-2 space-x-4 hover:bg-gray-800" to={`/${to}`}>
      <span>{icon}</span>
      <span>{text}</span>
    </NavLink>
  )
}

function SideMenuChannels() {
  const history = useHistory();
  const { channels } = useStore({})
  const newChannel = () => {
    const slug = prompt("Please enter the channel name")
    if (slug) {
      addChannel(slugify(slug))
        .then((res: any) => {
          if (res) {
            history.push(`/channel/${res[0]?.id}`)
          }
        })
    }
  }

  return (
    <ToggleMenu text="Channels">
      {channels.map((channel: any) => (
        <NavLink key={channel.id} activeClassName="bg-blue-500 font-semibold text-white" className="flex items-center pl-6 py-1 px-4 space-x-4 hover:bg-gray-800" to={`/channel/${channel.id}`}>
          <span>#</span>
          <span>{channel.slug}</span>
        </NavLink>
      ))}
      <div className="pl-4 py-1 px-4 space-x-2 cursor-pointer" onClick={newChannel}>
        <Add className="bg-gray-800 py-1 rounded-md" />
        <span>Add channels</span>
      </div>
    </ToggleMenu>
  )
}

interface ToggleMenuProps { text: string, children: any }
function ToggleMenu({ text, children }: ToggleMenuProps) {
  const [open, setOpen] = useState(true)
  const toggleHide = () => setOpen(!open)
  return (
    <div>
      <div className="px-2 mb-1 flex items-center space-x-1 cursor-pointer select-none" onClick={toggleHide}>
        {open && <ArrowDropDown className="hover:bg-gray-800 rounded-md" />}
        {!open && <ArrowRight className="hover:bg-gray-800 rounded-md" />}
        <div>{text}</div>
      </div>
      {open &&
        <>
          {children}
        </>
      }
    </div>
  )
}

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

export default SideMenu
