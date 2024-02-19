import { AiOutlineDelete, AiOutlineHeart } from "react-icons/ai";
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductAtBasket } from "../reducers/product.slice";

const Basket = () => {
  // states
  const state = useSelector(state => state.product)
  const dispatch = useDispatch()
  // useStates

  // functions
  function deleteProduct(id) {
    dispatch(deleteProductAtBasket(id))
  }

  return (
    <div className='flex justify-between w-full'>
      <div className=' flex flex-col gap-3 pr-10 overflow-y-auto w-full py-10 h-[calc(100vh-70px)]'>
        {state.basket?.map(item => (
          <div key={item.id}>
            <div className='relative border-b-[1px] border-gray-400 flex gap-5 p-4'>
              <img src={item.image} className='h-[150px] object-cover min-w-[150px] rounded-sm' />
              <div className="flex justify-between w-full">
                <div className="flex flex-col justify-between items-start">
                  <div>
                    <h1 className='text-[18px] font-[500]'>{item.title}</h1>
                    <p className="overflow-y-auto font-medium text-blue-600 text-[24px] mt-1 scroll-m-10">{item.price} swm</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => deleteProduct(item.id)} className="rounded-lg border-gray-700 border-[1px] p-2 text-gray-700  flex justify-center items-center">
                      <AiOutlineDelete className="text-[18px] " />
                    </button>
                    <button className="rounded-lg border-gray-700 border-[1px] p-2 text-gray-700  flex justify-center items-center">
                      <AiOutlineHeart className="text-[18px] " />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <button className="bg-blue-600 w-[35px] h-[35px] text-[16px] rounded-full text-white font-[600]">+</button>
                  <p className="text-[20px]">{state.productCount[0].count}</p>
                  <button className="bg-blue-600 w-[35px] h-[35px] text-[16px] rounded-full text-white font-[600]">-</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='w-[400px] border-l-2 h-[calc(100vh-70px)] overflow-y-hidden'>
        <p>Savatda {state.basket.length} ta narsa bor</p>
        <div>
          <p>Umumiy qiymat:</p>
          <h3>{state.basket.map(item => item.price)}</h3>
        </div>
      </div>
    </div>
  )
}

export default Basket