import { useEffect, useState } from "react";
import './BackTop.css'
import $ from 'jquery';

export default function BackTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);
  
    // This function will scroll the window to the top 
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
      });
    };
  return (
    <div className="back-top">
      
{/* <a id="button"> <img src={process.env.PUBLIC_URL + '/images/home/top-btn.svg'} /></a> */}
{showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <img src={process.env.PUBLIC_URL + '/images/home/top-btn.svg'} />
        </button>
      )}

    </div>
  )
}
