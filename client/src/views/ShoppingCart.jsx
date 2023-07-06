import { useSelector, useDispatch } from 'react-redux';
import StripeApi from '../components/StripeApi.jsx';
import QuantitySelector from '../components/QuantitySelector.jsx';
import {
    containerStyle,
    leftContainerStyle,
    quantitySelectorStyle,
    rightContainerStyle,
    productStyle,
    productImgStyle,
    productInfoStyle,
    subtotalStyle,
    imageContainerStyle,
    savedItemsContainerStyle,
    saveForLater,
    shoppingCart,
    saveForLaterTop,
    deleteItem,
    flexDeleteSaveForLater,
    stickContainer
} from '../assets/CartStyles.jsx';
import {
    removeProductFromCart,
    moveProductToSavedItemsFromCart,
    moveProductToCartFromSavedItems,
} from '../components/ReduxActions';

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const savedItems = useSelector((state) => state.savedItems);

    const subtotal = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

    const moveToSavedItems = (product) => {
        dispatch(moveProductToSavedItemsFromCart(product));
    };

    const moveToCart = (product) => {
        dispatch(moveProductToCartFromSavedItems(product));
    };

    return (
        <div>
            <div style={stickContainer}>
                <StripeApi products={cart} subtotal={subtotal} />
            </div>
            <div style={containerStyle}>
                <div style={leftContainerStyle}>
                    <h2 style={shoppingCart}> 🛒 Shopping Cart</h2>
                    <div style={rightContainerStyle}>
                    </div>
                    <div>
                        {cart.map((product) => (
                            <div key={product.id} style={productStyle}>
                                <div style={imageContainerStyle}>
                                    <img src={product.image} alt={product.title} style={productImgStyle} />
                                </div>
                                <div style={productInfoStyle}>
                                    <p>{product.title}</p>
                                    <p>${product.price.toFixed(2)}</p>
                                </div>
                                <div style={quantitySelectorStyle}>
                                    <QuantitySelector initialQuantity={product.quantity} />
                                    <div style={flexDeleteSaveForLater}>
                                        <a href='#' style={deleteItem} onClick={() => dispatch(removeProductFromCart(product.id))}>Delete</a>
                                        <a href='#' style={saveForLaterTop} onClick={() => moveToSavedItems(product)}>
                                            Save Item
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p style={subtotalStyle}>Subtotal: ${subtotal.toFixed(2)}</p>
                </div>
                <h3 style={saveForLater}>Save for Later Items</h3>
                <div style={savedItemsContainerStyle}>
                    <div>
                        {savedItems.map((product) => (
                            <div key={product.id} style={productStyle}>
                                <div style={imageContainerStyle}>
                                    <img src={product.image} alt={product.title} style={productImgStyle} />
                                </div>
                                <div style={productInfoStyle}>
                                    <p>{product.title}</p>
                                    <p>${product.price.toFixed(2)}</p>
                                </div>
                                <div style={quantitySelectorStyle}>
                                    <QuantitySelector initialQuantity={product.quantity} />
                                    <button onClick={() => moveToCart(product)}>Move to Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;