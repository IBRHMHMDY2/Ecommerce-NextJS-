'use client'
import { Check } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

function PaymentSuccess() {
  const router = useRouter();
  return (
    <div className='flex flex-col gap-4  items-center min-h-screen mt-8'>
        <Check size={100} color='green' className='border-2 border-black rounded-full '/>
        <h1 className='text-3xl text-center'>Payment Successful!</h1>
        <p className='text-sm text-gray-400 text-center'>we sent an email with your order confirmation along with Digital Content</p>
        <button onClick={()=>router.push('/')} className='text-white p-3 text-xl bg-primary rounded-md max-w-fit'>Go to Home</button>
    </div>
  )
}

export default PaymentSuccess