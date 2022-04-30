import React from 'react'

export default function SingleImage(props) {
    return (
        <>
            <img src={props.imgPath} alt={props.imgPath} className='img-fluid' />
        </>
    )
}
