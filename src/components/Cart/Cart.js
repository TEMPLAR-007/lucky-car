import React from 'react';

const Cart = (props) => {
    const { img, name } = props.item;
    return (
        <div className="container mt-3">
            <div className="row d-flex align-items-center">
                <div className="col">
                    <img style={{ height: "60px", width: "100px" }} src={img} alt="" />
                </div>
                <div className="col">
                    <h4>{name}</h4>
                </div>
            </div>
        </div>
    );
};

export default Cart;