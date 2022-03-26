import React from 'react';
import './Product.css'
import { BsFillCartPlusFill } from 'react-icons/bs'

const Product = (props) => {
    const { img, name, price, avg_horsepower } = props.car;

    return (
        <div className="col-md-4 g-5">
            <div className="h-100 shadow-lg p-3 mb-5 bg-body rounded cart-card">
                <img className="card-img-top" src={img} alt="" />
                <div className="card-body">
                    <h3 className="card-title">Name: {name}</h3>
                    <div className='mt-4'>
                        <h6 className="card-text">H.P: {avg_horsepower}</h6>
                        <p className="card-text fs-4">Price: ${price}</p>
                    </div>
                    <button onClick={() => props.addToCart(props.car)} className='Add-btn mt-5'>Add to Cart <BsFillCartPlusFill className='ms-2 fs-4' /></button>
                </div>
            </div>
        </div>
    );
};

export default Product;