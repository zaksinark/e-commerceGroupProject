import { useState, useEffect } from 'react';
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
} from '@stripe/react-stripe-js';
import axios from 'axios';
import { PaymentElement } from '../assets/PaymentStyles';
import {useNavigate} from 'react-router-dom';

const PaymentForm = () => {
    const [error, setError] = useState(null);
    const [paymentStatus, setPaymentStatus] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const nav = useNavigate();

    useEffect(() => {
        if (paymentStatus === 'success') {
            nav("/");
        }
    }, [paymentStatus, nav]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        if (!stripe || !elements) {
            return;
        }

        const cardNumberElement = elements.getElement(CardNumberElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardNumberElement,
        });

        if (error) {
            setError(error.message);
        } else {
            const response = await axios.post('/api/cart', { paymentMethodId: paymentMethod.id });

            if (response.data.success) {
                setPaymentStatus('success');
            } else {
                setError('Payment failed. Please try again.');
            }
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Card Number
                <CardNumberElement options={PaymentElement} />
            </label>
            <label>
                Expiration Date
                <CardExpiryElement options={PaymentElement} />
            </label>
            <label>
                Security Code
                <CardCvcElement options={PaymentElement} />
            </label>
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
            {error && <div>{error}</div>}
        </form>
    );
};

export default PaymentForm;