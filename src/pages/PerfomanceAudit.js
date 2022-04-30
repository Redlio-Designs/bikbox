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


// components end

export default function PerfomanceAudit() {
    return (
        <>


            <div className='perfomance-audit'>
                <div className='container'>
                    <NavigationMenu />
                    <BackTop />
                    <div className='row'>
                        <div className='col-lg-6 align-self-center'>
                            <PerfomanceMarketing title="Unleash your Performance" gtext="Marketing"
                                description="No spreadsheets, no clutter. On-target performance. Push your marketing spend efficiency by 50% with our 360 degree Performance Audit." />
                            <UnlockWin button="Unlock Winning Creatives Today" />
                        </div>
                        <div className='col-lg-6'>
                            <SingleImage imgPath={process.env.PUBLIC_URL + '/images/perfomance/marketing.png'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <section className='geographic'>
                    <div className='row'>
                        <div className='col-lg-6 align-self-center geo-text'>
                            <SemiTitleWithDescription title="Geographical Performance Audit" desc="Audit your ads delivery by country/region. BLKBOX highlights countries and regions that are above and below your target. Identify untapped geographical opportunities, improve universal performance, and maximize creative success." />
                        </div>
                        <div className='col-lg-6'>
                            <SingleImage imgPath={process.env.PUBLIC_URL + '/images/perfomance/geographical.png'} />

                        </div>
                    </div>
                </section>

                <section className='optimize-budget'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <SingleImage imgPath={process.env.PUBLIC_URL + '/images/perfomance/optimize.png'} />
                        </div>
                        <div className='col-lg-6 align-self-center opti-text'>
                            <SemiTitleWithDescription title="Optimization, Bidding, and Budgeting Audit" desc="Align your ad spend to the best opportunities with detailed chart views. Get account-specific recommendations around MAI vs AEO vs VO, Autobid vs Bid Cap vs Cost Cap vs MinRoas." />
                        </div>
                    </div>
                </section>
                <section className='audience-audit'>
                    <div className='row'>
                        <div className='col-lg-6 align-self-center audi-text'>
                            <SemiTitleWithDescription title="Audience Audit" desc="Identify audiences that produce the best results across different timeframes and regions. BLKBOX provides a detailed audit across each of your seed lists, enabling you to scale your SDK based audiences or custom audiences." />
                        </div>
                        <div className='col-lg-6'>
                            <SingleImage imgPath={process.env.PUBLIC_URL + '/images/perfomance/audience-audit.png'} />
                        </div>
                    </div>
                </section>
                <section className='creative-spec'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <SingleImage imgPath={process.env.PUBLIC_URL + '/images/perfomance/creative-spec.png'} />
                        </div>
                        <div className='col-lg-6 align-self-center cre-text'>
                            <SemiTitleWithDescription title="Creative Spec & Dimension Audit" desc="Gain insights into your top performing creative types and dimensions. Whether it’s an image or a video, in portrait or landscape, BLKBOX identifies what creatives are working best for your ad account." />
                        </div>
                    </div>
                </section>


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
            </div><Footer />

        </>
    )
}