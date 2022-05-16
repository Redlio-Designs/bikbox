import React, { useEffect, useState } from 'react'

import BackTop from '../components/BackTop/BackTop'
import BlogListBox from '../components/BlogListBox/BlogListBox'
import Footer from '../components/Footer/Footer'
import NavigationMenu from '../components/NavigationMenu/NavigationMenu'
import TitleAndDescription from '../components/TitleAndDescription/TitleAndDescription'
import UnlockWin from '../components/UnlockWin/UnlockWin'
import fetch from 'isomorphic-fetch'
import moment from 'moment'
import { Link } from 'react-router-dom'


export default function Blog() {

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch(`http://ec2-52-53-199-151.us-west-1.compute.amazonaws.com:1337/api/articles?populate=*`)
            .then((response) => response.json())
            .then((blog) => {
                setBlog(blog.data);
            });
    }, []);

    console.log(blog)

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


                    <div className='col-lg-12 blog-left-sec'>
                        <h2 className='fz-42 fw-700 blog-list-title'>All Blogs</h2>
                        <div className='row'>

                            {blog.map((data, key) => {
                                const urld = data.attributes.image.data.attributes.url;
                                return (<React.Fragment>
                                    <div className='col-lg-4 col-md-6 mb-5' key={key}>
                                        <Link to={`/single-blog/${data.id}`} className='text-decoration-none'>
                                            <BlogListBox blogimg={'http://ec2-52-53-199-151.us-west-1.compute.amazonaws.com:1337' + urld} title={data.attributes.title} date={moment.utc(data.attributes.createdAt).format('LL')} readTime="6 min read" />
                                        </Link>

                                    </div>
                                </React.Fragment>)
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className='container blogs'>
            <section className='unlock-win'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <TitleAndDescription
                            title="Follow Our Blog"
                            desc="Enter your email address to follow this blog and receive notifications of new posts by email."
                        ></TitleAndDescription>
                    </div>
                    <div className='col-lg-8 mx-auto'>
                        <UnlockWin button="Subscribe" />
                    </div>
                </div>
            </section>
        </div>
        <Footer />
    </>
    )
}
