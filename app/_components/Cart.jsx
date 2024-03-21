import React, { useContext, useState } from 'react'
import { CartContext } from '../_context/CartContext';
import Link from 'next/link';

function Cart() {
    const [openCart, setOpenCart] = useState(false);
    const {cart, setCart} = useContext(CartContext);
  return !openCart && (
    <div
  className="absolute w-[350px] h-[500px] right-10 top-12 z-10 mx-10 p-5 overflow-auto bg-gray-100 shadow-sm rounded-md border"
>
  <div className="mt-4 space-y-6">
    <ul className="space-y-4">
        {console.log(cart)}
        {cart?.map((item) => (
            <li key={item?.id} className="flex items-center gap-4" onClick={()=>setOpenCart(false)}>
                <Link href={`/product-details/${item?.product?.id}`} >
                    <img
                    src={item?.product?.attributes?.banner?.data?.attributes?.url}
                    alt="Banner Product"
                    className="size-16 rounded object-cover"
                    />
                </Link>
                <div>
                <h3 className="text-sm text-gray-900">{item?.product?.attributes?.title}</h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div className='flex gap-2 items-center text-sm'>
                        <dt className="inline">Category:</dt>
                        <dd className="inline">{item?.product?.attributes?.category}</dd>
                    </div>

                    <div className='flex gap-2 items-center text-sm'>
                        <dt className="inline">Price:</dt>
                        <dd className="inline">${item?.product?.attributes?.price}</dd>
                    </div>
                </dl>
                </div>
            
            </li>
        ))}
    </ul>

    <div className="space-y-4 text-center">
      <a
        href="/cart"
        className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
      >
        View my cart ({cart?.length})
      </a>

      <a
        href="#"
        className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
      >
        Checkout
      </a>

      <a
        href="#"
        className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
      >
        Continue shopping
      </a>
    </div>
  </div>
</div>
  )
}

export default Cart