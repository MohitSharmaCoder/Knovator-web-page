import React, { useState } from 'react'
import './css/Home.css'
import logo from './img/logo.png'
import bell from './img/bell.png'
import user from './img/user-icon.png'
import rarr from './img/right-arr-icon.png'
import darr from './img/down-arr.png'
import earth from './img/earth.png'
import banner from './img/bannerIMG.png'
import location from './img/location-img.png'
import { AiOutlineSearch } from 'react-icons/ai';
import { GiCrossedBones } from 'react-icons/gi';
import { HiMenuAlt3 } from 'react-icons/hi';
import Categ from './Categ'
import Feature from './Feature'
import Company from './Company'
import Co from './Co'
import Footer from './Footer'
const Home = () => {
    const [burger, setBurger] = useState('ham-icon')
    const [menu, setMenu] = useState('nav-right phone-dis')
    const [ham, setHam] = useState('ham-vis phone-nav')
    const handleClick = () => {
        if(burger==="ham-icon"){
            setBurger('ham-vis')
            setMenu(' phone-nav')
        }
        else{
            setBurger('ham-icon')
            setMenu(' nav-right phone-dis')
        }
    }
    return (
        <>
            <header className="hero-section">
                <div className="top-header-section">
                    <div className="logo nav-left"><img src={logo} alt="" /></div>
                    <div className="ham-icons">
                        {/* <div className="cross-icon"><GiCrossedBones/></div> */}
                        <div className={burger} onClick={handleClick}><HiMenuAlt3 /></div>
                    </div>
                    {/* "nav-right phone-nav phone-dis" */}
                    <nav className={menu}>
                        <div className="ham-icons">
                            <div className="cross-icon" onClick={handleClick}><GiCrossedBones /></div>
                        </div>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">My Job</a></li>
                            <li><a href="/"><img src={bell} alt="" /></a></li>
                            <li><a href="/"><img src={user} alt="" /></a></li>
                            <li><a href="/">For Employee <img src={rarr} alt="" /></a></li>
                            <li><a href="/"><img src={earth} alt="" /> En <img src={darr} alt="" /></a></li>
                        </ul>
                    </nav>
                </div>
                <div className="bottom-header-section">
                    <h1>Find the perfect job for you</h1>
                    <p>Search your career opportunity through 12,800 job</p>
                    <div className="seach-section">
                        <input className='s-one' type="text" placeholder='Search by job title, company or keywords' />
                        <div className='location-icon'><div><img src={location} alt="" /></div></div>
                        <input className='s-two' type="text" placeholder='Previous city or region' />
                        <button className='search-icon'><AiOutlineSearch /></button>
                    </div>
                    <p className='popular'>popular searches</p>
                    <div className="popular-search">
                        <ul>
                            <li><a href="/">Designer</a></li>
                            <li><a href="/">Writer</a></li>
                            <li><a href="/">Team Leader</a></li>
                            <li><a href="/">Senior</a></li>
                            <li><a href="/">Web Designer</a></li>
                        </ul>
                    </div>
                </div>
                <img className='bg-image' src={banner} alt="kjk" />
            </header>
            <Categ/>
            <Feature/>
            <Company/>
            <Co/>
            <Footer/>
        </>
    )
}

export default Home
