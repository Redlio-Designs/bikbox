import React from 'react'
import './BlogDetailTags.css'
export default function BlogDetailTags(props) {
    return (
        <>
            <div className='tag-box'>
                <p className='fz-17 fw-600'>{props.tagname}</p>
            </div>

        </>
    )
}
