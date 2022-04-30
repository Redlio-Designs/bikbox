import React from 'react'
import ThemeButton from '../ThemeButton/ThemeButton'
import './CaseStudyCarousel.css'


export default function CaseStudyBox(props) {
    return (
        <>
            <div className='case-box'>
                <div className='case-study-img'>
                    <img src={props.imgPath} alt='case study' className='img-fluid' />
                </div>
                <div className='text-box'>
                    <h2 className='fw-700 fz-24'>{props.title}</h2>
                    <p className='fz-15 color-grey'>{props.desc}</p>
                    <ThemeButton text="Learn more" />
                </div>
            </div>
        </>
    )
}
