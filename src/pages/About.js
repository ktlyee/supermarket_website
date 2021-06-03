import React from 'react';

const About = () => {
    return (
        <div className='flex justify-center pt-20'>
            <div className='w-1/2 mt-8'>
                <h1 className='font-bold text-3xl'>About Us</h1>
                <h3 className='pt-4'>We started operations in 2020. We guarantee fresh produce. Save time by shopping on our app and we'll deliver the products right to your home.</h3>
            </div>
            <div>
                <img 
                    src='https://www.jessicagavin.com/wp-content/uploads/2020/12/keto-diet-4.jpg' 
                    alt='food'
                    className='rounded h-72 shadow-2xl'
                />
            </div>
        </div>
    )
}

export default About;
