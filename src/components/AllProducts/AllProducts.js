import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './AllProducts.css'

const AllProducts = () => {

    const [cars, setCars] = useState([]);
    const [cart, setCart] = useState([]);


    const addToCart = (car) => {
        if (cart.length === 4) {
            alert("Can't select more than 4 item")
        }
        else {
            const newCart = [...cart, car];
            setCart(newCart);
        }

    };

    const removeItem = () => {
        setCart([]);
    };



    useEffect(() => {
        fetch('cars.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    return (
        <div>
            <div className="row">
                <div className="col-sm-9 product-section">
                    <div className="row container">
                        {
                            cars.map(car => <Product
                                car={car}
                                key={car.id}
                                addToCart={addToCart}
                            ></Product>)
                        }
                    </div>
                </div>


                <div className="col-sm-3 cart-section mt-5 shadow-lg p-3 mb-5 bg-body rounded">
                    <h1 className='text-warning'>Cart List</h1>
                    {
                        cart.map(item => <Cart
                            item={item}
                            key={item.id}
                        ></Cart>)
                    }
                    <button className='random-btn mt-4' >random selection</button>
                    <br />
                    <button className='remove-btn mt-3' onClick={() => { removeItem(cart) }}>Remove All</button>
                </div>
            </div >
        </div >
    );
};

export default AllProducts;