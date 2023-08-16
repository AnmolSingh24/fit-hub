import React from 'react';
import './Features.css'

const Box = ({ img, title, text, btn }) => {
    return (
        <div className="box">
            <div className="image">
                <img src={img[0]} alt="feature-img" />
            </div>
            <div className="content">
                <img src={img[1]} alt="feature-icon" />
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="/" className="btn">{btn}</a>
            </div>
        </div>
    );
}

const Second = ({ img, title, text, btn }) => {
    return (
        <div className="second">
            <div className="image">
                <img src={img[0]} alt="feature-img" />
            </div>
            <div className="content">
                <img src={img[1]} alt="feature-icon" />
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="/" className="btn">{btn}</a>
            </div>
        </div>
    );
}

const Features = () => {
    return (
        <div className='feature-title'>
            <h1>Gym Features</h1>

            <div className="box-container">

                <Box img={['https://res.cloudinary.com/djdblxcxt/image/upload/v1691669759/f-img-1_oqjox3.jpg', 'https://res.cloudinary.com/djdblxcxt/image/upload/v1691671367/icon-1_kqzmbu.png']}
                    title="Body Building"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, atque."
                    btn="Read More"
                />

                <Second img={['https://res.cloudinary.com/djdblxcxt/image/upload/v1691669894/f-img-2_xxkxi5.jpg', 'https://res.cloudinary.com/djdblxcxt/image/upload/v1691671430/icon-2_ifgugb.png']}
                    title="Gym For Men"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, atque."
                    btn="Read More"
                />

                <Box img={['https://res.cloudinary.com/djdblxcxt/image/upload/v1691669925/f-img-3_jur3ec.jpg', 'https://res.cloudinary.com/djdblxcxt/image/upload/v1691671467/icon-3_yvxitp.png']}
                    title="Gym For Women"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, atque."
                    btn="Read More"
                />
            </div>
        </div>
    )
}
export default Features;