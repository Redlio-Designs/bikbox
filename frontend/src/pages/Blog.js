import React, { useEffect, useState } from 'react'

import BackTop from '../components/BackTop/BackTop'
import BlogListBox from '../components/BlogListBox/BlogListBox'
import Footer from '../components/Footer/Footer'
import NavigationMenu from '../components/NavigationMenu/NavigationMenu'
import TitleAndDescription from '../components/TitleAndDescription/TitleAndDescription'
import UnlockWin from '../components/UnlockWin/UnlockWin'
import InputBox from '../components/InputBox/InputBox'
import fetch from 'isomorphic-fetch'
import moment from 'moment'
import { Link } from 'react-router-dom'

export default function Blog() {

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch('http://localhost:1337/api/blogs')
            .then((response) => response.json()) //2
            .then((blog) => {
                setBlog(blog.data); //3
            });
    }, []);

    console.log('lets see', blog)


    return (<>

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

                            {blog.map((data) => {
                                return (<React.Fragment>
                                    <div className='col-lg-6'>
                                        <Link to={`/single-blog/${data.id}`} className='text-decoration-none'>

                                            <BlogListBox blogimg={process.env.PUBLIC_URL + './images/blog/blog-img-1.jpg'} title={data.attributes.blogtitle} date={moment.utc(data.attributes.createdAt).format('LL')} readTime="6 min read" />
                                        </Link>

                                    </div>
                                </React.Fragment>)
                            })}
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
