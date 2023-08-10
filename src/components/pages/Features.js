import React from 'react';
import './Features.css'

const Features = () => {
    return (
        <div className='feature-title'>
            <h1>Gym Features</h1>

            <div className="box-container">
                <div className="box">
                    <div className="image">
                        <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1691669759/f-img-1_oqjox3.jpg" alt="feature-img" />
                    </div>
                    <div className="content">
                        <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1691671367/icon-1_kqzmbu.png" alt="feature-icon" />
                        <h3>Body Building</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, atque.</p>
                        <a href="/" className="btn">Read More</a>
                    </div>
                </div>

                <div className="second">
                    <div className="image">
                        <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1691669894/f-img-2_xxkxi5.jpg" alt="feature-img" />
                    </div>
                    <div className="content">
                        <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1691671430/icon-2_ifgugb.png" alt="feature-icon" />
                        <h3>Gym For Men</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, atque.</p>
                        <a href="/" className="btn">Read More</a>
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1691669925/f-img-3_jur3ec.jpg" alt="feature-img" />
                    </div>
                    <div className="content">
                        <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1691671467/icon-3_yvxitp.png" alt="feature-icon" />
                        <h3>gym for women</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, atque.</p>
                        <a href="/" className="btn">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Features;