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
import EnterpriseQuote from '../components/EnterpriseQuote/EnterpriseQuote'
import CaseStudyCarousel from '../components/CaseStudyCarousel/CaseStudyCarousel'



export default function EnterpriseLanding() {
    return (
        <>
            <div className='perfomance-audit'>
                <div className='container'>
                    <NavigationMenu />
                    <BackTop />
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12 align-self-center'>
                            <PerfomanceMarketing title="Performance Marketing, Built for" gtext="Enterprise Advertisers"
                                description="Leverage Facebook expertise to scale your ad spend profitably." />
                            <UnlockWin button="Unlock Winning Creatives Today" />
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                           <div className='landing-hero'>
                            <SingleImage imgPath={process.env.PUBLIC_URL + '/images/EnterpriseLanding/landing-hero.png'} />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <section className='quote-for-enterprise'>
                    <EnterpriseQuote />
                </section>
                <section className='geographic'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 align-self-center geo-text'>
                            <SemiTitleWithDescription title="Creative Science"
                                desc="Creatives drive performance. Using advanced computer vision, and predictive models, we can share why an ad becomes a winner, while others fail. Combined with our inside knowledge of the Facebook Ads Auction, you have a winning combination that can scale your ad spend profitably!" />
                        </div>
                        <div className='col-lg-6 col-md-6 co-sm-6 align-self-center'>
                            <SingleImage imgPath={process.env.PUBLIC_URL + '/images/EnterpriseLanding/landing-section-2.png'} />

                        </div>
                    </div>
                </section>

                <section className='optimize-budget'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 align-self-center'>
                            <SingleImage imgPath={process.env.PUBLIC_URL + '/images/EnterpriseLanding/landing-section-3.png'} />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 align-self-center opti-text'>
                            <SemiTitleWithDescription title="Advanced Media Planning"
                                desc="Facebook is complex, time consuming, and there's a lot to test. Having managed more than $1B in ad spend across the biggest advertisers on Facebook, we produce sophisticated campaign strategies designed to hit your KPIs. This team was responsible for growing a partner to being the 5th largest on Facebook in Q1 2020." />
                        </div>
                    </div>
                </section>
                <section className='audience-audit'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 align-self-center audi-text'>
                            <SemiTitleWithDescription title="Technical Growth Ambassadors" desc="Get the Facebook expertise to drive business growth across media buying, signal & audits, and the inner workings of the Facebook Ads Auction to unlock low-hanging ROAS opportunities for scaled performance!" />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 align-self-center'>
                            <SingleImage imgPath={process.env.PUBLIC_URL + '/images/EnterpriseLanding/landing-section-3.png'} />
                        </div>
                    </div>
                </section>
            </div>


            <section className='casestudy-section'>
                <div className='container'>
                    <h2 className='fw-700 fz-48'>Case studies</h2>
                    <a href='#' className='fz-24 fw-600 external-link float-right text-primary'>View all</a>
                    <CaseStudyCarousel />
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
                            <UnlockWin button="Unlock Performance Today - For Free!" />
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
