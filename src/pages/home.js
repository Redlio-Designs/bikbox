import React from 'react'
import Footer from '../components/Footer/Footer'
import MarketingPlatform from '../components/MarketingPlatform/MarketingPlatform'
import SingleImage from '../components/SingleImage/SingleImage'
import TitleAndDescription from '../components/TitleAndDescription/TitleAndDescription'
import UnlockWin from '../components/UnlockWin/UnlockWin'


export default function Home() {
    return (
        <>

            <div className='container'>

                {/* section 2 built by fox */}
                <section className='facebook-specialist'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <TitleAndDescription
                                title="Built by Ex-Facebook specialists with over $1B in managed spend"
                                desc="Blkbox is proud to be a leader in AI driven performance marketing and is featured and recognized by the best in the industry." />
                            <div className='row justify-content-around'>
                                <div className='col-lg-3'>
                                    <SingleImage imgPath={process.env.PUBLIC_URL, '/images/home/meta.png'} />
                                </div>
                                <div className='col-lg-3'>
                                    <SingleImage imgPath={process.env.PUBLIC_URL, '/images/home/forbes.png'} />
                                </div>
                                <div className='col-lg-3'>
                                    <SingleImage imgPath={process.env.PUBLIC_URL, '/images/home/yahoo.png'} />
                                </div>
                                <div className='col-lg-3'>
                                    <SingleImage imgPath={process.env.PUBLIC_URL, '/images/home/market-watch.png'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='marketing-platform'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <TitleAndDescription 
                        
                        title="A True Marketing Platform for Everyone"
                        desc="BLKBOX’s superior campaign structure and advanced analytics drives your business performance at scale."
                        ></TitleAndDescription>
                    </div>
                    <div className='col-lg-4'>
                       <div className='business-data'>
                           <MarketingPlatform
                           image={process.env.PUBLIC_URL, '/images/home/executive.svg'}
                         
                           heading="Business Executives"
                           description="Get a 360-degree view across your ad accounts with our Executive Dashboard."
                           ></MarketingPlatform>
                       </div>
                       </div>
                       <div className='col-lg-4'>
                       <div className='business-data'>
                           <MarketingPlatform
                                image={process.env.PUBLIC_URL, '/images/home/expert.svg'}
                           heading="Marketing Experts"
                           description="Leverage Marketing API insights, build tailored campaigns designed to hit your targets."
                           ></MarketingPlatform>
                       </div>
                    </div>
                    <div className='col-lg-4'>
                       <div className='business-data'>
                           <MarketingPlatform
                             image={process.env.PUBLIC_URL, '/images/home/agencies.svg'}
                           heading="Digital Agencies"
                           description="Deploy and distribute professional analytics to your clients across business units."
                           ></MarketingPlatform>
                       </div>
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
                    <UnlockWin button="Unlock Performance Today - For Free!"/>
                    </div>
                    </div>
                </section>
                </div>
                <Footer/>
          
        </>
    )
}
