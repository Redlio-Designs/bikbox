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
import CaseStudyCarousel from '../components/CaseStudyCarousel/CaseStudyCarousel'



// components end

export default function Skan() {
    return (
        <>
            <div className='perfomance-audit'>
                <div className='container'>
                    <NavigationMenu />
                    <BackTop />
                    <div className='row'>
                        <div className='col-lg-6 align-self-center'>
                            <PerfomanceMarketing title="Reclaim your" gtext="iOS Performance"
                                description="Stay ahead of the curve with BLKBOX. We are a team of ex-Facebook specialists who led the SKAN Initiative and implemented Schema Across Gaming, Fintech, and Marketplace Apps." subdescription="Designed by a team of ex-Facebook experts who lead the SKAN task force internally at FB." />
                            <UnlockWin button="Unlock Winning Creatives Today" />
                        </div>
                        <div className='col-lg-6'>
                            <div className='landing-hero pt-3'>
                                <SingleImage imgPath={process.env.PUBLIC_URL + '/images/skan/ios-perfomance.png'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <section className='geographic'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 align-self-center geo-text'>
                            <SemiTitleWithDescription title="Data Science Models to Identify High-value Events" desc="Powered by our Machine Learning frameworks, analyze in-app activity to discover events that are correlated with your highest LTV Users." />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 align-self-center'>
                            <SingleImage imgPath={process.env.PUBLIC_URL + '/images/skan/data-science.png'} />

                        </div>
                    </div>
                </section>

                <section className='optimize-budget'>
                    <div className='row col-rev'>
                        <div className='col-lg-6 col-md-6 col-sm-6 align-self-center'>
                            <SingleImage imgPath={process.env.PUBLIC_URL + '/images/skan/skan-facebook.png'} />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 align-self-center opti-text'>
                            <SemiTitleWithDescription title="Implement the Optimal SKAN Schema" desc="BLKBOX implements the optimal conversion schema within 2 weeks, without requiring any internal resources! Improve your overall delivery by reducing CPI, while delivering higher 24 hour monetization." />
                        </div>
                    </div>
                </section>

                <section className='audience-audit'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 align-self-center geo-text'>
                            <SemiTitleWithDescription title="Schema Validation & Performance Plan" desc="Three-phased methodology to evaluate the schema & deliver a performance marketing plan." />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 align-self-center'>
                            <SingleImage imgPath={process.env.PUBLIC_URL + '/images/skan/scaled-marketing.png'} />

                        </div>
                    </div>
                </section>
            </div>

            <section className='casestudy-section'>
                <div className='container'>
                    <h2 className='fw-700 fz-48'>Case studies</h2>
                    <a href='#' className='fz-24 fw-600 external-link float-right text-primary'>View all</a>
                    <CaseStudyCarousel />
                    <div className='text-center button-for-mob-cases'>
                        <button className='btn btn-theme fz-17'>View all Case Studies</button>
                    </div>
                </div>
            </section>
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
            </div><Footer />

        </>
    )
}
