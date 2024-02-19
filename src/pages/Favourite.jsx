import { Card, CardBody, CardFooter, CardHeader, IconButton, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductInFavouriteProduct, setFavouriteProducts, setPro, setProInfo, updateProductToBasket } from '../reducers/product.slice'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const Favourite = () => {
  const product = useSelector(state => state.product)
  const dispatch = useDispatch()
  const [isFavourite, setIsFavourite] = useState(true)

  const toggleProInfo = (item) => {
    dispatch(setProInfo())
    dispatch(setPro(item))
    document.querySelector('body').classList.add('overlay')
  }

  const putFavouriteProduct = (i) => {
    setIsFavourite(!isFavourite)
    dispatch(setFavouriteProducts(i))

  }
  const deleteFavouriteProduct = (id) => {
    setIsFavourite(!isFavourite)
    dispatch(deleteProductInFavouriteProduct(id))
  }
  return (
    <div>
      {product.favouriteProducts.length !== 0 ? product.favouriteProducts?.map(item => (
        <div className='my-2 min-w-full grid sm:grid-cols-1 md:grid-cols-4 gap-4'>
          <Card key={item.id} className="max-h-[460px] min-h-[460px] gap-0 flex flex-col justify-between">
            <CardHeader shadow={false} floated={false} className="relative mb-0 ">
              <div className="absolute right-[5px] top-[5px] ">
                <IconButton onClick={!isFavourite ? () => putFavouriteProduct(item) : () => deleteFavouriteProduct(item.id)} className="rounded-full z-10 bg-blue-gray-100">
                  {isFavourite ? <AiFillHeart className="sm:text-[16px] md:text-[22px] text-red-500" /> : <AiOutlineHeart className="sm:text-[16px] md:text-[22px]" />}
                </IconButton>
              </div>
              <img
                src={item.image}
                alt="card-image"
                className="h-[200px] w-full object-cover object-center overflow-hidden hover:scale-105"
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-[600] text-[18px]">
                  {item.title.length > 25 ? item.title.slice(0, 25) + "..." : item.title}
                </Typography>
              </div>
              <Typography color="blue-gray" className="text-blue-900 font-[600]">
                {item.price} swm
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75"  >
                {item.description.slice(0, 80) + "..."}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex gap-2">
              <button
                onClick={() => dispatch(updateProductToBasket(item))}
                className="bg-blue-700 w-[80%] py-[6px] border-[1px] border-blue-700 rounded-md text-white shadow-none active:bg-white active:text-blue-700 ">
                Add to Basket
              </button>
              <button
                onClick={() => toggleProInfo(item)}
                className="border-blue-700 text-blue-700 border-[1px]  w-[20%] py-[6px] rounded-md shadow-none active:bg-blue-800 active:text-white">
                ...
              </button>
            </CardFooter>
          </Card>
        </div>
      )) : <div className='w-full text-center mt-5'>
        <Typography className='text-[24px] font-[600]'>Not found products :)</Typography>
      </div>
      }
    </div>
  )
}

export default Favourite