import React, {useState} from "react";
import {Offcanvas, Button} from "react-bootstrap";
import './MobileOffCanvas.css'

export default function MobileOffCanvas() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="mobile-header-section d-flex justify-content-between align-items-center">
                <img src={process.env.PUBLIC_URL + './images/logo.png'} />
                <img src={process.env.PUBLIC_URL + './images/home/humburger.svg'} onClick={handleShow} />
            </div>


            <Offcanvas show={show} onHide={handleClose} className="mobile-offcanvas">
                <Offcanvas.Header>
                    <Offcanvas.Title className="d-flex justify-content-between align-items-center w-100"> <img src={process.env.PUBLIC_URL + './images/white-logo.svg'} />
                        <img src={process.env.PUBLIC_URL + './images/white-close-icon.svg'} onClick={handleClose} /></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="offcanvas-list">
                        <li className="offcanvas-list-item active">Home</li>
                        <li className="offcanvas-list-item">CreativeTesting</li>
                        <li className="offcanvas-list-item">Perfomance Audit</li>
                        <li className="offcanvas-list-item">SKAN</li>
                        <li className="offcanvas-list-item">Enterprise</li>
                        <li className="offcanvas-list-item">Creative Reporting</li>
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
