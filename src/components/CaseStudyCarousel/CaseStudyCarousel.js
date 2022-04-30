import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CaseStudyBox from './CaseStudyBox';


export default function CaseStudyCarousel() {
    return (
        <>
            <Carousel
                additionalTransfrom={0}
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
                <CaseStudyBox imgPath={process.env.PUBLIC_URL + '/images/casestudy/casestudy-1.jpg'} title="Case Study Title" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra." />
                <CaseStudyBox imgPath={process.env.PUBLIC_URL + '/images/casestudy/casestudy-2.jpg'} title="Case Study Title" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra." />
                <CaseStudyBox imgPath={process.env.PUBLIC_URL + '/images/casestudy/casestudy-3.jpg'} title="Case Study Title" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra." />
                <CaseStudyBox imgPath={process.env.PUBLIC_URL + '/images/casestudy/casestudy-1.jpg'} title="Case Study Title" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra." />

            </Carousel>
        </>
    )
}
