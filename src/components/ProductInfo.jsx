import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { SlBasket } from "react-icons/sl";
import { BiUserCircle } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { Button, Card, CardBody, CardHeader, IconButton, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductInFavouriteProduct, setFavouriteProducts, setProInfo, updateProductToBasket } from '../reducers/product.slice'
const ProductInfo = () => {

    // states
    const pro = useSelector(state => state.product.pro)
    const dispatch = useDispatch()


    // useStates
    const [des, setDes] = useState(true)
    const [isFavourite, setIsFavourite] = useState(false)

    // functions
    const putFavouriteProduct = (i) => {
        setIsFavourite(!isFavourite)
        dispatch(setFavouriteProducts(i))

    }
    const deleteFavouriteProduct = (id) => {
        setIsFavourite(!isFavourite)
        dispatch(deleteProductInFavouriteProduct(id))
    }
    function desBtn() {
        setDes(true)
    }
    function viewBtn() {
        setDes(false)
    }
    function closeInfo() {
        dispatch(setProInfo())
        document.querySelector('body').classList.remove('overlay')
    }

    //_____________________________________________________________

    return (
        <div onClick={() => setProInfo()} className='fixed h-screen w-full z-40'>
            <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] '>
                <Card className="w-full max-w-[48rem] flex-row gap-0 h-[65vh]">
                    <CardHeader shadow={false} floated={false} className="m-0 w-2/6 flex items-center justify-center shrink-0 rounded-r-none">
                        <img src={pro.image} alt="card-image" className="w-full object-content" />
                    </CardHeader>
                    <CardBody className="flex flex-col justify-between">
                        <div>
                            <button onClick={() => closeInfo()} className="absolute right-3 top-3 rounded-lg border-blue-700 border-[1px] p-2 active:bg-blue-700 flex justify-center items-center">
                                <CgClose className="text-[18px] text-blue-700 active:text-white" />
                            </button>
                            <Typography variant="h6" color="gray" className="mb-4 text-black"><span className="text-blue-700">Online</span>Shop</Typography>
                            <Typography variant="h4" color="blue-gray" className="mb-2 text-black">{pro.title}</Typography>

                            <div className="flex gap-3 mb-3">
                                <button onClick={() => desBtn()} className="bg-blue-700 text-white py-1 px-3 rounded-sm hover:bg-blue-800   ">Description</button>
                                <button onClick={() => viewBtn()} className="bg-blue-700 text-white py-1 px-3 rounded-sm hover:bg-blue-800  ">Reviews</button>
                            </div>
                        </div>
                        <div color="gray" className="mb-4 font-normal h-[220px] overflow-y-auto">
                            {des ? <Typography className="text-[14px]">{pro.description}</Typography> :
                                pro.reviews.length === 0 ? <span className="text-[14px]">no reviews)</span> :
                                    pro.reviews.map(item => (
                                        <div key={item.id}>
                                            <span className="text-black font-[600] text-[14px] flex items-center font-['Ubuntu]"> {item.user}</span>
                                            <span className="block text-[14px] mb-5 font-['Ubuntu]">{item.review}</span>
                                        </div>
                                    ))
                            }
                        </div>
                        <div className="flex gap-2 justify-end">
                            <IconButton onClick={!isFavourite ? () => putFavouriteProduct(pro) : () => deleteFavouriteProduct(pro.id)} className="bg-red-700 text-white py-1 px-3 rounded-md hover:bg-red-800 active:scale-95" ><AiOutlineHeart className="text-[24px]" /></IconButton>
                            <IconButton onClick={() => dispatch(updateProductToBasket(pro))} className="bg-blue-700 text-white py-1 px-3 rounded-md hover:bg-blue-800  active:scale-95"><SlBasket className="text-[24px]" /></IconButton>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default ProductInfo