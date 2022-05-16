import React from 'react'
import './HomeHeroImage.css'
export default function HomeHeroImage() {
    return (
        <>
            <div className='home-hero-img'>
                <img src={process.env.PUBLIC_URL + './images/home/element-1.png'} className='base-img' />
                <img src={process.env.PUBLIC_URL + './images/home/element-2.png'} className='base-img-2' />
                <img src={process.env.PUBLIC_URL + './images/home/element-3.png'} className='base-img-3' />
                <img src={process.env.PUBLIC_URL + './images/home/element-4.png'} className='base-img-4' />
            </div>
        </>
    )
}
