import React, { useState } from 'react';
import ButtonClose from '../components/ButtonClose';

const Products = () => {
    const [isShow, setIsShow] = useState(false)

    const toggle = () => {
        setIsShow(!isShow)
    }

    return (
        <div className='flex justify-center pt-20'>
            <div className='m-16'>
                <h1 className='font-bold text-3xl'>Products</h1>
                <h3 className='pt-4'>Take a look at our products</h3>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <div className='cards-product'>
                    <img 
                        src='https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/cheese.png' 
                        alt='cheese'
                        className='img-product'
                    />
                    <div className='inline-block ml-8'>
                        <div className='inline-block'>
                            <h3 className='name-product'>Cheese</h3>  
                        </div>
                        {isShow && <ButtonClose isShow={isShow} toggle={toggle} />}
                        <p>200g cheese block</p>
                        <div className='ml-48 mt-4'>
                            <button className='btn-price-product' onClick={() => setIsShow(true)}>$10</button>
                        </div>
                    </div>
                </div>
                <div className='cards-product'>
                    <img 
                        src='https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/milk.png' 
                        alt='milk'
                        className='img-product'
                    />
                    <div className='inline-block ml-8'>
                        <h3 className='name-product'>Milk</h3>
                        <p>200ml milk bottle</p>
                        <div className='ml-48 mt-4'>
                            <button className='btn-price-product'>$5</button>
                        </div>
                    </div>
                </div>
                <div className='cards-product'>
                    <img 
                        src='https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/tomato.png' 
                        alt='tomato'
                        className='img-product'
                    />
                    <div className='inline-block ml-8'>
                        <h3 className='name-product'>Tomato</h3>
                        <p>1 piece of tomato</p>
                        <div className='ml-48 mt-4'>
                            <button className='btn-price-product'>$2.75</button>
                        </div>
                    </div>
                </div>
                <div className='cards-product'>
                    <img 
                        src='https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/pineapple.png' 
                        alt='pineapple'
                        className='img-product'
                    />
                    <div className='inline-block ml-8'>
                        <h3 className='name-product'>Pineapple</h3>
                        <p>500g pineapple</p>
                        <div className='ml-48 mt-4'>
                            <button className='btn-price-product'>$3.25</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default Products;
