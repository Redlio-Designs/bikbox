import React from 'react'
import './BlogAuthor.css'

export default function BlogAuthor() {
    return (
        <>
            <div className='blog-author-sec d-flex'>
                <div className='img-sec'>
                    <img src={process.env.PUBLIC_URL + '../images/blog/avtar.png'} className='rounded-circle' />
                </div>
                <div className='text-sec'>
                    <p className='fz-18 fw-700 author-name'>Jay Shah</p>
                    <p className='fz-15 fw-500 publish-time color-grey'>1 days ago</p>
                </div>
            </div>
        </>
    )
}
