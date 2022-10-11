import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'DASHBOARD',
    path: '/admin-dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'COINS',
    path: '/coins-list',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'NEWS',
    path: '/news-list',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
];
