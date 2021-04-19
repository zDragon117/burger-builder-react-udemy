import React, { Component } from 'react'
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'

import { FaGem } from '@react-icons/all-files/fa/FaGem'
import { FaHeart } from '@react-icons/all-files/fa/FaHeart'

import sidebarImage from '../../assets/burger-sidebar-400x900.jpg'

export default class SideBar extends Component {
  render() {
    return (
      <div className="sidebar-wrapper">
        <ProSidebar image={sidebarImage} breakPoint="xl">
          <SidebarHeader>
            {/**
             *  You can add a header for the sidebar ex: logo
             */}
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
              <SubMenu title="Components" icon={<FaHeart />}>
                <MenuItem>Component 1</MenuItem>
                <MenuItem>Component 2</MenuItem>
              </SubMenu>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            {/**
             *  You can add a footer for the sidebar ex: copyright
             */}
          </SidebarFooter>
        </ProSidebar>
        <style>
          {`
						.sidebar-wrapper {
							height: 100%;
						}
						.pro-sidebar > .pro-sidebar-inner > img.sidebar-bg {
							width: 100%;
							height: 100%;
							object-fit: contain;
							object-position: center;
							position: absolute;
							opacity: 0.5;
							left: 0;
							top: 0;
							z-index: 100;
							background-color: #f9f3e7;
						}
					`}
        </style>
      </div>
    )
  }
}
