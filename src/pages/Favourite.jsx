import { AiOutlineHeart } from "react-icons/ai";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCardItem from '../components/ProductCardItem'
import { Typography } from "@material-tailwind/react";

const Favourite = () => {

  //states
  const { favourites } = useSelector(state => state.favourite)
  const dispatch = useDispatch()

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4' >
      {favourites.length !== 0 ? favourites?.map(item => (
        <ProductCardItem key={item.id} item={item} dispatch={dispatch} />)
      ) :
        <div className='absolute text-gray-700 flex flex-col justify-center items-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-200%]'>
          <AiOutlineHeart className="text-[36px]" />
          <Typography className='text-[16px] font-[600]'>Favorite products not found</Typography>
        </div>}
    </div >
  )
}

export default Favourite