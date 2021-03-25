import { Avatar } from '@material-ui/core';
import { ArrowBack, ArrowForward, HelpOutline, QueryBuilder, Search } from '@material-ui/icons';
import React from 'react';
import { useStateValue } from '../StateProvider';

function TopMenu() {
  const [{ user }] = useStateValue() as any;
  return (
    <div className="bg-gray-900 h-10 px-5 py-2">
      <div className="justify-center items-center flex space-x-4 text-gray-400">
        <div className="flex flex-grow " />
        <ArrowBack />
        <ArrowForward />
        <QueryBuilder />
        <div className="px-4 w-60 bg-gray-700 rounded-md flex space-x-2 border border-gray-600">
          <Search />
          <input className="w-full bg-transparent text-sm outline-none" placeholder="Search..."></input>
        </div>
        <HelpOutline />
        <div className="flex flex-grow" />
        {user && <>
          <span>{user.displayName}</span>
          <Avatar className="header__avatar"
            alt={user?.displayName}
            src={user?.photoURL}
            style={{ width: "25px", height: "25px" }}
          />
        </>
        }
      </div>
    </div>
  )
}

export default TopMenu
