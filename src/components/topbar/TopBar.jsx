import {Link} from 'react-router-dom'
import React from 'react'
import './TopBar.css'

export default function TopBar() {
    const user = false;
  return (
    <div className='top'>
        <div className="top-left">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="top-center">
            <ul className="topList">
                <li className="topListItem">
                    <Link className='link' to='/'>HOME</Link>
                </li>
                <li className="topListItem">
                    <Link className='link' to='/'>ABOUT</Link>
                </li>
                <li className="topListItem">
                    <Link className='link' to='/'>CONTACT</Link>
                </li>
                <li className="topListItem">
                    <Link className='link' to='/write'>WRITE</Link>
                </li>
                <li className="topListItem">
                    {user && 'LOGOUT'}
                </li>
            </ul>
        </div>
        <div className="top-right">
            {
                user ? (
            <Link to='/settings'>
                <img className='topImg' src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" srcset="" />
            </Link>

                ) :
               <ul className="topList">
                    <li className="topListItem">
                        <Link className='link' to='/login'>LOGIN</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to='/register'>REGISTER</Link>
                    </li>
                </ul>
            }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>

    

  )
}
