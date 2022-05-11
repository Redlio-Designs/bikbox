import React from 'react'
import './BlogListBox.css'

export default function BlogListBox(props) {
    return (
        <>
            <div className='blog-box'>
                <div className='img-sec'>
                    <img src={props.blogimg} className='img-fluid' />
                </div>
                <div className='text-sec'>
                    <p className='color-grey fz-17 fw-600 blog-date'><span><img className='me-2' src={process.env.PUBLIC_URL + '../images/blog/cal-icon.svg'} /></span>{props.date}</p>
                    <p className='fz-19 fw-600 blog-title'>{props.title}</p>
                    <div className='d-flex justify-content-between'>
                        <div className='social-icon d-flex'>
                            <div className='twitter-box'>
                                <a href="twitter.com"><img src={process.env.PUBLIC_URL + '/images/blog/twitter.png'} /></a>
                            </div>
                            <div className='linkedin-box'>
                                <a href="linkedin.com"><img src={process.env.PUBLIC_URL + '/images/blog/linkedin.png'} /></a>
                            </div>
                            <div className='share-box'>
                                <a href="#"><img src={process.env.PUBLIC_URL + '/images/blog/share.png'} /></a>
                            </div>
                        </div>
                        <div className='read-time'>
                            <p className='fz-17 fw-600 color-grey'><img src={process.env.PUBLIC_URL + '../images/blog/clock.svg'} className='me-2 vertical-align-middle' />{props.readTime}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
