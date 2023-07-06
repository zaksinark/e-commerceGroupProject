import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import PropTypes from 'prop-types';
import { 
    containerStyle,
    stripeApiFixedStyle, 
    paymentProductStyle, 
    subtotalStyle 
} from '../assets/CartStyles';

const stripePromise = loadStripe('prod_Ns7OfkkcemePja');

const StripeApi = ({ products, subtotal }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={containerStyle}>
            <Button variant="contained" onClick={handleClickOpen}>
                Pay now
            </Button>
            <Dialog open={open} onClose={handleClose} style={stripeApiFixedStyle}>
                <DialogTitle>Payment Details</DialogTitle>
                <DialogContent>
                    {products.map((product) => (
                        <div key={product.id} style={paymentProductStyle}>
                            <p>
                                {product.title} x {product.quantity} - $
                                {(product.price * product.quantity).toFixed(2)}
                            </p>
                        </div>
                    ))}
                    <p style={subtotalStyle}>Subtotal: ${subtotal.toFixed(2)}</p>
                    <Elements stripe={stripePromise}>
                        <PaymentForm />
                    </Elements>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

StripeApi.propTypes = {
    products: PropTypes.array.isRequired,
    subtotal: PropTypes.number.isRequired,
};

export default StripeApi;
