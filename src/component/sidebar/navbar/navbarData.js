import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as HoIcons from "react-icons/ri";


export const NavbarData = [


  {
    title: 'ประเมิน Performance',
    path: '/subPerformance',
    icon: <FaIcons.FaWpforms />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
        {
          title: 'แบบประเมิน',
          path: '/subPerformance',
          cName: 'sub-nav'
        },
        {
          title: 'ผลการประเมิน',
          path: '/subPerformance/report',
          cName: 'sub-nav'
        }
      ]
  }
];