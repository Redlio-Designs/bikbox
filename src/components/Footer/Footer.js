import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div>
        <footer>
            <div class="container">
            <div className='row'>
                <div className='col-lg-3'>
                    <div className="footer-text">
                        <img src={process.env.PUBLIC_URL + '/images/home/footer-logo.svg'} />
                        <p className='fz-13 color-grey'>Industry’s first end-to-end marketing automation platform that brings the 1% technology from Facebook at your fingertips.</p>
                        <img class="ln-icon" src={process.env.PUBLIC_URL + '/images/home/linkedin.svg'} />
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div className='page-list'>
                        <ul className='mb-0'>
                            <li><a href="#" class="fz-15">Product</a></li>
                            <li><a href="#" class="fz-15">Blog</a></li>
                            <li><a href="#" class="fz-15">Career</a></li>
                            <li><a href="#" class="fz-15">Case Studies</a></li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div className='page-list'>
                    <img src={process.env.PUBLIC_URL + '/images/home/mail.svg'} /> <a class="fz-15" href="mailto:Sales@BLKBOX.ai">Sales@BLKBOX.ai</a>
                    </div>
                </div>
                <div className='col-lg-3'>

                </div>
            </div>
            <div className='footer-bottom'>
                <div className='d-flex justify-content-between'>
                   <div className='copyright'>
                    <p class="fz-13 color-grey">© 2022 by BLKBOX. All rights reserved.</p>
                </div>
                <div class='bottom-links'>
                    <a href="#" class="fz-13 color-grey">Help Centers</a>
                    <a href="#" class="fz-13 color-grey">Terms of Service</a>
                </div>
                </div>
            </div>
            </div>
        </footer>
        </div>
        

  )
}
