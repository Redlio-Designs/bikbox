import React from 'react'
import './FindWinnigCreative/FindWinnigCreative.css'

export default function FindWinningCreative(props) {
  return (
    <>
    <div className='container'>
      <div className='row'>
      <div className='col-lg-5'>
        <div className='creative-text'>
        {props.image}
      <h2 className='fz-34 fw-700' >{props.heading}</h2>
      <p className='fz-20 '>{props.description}</p>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}
