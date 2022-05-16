import React, { useEffect, useState } from 'react'
import fetch from 'isomorphic-fetch'
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';


import NavigationMenu from '../components/NavigationMenu/NavigationMenu';
import BlogDetailTags from '../components/BlogDetailTags/BlogDetailTags';
import BlogAuthor from '../components/BlogAuthor/BlogAuthor';
import SocialShareBlog from '../components/SocialShareBlog/SocialShareBlog';
import SingleImage from '../components/SingleImage/SingleImage'
import RecentBlogListSec from '../components/RecentBlogListSec/RecentBlogListSec';
import Footer from '../components/Footer/Footer';
import UnlockWin from '../components/UnlockWin/UnlockWin';
import TitleAndDescription from '../components/TitleAndDescription/TitleAndDescription';



export default function SingleBlog() {

    let { id } = useParams();

    const [blog, setBlog] = useState([]);
    const [img, setImg] = useState([])

    useEffect(() => {
        fetch(`http://ec2-52-53-199-151.us-west-1.compute.amazonaws.com:1337/api/articles/${id}?populate=*`)
            .then((response) => response.json())
            .then((blog) => {
                setBlog(blog.data.attributes);
                setImg(blog.data.attributes.image.data.attributes)
            });

    }, []);

    return (
        <>
            <div className='blog-dt perfomance-audit'>
                <div className='container'>
                    <NavigationMenu />
                </div>
            </div>
            <div className='container'>
                <div className='blog-detailed-content '>

                    <div className='mb-5'>
                        <Link to='/blog' className='fz-20 fw-600 text-decoration-none'> <img src={process.env.PUBLIC_URL + '../images/blog/arrow-right.svg'} className='me-2' />Back to blog </Link>
                    </div>

                    <div className='row'>
                        <div className='col-lg-12 g-0'>
                            <div className='blog-featured-img'>
                                <SingleImage imgPath={'http://ec2-52-53-199-151.us-west-1.compute.amazonaws.com:1337' + img.url} />
                            </div>

                            <div className='blog-content custom-width'>

                                <h1 className='blog-title fz-38 fw-600'>{blog.title}</h1>

                                <div className='blog-authot-share-sec d-flex justify-content-between'>
                                    <BlogAuthor />
                                    <SocialShareBlog />
                                </div>
                                <div className='blog-tags d-flex mb-4'>
                                    <BlogDetailTags tagname="Technology" />
                                    <BlogDetailTags tagname="Saas Product" />

                                </div>

                                <div className='blog-content-sec'>
                                    <div className='fz-20 fw-500 color-grey'>{blog.content}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='dots-img text-center'>
                    <img src={process.env.PUBLIC_URL + '../images/blog/single-dots-row.png'} />
                </div>

                <div className='recent-blog-section'>

                    <h2 className='fz-42 fw-700 text-center pb-5'>Recent blogs</h2>
                    <div className='row'>
                        <RecentBlogListSec />
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
            </div>

            <Footer />

        </>
    )
}
