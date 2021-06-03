import React from 'react';

const Home = () => {
    return ( 
            <div className='flex justify-center pt-20'>
                <div className='w-1/2 mt-8'>
                    <h1 className='font-bold text-3xl'>Online Shopping simplified</h1>
                    <h3 className='pt-4'>Order your groceries from SuperM with our easy to use app, and get your products delivered straight to your doorstep.</h3>
                    <button className='bg-green-700 text-white px-8 py-3 rounded font-semibold text-sm mt-8'>Start shopping</button>
                </div>
                <div>
                    <img 
                        src='https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/news/market-trends/meat-free-convenience-and-traceability-ehl-ingredients-reveals-2020-food-trends/10511260-1-eng-GB/Meat-free-convenience-and-traceability-EHL-Ingredients-reveals-2020-food-trends.jpg' 
                        alt='food'
                        className='rounded h-56 shadow-2xl'
                    />
                </div>
            </div>
    )
}

export default Home;
