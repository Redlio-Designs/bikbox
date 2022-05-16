import React from 'react'
import './SemiTitleWithDescription.css'


export default function SemiTitleWithDescription(props) {
    return (
        <>
            <h2 className='fz-34 fw-700 sub-heading'>{props.title}</h2>
            <p className='desc fz-21 color-grey'>{props.desc}</p>
        </>
    )
}
