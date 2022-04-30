import React from 'react'
import FindWinnigCreative from '../component/FindWinningCreative/FindWinnigCreative'
import "../../public/images/creative.svg"
export default function home() {
  return (
    <>
    <FindWinnigCreative
     heading="Find Winning Creatives" 
    description="Discover the best colors, compositions, keywords, objects, and more. Get high-quality insights by audience, product and many more!"
    // image="<img src={process.env.PUBLIC_URL + '../images/creative.svg'} alt='time ' ></img>"
    />
    </>
  )
}
