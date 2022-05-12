import React from 'react'
import './PerfomanceMarketing.css'

export default function PerfomanceMarketing(props) {
  return (
    <div className='perfomance-marketing'>
      <h1 className='fz-42 fw-700'>{props.title} <span>{props.gtext}</span></h1>
      <p className='fz-23 fw-700 pb-3 sub-desc'>{props.subdescription}</p>
      <p className='fz-22 fw-400 color-grey desc'>{props.description}</p>

    </div>
  )
}
