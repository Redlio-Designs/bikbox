import React, { useEffect, useState } from 'react'
import fetch from 'isomorphic-fetch'
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';

import './BlogAuthor.css'


export default function BlogAuthor() {



    let { id } = useParams();

    const [blog, setBlog] = useState([]);
    const [authr, setAuthr] = useState([])

    useEffect(() => {
        fetch(`http://ec2-52-53-199-151.us-west-1.compute.amazonaws.com:1337/api/articles/${id}?populate=*`)
            .then((response) => response.json())
            .then((blog) => {
                setBlog(blog.data.attributes);
                setAuthr(blog.data.attributes.author.data.attributes)
            });

    }, []);

    return (
        <>
            <div className='blog-author-sec d-flex'>
                <div className='img-sec'>
                    <img src={process.env.PUBLIC_URL + '../images/blog/avtar.png'} className='rounded-circle' />
                </div>
                <div className='text-sec'>
                    <p className='fz-18 fw-700 author-name'>{authr.name}</p>
                    <p className='fz-15 fw-500 publish-time color-grey'>{moment.utc(blog.createdAt).format('LL')}</p>
                </div>
            </div>
        </>
    )
}
