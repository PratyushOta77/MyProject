import React from 'react'
import './SideBar.css'
import SettingsIcon from '@material-ui/icons/Settings';
import { Link, NavLink } from 'react-router-dom';
import PlaceIcon from '@material-ui/icons/Place';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
export default function Sidebar() {

  const handleClick = () => {
    var element = document.querySelector("NavLink");
  element.classList.remove(".sideBarList :hover");
  }
  return (
    <div className='sideBar'>
      <div className='sideBarWrapper'>
        <div className='sideBarMenu'>
          <h3 className='sideBartitle'> Dashbord</h3>
          <ul className='sideBarList'>

              <li>
              <NavLink to='/place' className={({ isActive }) =>
                isActive ? 'sideBarListActive noHover' : 'sideBarListItem '}>
                <PlaceIcon />
                <span style={{ marginLeft: '10px' }}>  Place </span>
              </NavLink>
              </li>
              <li>
              <NavLink to='/form' className={({ isActive }) =>
                isActive ? 'sideBarListActive noHover' : 'sideBarListItem'}>
                <ViewHeadlineIcon />
                <span style={{ marginLeft: '10px' }}>  FORM </span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/weather' className={({ isActive }) =>
                isActive ? 'sideBarListActive noHover' : 'sideBarListItem'}>
                <WbSunnyIcon />
                <span style={{ marginLeft: '10px' }}>  Weather </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
