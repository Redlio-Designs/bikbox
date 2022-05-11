import React from 'react'

export default function SocialShareBlog() {
    return (
        <>
            <div className='share-post d-flex social-icons'>
                <img src={process.env.PUBLIC_URL + '../images/blog/facebook.svg'} className='me-2' />
                <img src={process.env.PUBLIC_URL + '../images/blog/linkedin.svg'} className='me-2' />
                <img src={process.env.PUBLIC_URL + '../images/blog/twitter.svg'} className='me-2' />
                <img src={process.env.PUBLIC_URL + '../images/blog/instagram.svg'} />
            </div>
        </>
    )
}
