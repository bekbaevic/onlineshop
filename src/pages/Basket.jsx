import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, deleteProduct, setBasket } from "../reducers/basket.slice";
import { setFavourites } from "../reducers/favourite.slice";
import { BiCartAlt } from "react-icons/bi";
import { Typography } from "@material-tailwind/react";

const Basket = () => {

  // states
  const { basketProducts, count, total } = useSelector(state => state.basket)
  const { favourites } = useSelector(state => state.favourite)
  const dispatch = useDispatch()

  // useStates

  // functions

  return (
    <div>
      {basketProducts.length !== 0 ?
        <div className='flex justify-start md:justify-between flex-col md:flex-row w-full gap-3'>
          <div className=' flex flex-col md:pr-10 mt-2 md:overflow-y-auto w-full py-2 md:h-[calc(100vh-75px)]'>
            {basketProducts?.map(item => (
              <div key={item.id}>
                <div className='border-b-[1px] items-center border-gray-400 flex gap-5 p-2 sm:p-4'>
                  <div className="h-[100px] sm:h-[150px] min-w-[100px] max-w-[100px] sm:max-w-[150px] p-2 rounded-sm flex justify-center items-center border">
                    <img src={item.image} className='object-contain w-full rounded-sm' />
                  </div>
                  <div className="flex gap-2 sm:gap-4 flex-col justify-between w-full">
                    <h1 className='sm:text-[18px]'>{item.title}</h1>
                    <div className="flex justify-between mb-3 w-full">
                      <p className="overflow-y-auto font-[500] text-blue-600 text-[20px] sm:text-[24px]">{item.price.toLocaleString()} $</p>
                      <div className="flex items-center gap-1">
                        <button onClick={() => count.filter(i => item.id === i.id).length > 1 ? dispatch(decrementCount(item)) : ''} className="bg-blue-600 w-[25px] sm:w-[32px] h-[25px] sm:h-[32px]  text-[16px] rounded-full text-white ">-</button>
                        <p className="text-[18px] sm:text-[20px] ">{count.filter(i => item.id === i.id).length}</p>
                        <button onClick={() => dispatch(setBasket(item))} className="bg-blue-600 w-[25px] sm:w-[32px] h-[25px] sm:h-[32px] text-[16px] rounded-full text-white ">+</button>
                      </div>
                    </div>
                    <div className="flex gap-1 sm:gap-2">
                      <button onClick={() => dispatch(deleteProduct(item))} className="border-gray-700 border-[1px] p-1 text-[10px] sm:text-[16px] rounded-full text-gray-700 flex justify-center items-center">
                        <AiOutlineDelete />
                      </button>
                      <button onClick={() => dispatch(setFavourites(item))} className="border-gray-700 border-[1px] p-1 text-[10px] sm:text-[16px] rounded-full text-gray-700 flex justify-center items-center">
                        <AiOutlineHeart />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='md:w-[400px] max-h-[250px] gap-5 text-center flex flex-col justify-between mt-10 rounded-md p-5 shadow-lg'>
            <p className="font-[500] text-[18px]">Number of products: {basketProducts.length}</p>
            <div className="flex justify-center items-center flex-col">
              <p className="text-[18px] font-[500]">Total:</p>
              <h3 className="text-[24px] font-[500]">{total.toLocaleString()} $</h3>
            </div>
            <button className="bg-blue-700 py-2 rounded-sm text-white font-[500] hover:bg-blue-800 active:scale-95 transition-all duration-200">Order</button>
          </div>
        </div> :
        <div className='absolute text-gray-700 flex flex-col justify-center items-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-200%]'>
          <BiCartAlt className="text-[36px]" />
          <Typography className='text-[16px] font-[600]'>Products in your basket not found </Typography>
        </div>
      }
    </div>
  )
}

export default Basket