import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import './NavigationMenu.css'
import ThemeButton from '../ThemeButton/ThemeButton'
import MobileOffCanvas from '../Mobile-OffcanvasMenu/MobileOffCanvas'

export default function NavigationMenu() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => setScreenWidth(window.innerWidth))

    })

    return (
        <>
            {
                screenWidth <= 768 ? <MobileOffCanvas /> : <div className='theme-navigation'>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link to='/' className='navbar-brand'>
                                <img src={process.env.PUBLIC_URL + './images/logo.png'} />
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"><img src={process.env.PUBLIC_URL + './images/home/humburger.svg'} /></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item dropdown ms-5">
                                        <a className="nav-link dropdown-toggle fz-17 fw-500" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Products
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><Link to='/creativeTesting' className='dropdown-item'> Creative Testing</Link></li>
                                            <li><Link to='/performanceAudit' className='dropdown-item'>Perfomance Audit</Link></li>
                                            <li><Link to='/skan' className='dropdown-item'>Skan</Link></li>
                                            <li><Link to='/enterpriseLanding' className='dropdown-item'>Enterprise Landing</Link></li>


                                        </ul>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <ThemeButton text="Book a Demo" />
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            }

        </>
    )
}
