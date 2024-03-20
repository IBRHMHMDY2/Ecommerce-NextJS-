import { ShoppingCart } from 'lucide-react'
import React from 'react'

function ProductInfo({product}) {
  return (
    <div className='flex flex-col gap-3 py-6'>
        <div className='py-2'>
            <h2 className='text-[26px]'>{product.title}</h2>    
            <span className='text-[20px] text-gray-500'>{product.category}</span> 
        </div>
        <p className='text-[18px] font-semibold md:hidden lg:block'>{product?.description[0]?.children[0].text}</p>
        <div className='flex flex-col gap-3'>
            <span className='text-3xl text-primary font-semibold'>${product.price}</span>
            <button className='flex  items-center gap-2 bg-teal-400 text-xl w-fit text-white px-5 py-2 rounded-lg hover:bg-primary'>
                <ShoppingCart size={32}/> Add to Cart
            </button>
        </div>  
    </div>
  )
}

export default ProductInfo