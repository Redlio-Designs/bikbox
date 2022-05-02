import React, { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";
import './MobileOffCanvas.css'
import { Link } from "react-router-dom";


export default function MobileOffCanvas() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="mobile-header-section d-flex justify-content-between align-items-center">
                <img src={process.env.PUBLIC_URL + './images/logo.png'} />
                <img src={process.env.PUBLIC_URL + './images/home/humburger.svg'} onClick={handleShow} className='cursor-pointer' />
            </div>
            <Offcanvas show={show} onHide={handleClose} className="mobile-offcanvas">
                <Offcanvas.Header>
                    <Offcanvas.Title className="d-flex justify-content-between align-items-center w-100"> <img src={process.env.PUBLIC_URL + './images/white-logo.svg'} />
                        <img src={process.env.PUBLIC_URL + './images/white-close-icon.svg'} onClick={handleClose} className='cursor-pointer' cursor-pointer /></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="offcanvas-list">
                        <li className="offcanvas-list-item"><Link to='/' className="active text-decoration-none">Home</Link></li>
                        <li className="offcanvas-list-item"><Link to='/creativeTesting' className="text-decoration-none">CreativeTesting</Link></li>
                        <li className="offcanvas-list-item"><Link to='/performanceAudit' className="text-decoration-none">Perfomance Audit</Link></li>
                        <li className="offcanvas-list-item"><Link to='/skan' className="text-decoration-none">SKAN</Link></li>
                        <li className="offcanvas-list-item"><Link to='/enterpriseLanding' className="text-decoration-none">Enterprise</Link></li>
                        <li className="offcanvas-list-item"><Link to='/' className="text-decoration-none">Creative Reporting</Link></li>
                    </ul>
                    <img src={process.env.PUBLIC_URL + './images/home/linkedin-white.svg'} className="linkedin-img-offcavvas" />
                    <div className="offcanvas-theme-btn w-100">

                        <button className="btn btn-theme">Book a Demo</button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
