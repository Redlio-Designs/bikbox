import React from 'react'
// components
import SingleImage from '../components/SingleImage/SingleImage'
import SemiTitleWithDescription from '../components/SemiTitleWithDescription/SemiTitleWithDescription'
import TitleAndDescription from '../components/TitleAndDescription/TitleAndDescription'
import NavigationMenu from '../components/NavigationMenu/NavigationMenu'
import UnlockWin from '../components/UnlockWin/UnlockWin'
import Footer from '../components/Footer/Footer'
import BackTop from '../components/BackTop/BackTop'
import PerfomanceMarketing from '../components/PerfomanceMarketing/PerfomanceMarketing'
// import CaseStudyCarousel from '../components/CaseStudyCarousel/CaseStudyCarousel'



export default function CreativeTesting() {
    return (
        <>
            <div className='perfomance-audit'>
                <div className='container'>
                    <NavigationMenu />
                    <BackTop />
                    <div className='row'>
                        <div className='col-lg-6 align-self-center'>
                            <PerfomanceMarketing title="Automate your " gtext="Creative Testing"
                                description="Generate 4X more creative winners with enhanced testing, creative scoring, and weekly reporting." />
                            <UnlockWin button="Unlock Winning Creatives Today" />
                        </div>
                        <div className='col-lg-6'>
                            <div className='landing-hero'>
                                <SingleImage imgPath={process.env.PUBLIC_URL + '/images/creative-testing/creative-section-hero.png'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <section className='geographic'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 align-self-center geo-text'>
                            <SemiTitleWithDescription title="3 Phased Testing"
                                desc="Increase your creative win-rates, reduce Facebook Bias and produce predictable results with BLKBOX three-phased testing." />
                            <div class="creative-point">
                                <div className='d-flex test-point'>
                                    <img src={process.env.PUBLIC_URL + './images/tick.svg'} className='me-3 tick-img' />
                                    <p className='fz-21 fw-500 color-grey'><strong className='text-black'>4x Winners </strong> vs Industry Benchmark</p>
                                </div>
                                <div className='d-flex test-point'>
                                    <img src={process.env.PUBLIC_URL + './images/tick.svg'} className='me-3 tick-img' />
                                    <p className='fz-21 fw-500 color-grey'><strong className='text-black'>6 hours </strong>time <strong className='text-black'>savings/week</strong></p>
                                </div>
                                <div className='d-flex test-point'>
                                    <img src={process.env.PUBLIC_URL + './images/tick.svg'} className='me-3 tick-img' />
                                    <p className='fz-21 fw-500 color-grey'><strong className='text-black'> 30% Reduced </strong>Costs</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 align-self-center'>
                            <SingleImage imgPath={process.env.PUBLIC_URL + '/images/creative-testing/creative-section-2.png'} />

                        </div>
                    </div>
                </section>


                <section className='optimize-budget'>
                    <div className='row col-rev'>
                        <div className='col-lg-6 col-md-6 col-sm-6 align-self-center'>
                            <SingleImage imgPath={process.env.PUBLIC_URL + '/images/creative-testing/creative-section-3.png'} />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 align-self-center opti-text'>
                            <SemiTitleWithDescription title="Computer Vision and Predictive Scoring"
                                desc="Deploy computer vision and predictive scoring to gain advanced insights, identify high performing creatives, and expand your audience." />
                            <div class="creative-point">
                                <div className='d-flex test-point'>
                                    <img src={process.env.PUBLIC_URL + './images/tick.svg'} className='me-3 tick-img' />
                                    <p className='fz-21 fw-500 color-grey'><strong className='text-black'>AI Generated </strong> Creative Tags</p>
                                </div>
                                <div className='d-flex test-point'>
                                    <img src={process.env.PUBLIC_URL + './images/tick.svg'} className='me-3 tick-img' />
                                    <p className='fz-21 fw-500 color-grey'><strong className='text-black'>Creative </strong>Predictive Scoring</p>
                                </div>
                                <div className='d-flex test-point'>
                                    <img src={process.env.PUBLIC_URL + './images/tick.svg'} className='me-3 tick-img' />
                                    <p className='fz-21 fw-500 color-grey'><strong className='text-black'> Unlock </strong>New Audiences </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className='audience-audit'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 align-self-center audi-text'>
                            <SemiTitleWithDescription title="Weekly Creative Testing Report" desc="No spreadsheets, no complicated manual analyses. Get your Weekly Creating Testing Report delivered to your inbox." />
                            <div className='creative-point'>
                                <div className='d-flex test-point'>
                                    <img src={process.env.PUBLIC_URL + './images/tick.svg'} className='me-3 tick-img' />
                                    <p className='fz-21 fw-500 color-grey'><strong className='text-black'>Weekly </strong> Creative Testing Report</p>
                                </div>
                                <div className='d-flex test-point'>
                                    <img src={process.env.PUBLIC_URL + './images/tick.svg'} className='me-3 tick-img' />
                                    <p className='fz-21 fw-500 color-grey'><strong className='text-black'>40% Increase </strong>in Creative Diversity</p>
                                </div>
                                <div className='d-flex test-point'>
                                    <img src={process.env.PUBLIC_URL + './images/tick.svg'} className='me-3 tick-img' />
                                    <p className='fz-21 fw-500 color-grey'><strong className='text-black'> 2x Increase </strong>in Scaled Performance </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 align-self-center'>
                            <SingleImage imgPath={process.env.PUBLIC_URL + '/images/creative-testing/creative-section-4.png'} />
                        </div>
                    </div>
                </section>

                <section className='optimize-budget'>
                    <div className='row col-rev'>
                        <div className='col-lg-6 col-md-6 col-sm-6 align-self-center'>
                            <SingleImage imgPath={process.env.PUBLIC_URL + '/images/creative-testing/creative-section-5.png'} />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 align-self-center opti-text'>
                            <SemiTitleWithDescription title="Case Study"
                                desc="BLKBOX automated the creative testing process for large mobile gaming partners, resulting in 5x increase in the number of creatives tested; 3.5x increase in the number of creative winners; and reduced 15 hours of testing per month down to 10mins per person!" />
                        </div>
                    </div>
                </section>
            </div>

            {/* <section className='casestudy-section'>
                <div className='container'>
                    <h2 className='fw-700 fz-48'>Case studies</h2>
                    <a href='#' className='fz-24 fw-600 external-link float-right text-primary'>View all</a>
                    <CaseStudyCarousel />
                    <div className='text-center button-for-mob-cases'>
                        <button className='btn btn-theme fz-17'>View all Case Studies</button>
                    </div>
                </div>
            </section> */}

            <div className='container'>
                <section className='unlock-win'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <TitleAndDescription
                                title="Ready to Unlock Performance today?"
                                desc="Get 60 days free access to marketing sophistication."
                            ></TitleAndDescription>
                        </div>
                        <div className='col-lg-8 mx-auto'>
                            <UnlockWin button="Unlock Performance - For Free!" />
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
