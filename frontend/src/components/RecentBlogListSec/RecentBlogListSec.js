import React, { useEffect, useState } from 'react'
import moment from 'moment'
import './RecentBlogListSec.css'
import fetch from 'isomorphic-fetch'
import { Link } from 'react-router-dom';
import BlogListBox from '../BlogListBox/BlogListBox';



export default function RecentBlogListSec() {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:1337/api/blogs?populate=*`)
            .then((response) => response.json())
            .then((blog) => {
                setBlog(blog.data);
            });
    }, []);

    console.log(blog)
    return (
        <>
            {blog.map((data, key) => {
                const urld = data.attributes.featuredimage.data.attributes.url;
                return (<React.Fragment>
                    <div className='col-lg-4 mb-5' key={key}>
                        <Link to={`/single-blog/${data.id}`} className='text-decoration-none'>
                            <BlogListBox blogimg={'http://localhost:1337' + urld} title={data.attributes.blogtitle} date={moment.utc(data.attributes.createdAt).format('LL')} readTime="6 min read" />
                        </Link>

                    </div>
                </React.Fragment>)
            })}



        </>
    )
}
