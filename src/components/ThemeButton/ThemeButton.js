import React from 'react'

export default function ThemeButton(props) {
    return (
        <>
            <a href={props.link} target="_blank" className='btn btn-theme'>
                {props.text}
            </a>
        </>
    )
}
