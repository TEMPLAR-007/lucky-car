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

                    <div className='mt-5'>
                        <h3>How React Works?</h3>
                        <p>React is a library of JS and also a tool to make coading easier, by addressing a lot of the problems scalable apps face. You can run this library and can use it in the browser. You can run a Node app in it. It’s actually for a framework to write code that is performance minded, organized, and scalable. React's purpose is to create a view that can automatically updates itself based on your application's data and browser</p>
                        <br />
                        <h3>Difference between state and props?</h3>
                        <div className='mt-5'>
                            <ul>
                                <h4>PROPS:</h4>
                                <li>The Data is passed from one component to another.</li>
                                <li>It is Immutable (cannot be modified).</li>
                                <li>Props can be used with state and functional components.</li>
                                <li>Props are read-only.</li>
                            </ul>
                            <ul>
                                <h4>STATE</h4>
                                <li>The Data is passed within the component only.</li>
                                <li>It is Mutable ( can be modified).</li>
                                <li>State can be used only with the state components/class component (Before 16.0).</li>
                                <li>State is both read and write.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default AllProducts;