import React from 'react'
import './PerfomanceMarketing.css'

export default function PerfomanceMarketing(props) {
  return (
    <div className='perfomance-marketing'>
      <h1 className='fz-42 fw-700'>{props.title} <span>{props.gtext}</span></h1>
      <p className='fz-22 fw-500 color-grey'>{props.description}</p>

    </div>
  )
}
