import React from 'react'
import logo from "../../assets/images/homepage/Logo_alta.png"
import "./navdashboard.scss"
import image from '../../exportimage/image'
import {Link} from "react-router-dom"
const NavDashBoard = () => {
    const Navbar =[
         {
        display : "Dashboard",
        path : "/",
        img : image.img1
    },
     
         {
        display : "Thiết bị",
        path : "/Devices",
        img : image.img2
    },
         {
        display : "Dịch vụ",
        path : "/",
        img : image.img3
    },
         {
        display : "Cấp số",
        path : "/",
        img : image.img4
    },    {
        display : "Báo cáo",
        path : "/",
        img : image.img5
    },
         {
        display : "Cài đặt hệ thống",
        path : "/",
        img : image.img6
    },
]
  return (
    <div className="container-wrapper">
        <div className="navbar__logo">
         <img srcSet={`${logo} 3x`} alt="" />
        </div>
        <div className='navbar__menu'>
            {Navbar.map((item,index) => (
                <div className="navbar__menu__item" key={index}>
                   
                    <Link to = {item.path}>
                    <img srcSet={`${item.img} 2x`} alt=""/>
                    <span>{item.display}</span>

                    </Link>
                </div>
            ))}
        </div>

    </div>
  )
}

export default NavDashBoard