'use client'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './_components/CheckoutForm';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function Checkout() {

    const options = {
        mode: 'payment',
        amount: 10,
        currency: 'usd'
    };

  return (
    <div className='mt-32'>
     <div className='flex justify-center items-center gap-4 flex-col'>
        <h1 className='text-3xl'>Checkout Now</h1>
        <p className='text-sm text-gray-300'>Please Fill Your Information Payment Method</p>
      </div>
     <Elements stripe={stripePromise} options={options} className="min-w-full ">
      <CheckoutForm />
    </Elements>
   </div>
  )
}

export default Checkout