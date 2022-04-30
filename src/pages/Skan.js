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
                                description="Stay ahead of the curve with BLKBOX. We are a team of ex-Facebook specialists who led the SKAN Initiative and implemented Schema Across Gaming, Fintech, and Marketplace Apps." />
                            <UnlockWin button="Unlock Winning Creatives Today" />
                        </div>
                        <div className='col-lg-6'>
                            <SingleImage imgPath={process.env.PUBLIC_URL + '/images/skan/data-science.png'} />
                        </div>
                    </div>
                </div>
            </div>
                <div className="container">
                <section className='geographic'>
                    <div className='row'>
                        <div className='col-lg-6 align-self-center geo-text'>
                            <SemiTitleWithDescription title="Data Science Models to Identify High-value Events" desc="Powered by our Machine Learning frameworks, we can analyze current app activity, discover event correlations and purchase patterns of current and future user values." />
                        </div>
                        <div className='col-lg-6'>
                            <SingleImage imgPath={process.env.PUBLIC_URL + '/images/skan/skan-facebook.png'} />

                        </div>
                    </div>
                </section>

                <section className='optimize-budget'>
                    <div className='row'>
                    <div className='col-lg-6'>
                            <SingleImage imgPath={process.env.PUBLIC_URL + '/images/skan/scaled-marketing.png'} />
                        </div>
                       <div className='col-lg-6 align-self-center opti-text'>
                            <SemiTitleWithDescription title="Implement the Optimal SKAN Schema Across Facebook" desc="We identify the right events and purchase ranges, and implement the Schema on your MMP. This will, in turn impact marketing spend across all platforms." />
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
