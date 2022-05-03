import React from 'react'
// components
import SingleImage from '../components/SingleImage/SingleImage'
import SemiTitleWithDescription from '../components/SemiTitleWithDescription/SemiTitleWithDescription'
import TitleAndDescription from '../components/TitleAndDescription/TitleAndDescription'
import ThemeButton from '../components/ThemeButton/ThemeButton'
import IconBoxWithImage from '../components/IconBoxWithImage/IconBoxWithImage'
import NavigationMenu from '../components/NavigationMenu/NavigationMenu'
import HomeHeroSection from '../components/HomeHeroSection/HomeHeroSection'
import UnlockWin from '../components/UnlockWin/UnlockWin'
import Footer from '../components/Footer/Footer'
import MarketingPlatform from '../components/MarketingPlatform/MarketingPlatform'
import HomeCarousel from '../components/HomeCarousel/HomeCarousel'

import BackTop from '../components/BackTop/BackTop'
import HomeHeroImage from '../components/HomeHeroImage/HomeHeroImage'



// components end

export default function Home() {
    return (
        <>


            <div className='bg-light-blue'>
                <div className='container'>
                    <NavigationMenu />
                    <div className='row'>
                        <div className='col-lg-12'>
                            <HomeHeroSection />
                            <div className='home-unlock d-block mx-auto'>
                                <UnlockWin button="Unlock Performance Today - For Free!" />
                            </div>
                            <div className='bottom-hero-img text-center'>
                                <HomeHeroImage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <BackTop />
                {/* section 2 built by fox */}
                <section className='facebook-specialist home-facebook-specialist'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <TitleAndDescription
                                title="Built by Ex-Facebook specialists with over $1B in managed spend"
                                desc="Blkbox is proud to be a leader in AI driven performance marketing and is featured and recognized by the best in the industry." />
                            <div className='row justify-content-around'>
                                <div className='col-lg-3 col-md-3 col-sm-3 col-6 text-center'>
                                    <SingleImage imgPath={process.env.PUBLIC_URL + '/images/home/meta.png'} />
                                </div>
                                <div className='col-lg-3 col-md-3 col-sm-3 col-6 text-center'>
                                    <SingleImage imgPath={process.env.PUBLIC_URL + '/images/home/forbes.png'} />
                                </div>
                                <div className='col-lg-3 col-md-3 col-sm-3 col-6 text-center'>
                                    <SingleImage imgPath={process.env.PUBLIC_URL + '/images/home/yahoo.png'} />
                                </div>
                                <div className='col-lg-3 col-md-3 col-sm-3 col-6 text-center'>
                                    <SingleImage imgPath={process.env.PUBLIC_URL + '/images/home/market-watch.png'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* section 3 our products */}
                <section className='home-our-products'>
                    <TitleAndDescription title="Our Product" desc="Access in-depth analytics and insights on the Marketing API and reach high-value audiences worldwide." />
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 align-self-center'>
                            <IconBoxWithImage path={process.env.PUBLIC_URL + '/images/home/wining-icon.png'} />
                            <SemiTitleWithDescription title="Find Winning Creatives" desc="Discover the best colors, compositions, keywords, objects, and more. Get high-quality insights by audience, product and many more!" />
                            <ThemeButton text="Learn more" />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 align-self-center' >
                            <SingleImage imgPath={process.env.PUBLIC_URL + '/images/home/product-side-image.png'} />
                        </div>
                    </div>
                </section>

                {/* section 4 our products */}
                <section className='home-our-products in-depth'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 align-self-center' >
                            <SingleImage imgPath={process.env.PUBLIC_URL + '/images/home/product-side-image-section-three.png'} />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 align-self-center'>
                            <IconBoxWithImage path={process.env.PUBLIC_URL + '/images/home/ic_marketing_statistics.png'} />
                            <SemiTitleWithDescription title="In-Depth Performance Audit" desc="Analyze historical data, find opportunities for improvement, and increase your marketing spend efficiency by 50%." />
                            <ThemeButton text="Learn more" />
                        </div>
                    </div>
                </section>

                {/* section 5 our products */}
                <section className='home-our-products'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 align-self-center'>
                            <IconBoxWithImage path={process.env.PUBLIC_URL + '/images/home/monitoring-icon.png'} />
                            <SemiTitleWithDescription title="24/7 Monitoring" desc="Detect optimization opportunities and issues as they arise. Our 24/7 monitoring drastically reduces the risk to your marketing campaigns." />
                            <ThemeButton text="Learn more" />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 align-self-center' >
                            <SingleImage imgPath={process.env.PUBLIC_URL + '/images/home/product-side-image-section-four.png'} />
                        </div>

                    </div>
                </section>

                {/* section 6 Marketing Platform */}
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
                                    image={process.env.PUBLIC_URL + '/images/home/executive.svg'}

                                    heading="Business Executives"
                                    description="Get a 360-degree view across your ad accounts with our Executive Dashboard."
                                ></MarketingPlatform>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='business-data'>
                                <MarketingPlatform
                                    image={process.env.PUBLIC_URL + '/images/home/expert.svg'}
                                    heading="Marketing Experts"
                                    description="Leverage Marketing API insights, build tailored campaigns designed to hit your targets."
                                ></MarketingPlatform>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='business-data'>
                                <MarketingPlatform
                                    image={process.env.PUBLIC_URL + '/images/home/agencies.svg'}
                                    heading="Digital Agencies"
                                    description="Deploy and distribute professional analytics to your clients across business units."
                                ></MarketingPlatform>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            {/* section 7 Carousel */}
            <section className='home-carousel-section'>
                <div className='container'>
                    <h2 className='fz-48 fw-700 text-center pb-5'>Our Customers Love Us</h2>
                    <HomeCarousel />
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
