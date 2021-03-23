import { Avatar } from '@material-ui/core';
import { ArrowBack, ArrowForward, HelpOutline, PersonOutline, QueryBuilder, Search } from '@material-ui/icons';
import React from 'react';
import { useStateValue } from '../StateProvider';

interface TopMenuProps { title: string }
function TopMenu({ title }: TopMenuProps) {
  const [{ user }] = useStateValue() as any;

  return (
    <div className="px-5 py-2 bg-gray-900 text-gray-200">
      <div className="justify-center items-center flex space-x-4 text-gray-400">
        <div className="flex flex-grow " />
        <ArrowBack />
        <ArrowForward />
        <QueryBuilder />
        <TopMenuSearch title={title} />
        <HelpOutline />
        <div className="flex flex-grow" />
        {user?.displayName}
        {user ? <Avatar className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
          style={{ width: "25px", height: "25px" }}
        ></Avatar> :
          <PersonOutline />
        }
      </div>
    </div>
  )
}

interface TopMenuSearchProps { title: string }
function TopMenuSearch({ title }: TopMenuSearchProps) {
  return (
    <div className=" px-4 w-60 bg-gray-700 rounded-md flex space-x-2 border border-gray-600">
      <Search />
      <input className="w-full bg-transparent text-sm outline-none" placeholder={`Search ${title}`}></input>
    </div>
  );
}

export default TopMenu
