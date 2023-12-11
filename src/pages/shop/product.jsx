import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data
    const { addToCart, removeFromCart, cartItems } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]

    const handleAddToCart = () => {
        addToCart(id)
    }

    const handleRemoveFromCart = () => {
        removeFromCart(id)
    }

    return (
        <div className="product">
            <img src={productImage} alt={productName} />
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
            </div>
            <div className="cartActions">
                {cartItemAmount > 0 && (
                    <button
                        className="removeFromCartBttn"
                        onClick={handleRemoveFromCart}
                    >
                        <span role="img" aria-label="Remove">
                            ❌
                        </span>
                    </button>
                )}
                <button className="addToCartBttn" onClick={handleAddToCart}>
                    Add To Cart{cartItemAmount > 0 && <> ({cartItemAmount})</>}
                </button>
            </div>
        </div>
    )
}
