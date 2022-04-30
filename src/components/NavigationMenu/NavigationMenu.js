import React from 'react'
import './NavigationMenu.css'
import ThemeButton from '../ThemeButton/ThemeButton'


export default function NavigationMenu() {
    return (
        <>
            <div className='theme-navigation'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={process.env.PUBLIC_URL + './images/logo.png'} />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown ms-5">
                                    <a className="nav-link dropdown-toggle fz-17 fw-500" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Products
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
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
        </>
    )
}
