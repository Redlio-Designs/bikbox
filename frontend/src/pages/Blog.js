import React from 'react'
import BackTop from '../components/BackTop/BackTop'
import BlogListBox from '../components/BlogListBox/BlogListBox'
import Footer from '../components/Footer/Footer'
import NavigationMenu from '../components/NavigationMenu/NavigationMenu'
import TitleAndDescription from '../components/TitleAndDescription/TitleAndDescription'
import UnlockWin from '../components/UnlockWin/UnlockWin'
import { GET_BLOG_POSTS } from '../actions/index'
import { useQuery } from "@apollo/client";
import InputBox from '../components/InputBox/InputBox'
import axios from 'axios'


export default function Blog() {


    const { loading, error, data } = useQuery(GET_BLOG_POSTS);
    console.log(data);

    // const postsRes = axios.get("http://localhost:1337/api/posts/");
    // console.log('this is data:', postsRes)




    return (
        <>
            <div className='blog-dt perfomance-audit'>
                <div className='container'>
                    <NavigationMenu />
                    <BackTop />
                    <div className='row blog-header'>
                        <div className='col-lg-12 text-center'>
                            <h1>BLKBOX <span className='blue-text'>Blogs</span></h1>
                        </div>
                        <div className='right-dot'>
                            <img classname='right-dot' src={process.env.PUBLIC_URL + './images/blog/blue-dots.png'} />
                        </div>
                        <div className='left-dot'>
                            <img classname='right-dot' src={process.env.PUBLIC_URL + './images/blog/blue-dots.png'} />
                        </div>
                    </div>
                </div>
            </div>


            <div className='container'>
                <div className='blog-list-section'>
                    <div className='row'>


                        <div className='col-lg-8 blog-left-sec'>
                            <h2 className='fz-42 fw-700 blog-list-title'>All Blogs</h2>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <BlogListBox blogimg={process.env.PUBLIC_URL + './images/blog/blog-img-1.jpg'} title="4 Tips to Increase Mobile App Downloads from Your Facebook" date="Nov 9, 2021" readTime="6 min read" />
                                </div>
                                <div className='col-lg-6 mb-5'>
                                    <BlogListBox blogimg={process.env.PUBLIC_URL + './images/blog/blog-img-2.jpg'} title="5 Ways to Increase Your ROAS With Facebook Ads" date="Nov 9, 2021" readTime="6 min read" />
                                </div>
                                <div className='col-lg-6'>
                                    <BlogListBox blogimg={process.env.PUBLIC_URL + './images/blog/blog-img-3.jpg'} title="6 Ways to Increase User Acquisition through Facebook.." date="Nov 9, 2021" readTime="6 min read" />
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 blog-right-sec'>
                            <InputBox />
                        </div>

                    </div>
                </div>

            </div>

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
