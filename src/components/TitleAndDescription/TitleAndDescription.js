import React from 'react'
import './TitleAndDescription.css'

export default function TitleAndDescription(props) {
    return (
        <>
            <h1 className='fz-48 text-center sub-section-title fw-700'>{props.title}</h1>
            <p className='fz-18 text-center color-grey sub-section-description'>{props.desc}</p>
        </>
    )
}
