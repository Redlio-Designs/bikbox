import React from 'react'
import './MarketingPlatform.css'

export default function MarketingPlatform(props) {
  return (
   <>
        <div className='m-box text-center'>
        <img src={props.image} alt={props.image} className='img-fluid' />
       <h4 className='fz-22 fw-600'>{props.heading}</h4>
       <p className='fz-17 color-grey'>{props.description}</p>
       </div>
   </>
  )
}


