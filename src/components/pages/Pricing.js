import React from 'react';
import './Pricing.css'

const Pricing = () => {
    return (
        <div className='price-title'>
            <h1>Pricing Plans</h1>

            <div className='price-plans'>
                <div className='plans-info'>
                    <h2>Silver Plan</h2>
                    <h1>$50/mo</h1>
                    <p>Personal Training</p>
                    <p>Cardio Exercise</p>
                    <p>Weight Lifting</p>
                    <p>Diet Plans</p>
                    <p>Overall Results</p>
                    <a href='/' className='btn'>Get Started</a>
                </div>

                <div className='plans-info'>
                    <h2>Gold Plan</h2>
                    <h1>$100/mo</h1>
                    <p>Personal Training</p>
                    <p>Cardio Exercise</p>
                    <p>Weight Lifting</p>
                    <p>Diet Plans</p>
                    <p>Overall Results</p>
                    <a href='/' className='btn'>Get Started</a>
                </div>

                <div className='plans-info'>
                    <h2>Diamond Plan</h2>
                    <h1>$150/mo</h1>
                    <p>Personal Training</p>
                    <p>Cardio Exercise</p>
                    <p>Weight Lifting</p>
                    <p>Diet Plans</p>
                    <p>Overall Results</p>
                    <a href='/' className='btn'>Get Started</a>
                </div>
            </div>
        </div>
    )
}
export default Pricing;