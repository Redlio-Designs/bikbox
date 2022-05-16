import React from 'react'
import './IconBoxWithImage.css'
export default function IconBoxWithImage(props) {
    return (
        <>
            <div className='icon-box'>
                <img src={props.path} className='d-block text-center' />
            </div>
        </>
    )
}
