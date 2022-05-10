import React, { useEffect, useState } from 'react'
import fetch from 'isomorphic-fetch'
import { useParams } from 'react-router-dom';
import NavigationMenu from '../components/NavigationMenu/NavigationMenu';

export default function SingleBlog() {

    let { id } = useParams();

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:1337/api/blogs/${id}`)
            .then((response) => response.json())
            .then((blog) => {
                setBlog(blog.data.attributes);
            });
    }, []);

    const [blogData, setBlogData] = useState(blog.attributes);
    console.log(blog.attributes)
    return (
        <>
            <div className='blog-dt perfomance-audit'>
                <div className='container'>
                    <NavigationMenu />
                </div>
            </div>
            <div className='blog-detailed-content'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 text-center'>
                            <h1 className='blog-title fz-28 fw-600'>{blog.blogtitle}</h1>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
