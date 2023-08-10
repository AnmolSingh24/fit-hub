import React from 'react';
import './Blogs.css'

const Blogs = () => {

    const blog = [
        {
            id: 1,
            title: '5 Essential Yoga Poses for Flexibility',
            image: 'https://res.cloudinary.com/djdblxcxt/image/upload/v1691653849/blog-img-1_zytsx7.jpg',
            excerpt: 'Discover the key yoga poses that can help improve your flexibility and overall well-being.'
        },
        {
            id: 2,
            title: 'High-Intensity Interval Training (HIIT) Guide',
            image: 'https://res.cloudinary.com/djdblxcxt/image/upload/v1691654671/blog-img-2_vkpul5.jpg',
            excerpt: 'Learn about the benefits of HIIT and how to incorporate it into your fitness routine.'
        },
        {
            id: 3,
            title: 'Nutrition Tips for Optimal Workout Performance',
            image: 'https://res.cloudinary.com/djdblxcxt/image/upload/v1691654990/blog-img-3_vrrgn7.jpg',
            excerpt: 'Fuel your body with the right nutrients to enhance your workout performance and recovery.'
        },
    ];

    return (
        <div className='title'>
            <h1>Blogs</h1>
            <div className="blog-container">
                {blog.map((blog) => (
                    <div className="card" key={blog.id}>
                        <img src={blog.image} alt={blog.title} style={{ height: '250px' }} />
                        <div className="card-content">
                            <h2>{blog.title}</h2>
                            <p>{blog.excerpt}</p>
                            <a href={`blog/${blog.id}`} className="btn">
                                Read More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Blogs;