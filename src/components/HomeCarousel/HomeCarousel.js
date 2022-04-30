import React from 'react'
import './HomeCarousel.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function HomeCarousel() {
    return (

        <Carousel
            additionalTransfrom={0}
            arrows
            showDots={true}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 3,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                }
            }}

            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            <div className='carousel-item-box'>
                <img src={process.env.PUBLIC_URL + '/images/home/quote.png'} className='quotes' alt='ds' />
                <p className='color-grey fz-12  quote-heading'>BLKBOX has been a key partner in driving success for the launch of Live Play Mobile! The platform is able to acquire high-value users that hit our D1 and D7 targets, and we successfully increased our budget 3x within our key markets!  I'm excited about the tech innovation that the team continues to build within the performance marketing space.</p>
                <p className='fz-16 fw-600 pb-1'>Stuart Lewis-Smith</p>
                <p className='fz-12 color-grey'>CEO, Live Play Mobile</p>
            </div>
            <div className='carousel-item-box'>
                <img src={process.env.PUBLIC_URL + '/images/home/quote.png'} className='quotes' alt='ds' />
                <p className='color-grey fz-12  quote-heading'>I enjoy working with the BlkBox team because I can trust their depth of knowledge in all things marketing. Their sophisticated platform allows my team to spend less time building campaigns and more time being strategic thinkers to take our business to the next level. I am confident in working with BlkBox team because I know they are ahead of the game in terms of  implementing the latest industry learnings into their platform.</p>
                <p className='fz-16 fw-600 pb-1'>Daphne Nguyen</p>
                <p className='fz-12 color-grey'>Sr. User Acquisition Manager, Glu</p>
            </div>
            <div className='carousel-item-box'>
                <img src={process.env.PUBLIC_URL + '/images/home/quote.png'} className='quotes' alt='ds' />
                <p className='color-grey fz-12  quote-heading'>BLKBOX is a data-driven platform that highlights components of digital advertising that often go unchecked. With the vast information available on Facebook, it’s easy to lose track of effective media buying strategies that can impact your performance. BLKBOX’s bidding & budgeting algorithms makes it easy to manage the volatility on Facebook.</p>
                <p className='fz-16 fw-600 pb-1'>Alejandra Segovia</p>
                <p className='fz-12 color-grey'>User Acquisition Specialist, Glu</p>
            </div>
            <div className='carousel-item-box'>
                <img src={process.env.PUBLIC_URL + '/images/home/quote.png'} className='quotes' alt='ds' />
                <p className='color-grey fz-12  quote-heading'>I enjoy working with the BlkBox team because I can trust their depth of knowledge in all things marketing. Their sophisticated platform allows my team to spend less time building campaigns and more time being strategic thinkers to take our business to the next level. I am confident in working with BlkBox team because I know they are ahead of the game in terms of  implementing the latest industry learnings into their platform.</p>
                <p className='fz-16 fw-600 pb-1'>Daphne Nguyen</p>
                <p className='fz-12 color-grey'>Sr. User Acquisition Manager, Glu</p>
            </div>
            <div className='carousel-item-box'>
                <img src={process.env.PUBLIC_URL + '/images/home/quote.png'} className='quotes' alt='ds' />
                <p className='color-grey fz-12  quote-heading'>BLKBOX has been a key partner in driving success for the launch of Live Play Mobile! The platform is able to acquire high-value users that hit our D1 and D7 targets, and we successfully increased our budget 3x within our key markets!  I'm excited about the tech innovation that the team continues to build within the performance marketing space.</p>
                <p className='fz-16 fw-600 pb-1'>Stuart Lewis-Smith</p>
                <p className='fz-12 color-grey'>CEO, Live Play Mobile</p>
            </div>

        </Carousel>
    )
}
