import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as HoIcons from "react-icons/ri";


export const SidebarData = [
  {
    title: 'Dashboard',
    path: '',
    icon: <HoIcons.RiHome5Line />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'สรุปการประเมิน',
        path: '/Dashboard',
        cName: 'sub-nav'
      },
      {
        title: 'เปรียบเทียบการประเมิน',
        path: '/Compare_assessments',
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'ประเมิน Potential',
    path: '',
    icon: <FaIcons.FaWpforms />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'แบบประเมิน',
        path: '/potential',
        cName: 'sub-nav'
      },
      {
        title: 'ผลการประเมิน',
        path: '/potential/report',
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'ประเมิน Performance',
    path: '',
    icon: <FaIcons.FaWpforms />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
        {
          title: 'แบบประเมิน',
          path: '/performance/assessment',
          cName: 'sub-nav'
        },
        {
          title: 'ผลการประเมิน',
          path: '/performance/report',
          cName: 'sub-nav'
        }
      ]
  }
];