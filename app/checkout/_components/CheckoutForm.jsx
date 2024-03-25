import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const router = useRouter()
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const response = await fetch('/api/create-checkout', {
            method: 'POST',
            body: JSON.stringify({ amount: 10 })
        });
        const session = await response.json();

        const { error } = await stripe.confirmCardPayment(session.client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'Doe John',
                }
            }
        });

        if (error) {
            // Show error to your customer
            console.log(error.message);
        } else {
            // The payment has been processed!
            console.log('Payment succeeded');
            router.push('/payment-success');
        }
    };

      

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-3">
            <div className="bg-white rounded-lg p-4 border border-gray-300 shadow-sm">
                <CardElement options={{
                    style: {
                        base: {
                            fontSize: '22px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
    }}/>

            </div>
        <button  disabled={!stripe} className="w-full bg-blue-500 text-white font-semibold px-4 py-2 mt-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Pay Now</button>
    </form>
    );
};

export default CheckoutForm;
