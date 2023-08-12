import React from 'react';
import './Pricing.css'

const Price = ({ title, price, t1, t2, t3, t4, t5, btn }) => {
    return (
        <div className='plans-info'>
            <h2>{title}</h2>
            <h1>{price}</h1>
            <p>{t1}</p>
            <p>{t2}</p>
            <p>{t3}</p>
            <p>{t4}</p>
            <p>{t5}</p>
            <a href='/' className='btn'>{btn}</a>
        </div>
    );
}

const Pricing = () => {
    return (
        <div className='price-title'>
            <h1>Pricing Plans</h1>

            <div className='price-plans'>
                <Price title="Silver Plan" price="$50/mo" t1="Personal Training" t2="Cardio Exercise" t3="Weight Lifting" t4="Diet Plans" t5="Overall Results" btn="Get Started" />
                <Price title="Gold Plan" price="$100/mo" t1="Personal Training" t2="Cardio Exercise" t3="Weight Lifting" t4="Diet Plans" t5="Overall Results" btn="Get Started" />
                <Price title="Diamond Plan" price="$150/mo" t1="Personal Training" t2="Cardio Exercise" t3="Weight Lifting" t4="Diet Plans" t5="Overall Results" btn="Get Started" />
            </div>
        </div>
    )
}
export default Pricing;