import React, { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import './MobileOffCanvas.css'
import { Link, useLocation } from "react-router-dom";


export default function MobileOffCanvas() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    console.log("splitLocation", pathname, splitLocation[0]);

    return (
        <>
            <div className="mobile-header-section d-flex justify-content-between align-items-center">
                <Link to='/'>  <img src={process.env.PUBLIC_URL + '../images/logo.png'} /></Link>
                <img src={process.env.PUBLIC_URL + '../images/home/humburger.svg'} onClick={handleShow} className='cursor-pointer' />
            </div>
            <Offcanvas show={show} onHide={handleClose} className="mobile-offcanvas">
                <Offcanvas.Header>
                    <Offcanvas.Title className="d-flex justify-content-between align-items-center w-100"> <Link to='/'> <img src={process.env.PUBLIC_URL + '../images/white-logo.svg'} /></Link>



                        <img src={process.env.PUBLIC_URL + '../images/white-close-icon.svg'} onClick={handleClose} className='cursor-pointer' cursor-pointer />



                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="offcanvas-list">
                        <li className="offcanvas-list-item"><Link to='/' className={pathname === '/' ? 'active text-decoration-none' : 'text-decoration-none'}>Home</Link></li>
                        <li className="offcanvas-list-item"><Link to='/creativeTesting' className={pathname === '/creativeTesting' ? 'active text-decoration-none' : 'text-decoration-none'}>CreativeTesting</Link></li>
                        <li className="offcanvas-list-item"><Link to='/performanceAudit' className={pathname === '/performanceAudit' ? 'active text-decoration-none' : 'text-decoration-none'}>Perfomance Audit</Link></li>
                        <li className="offcanvas-list-item"><Link to='/skan' className={pathname === '/skan' ? 'active text-decoration-none' : 'text-decoration-none'}>SKAN</Link></li>
                        <li className="offcanvas-list-item"><Link to='/enterpriseLanding' className={pathname === '/enterpriseLanding' ? 'active text-decoration-none' : 'text-decoration-none'}>Enterprise</Link></li>
                        <li className="offcanvas-list-item"><Link to='/' className={' text-decoration-none'}>Creative Reporting</Link></li>
                    </ul>
                    <img src={process.env.PUBLIC_URL + '../images/home/linkedin-white.svg'} className="linkedin-img-offcavvas" />
                    <div className="offcanvas-theme-btn w-100">

                        <a target="_blank" href="https://calendly.com/blkbox-ai/blkbox-saas-demo?month=2022-05">
                            <button className="btn btn-theme">Book a Demo</button>
                        </a>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
