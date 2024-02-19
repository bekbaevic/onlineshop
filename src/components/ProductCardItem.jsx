import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { Card, CardBody, CardFooter, CardHeader, IconButton, Typography } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { deleteProductInFavouriteProduct, setBasketProductCount, setFavouriteProducts, setPro, setProInfo, updateProductToBasket } from "../reducers/product.slice";

const ProductCardItem = ({ item, dispatch }) => {


    // States
    const state = useSelector(state => state.product)


    // useStates
    const [isFavourite, setIsFavourite] = useState(false)


    // functions
    const toggleProInfo = (item) => {
        dispatch(setProInfo());
        dispatch(setPro(item));
        document.querySelector('body').classList.add('overlay')
    }

    const putFavouriteProduct = (i) => {
        setIsFavourite(!isFavourite);
        dispatch(setFavouriteProducts(i))
    }

    const deleteFavouriteProduct = (id) => {
        setIsFavourite(!isFavourite);
        dispatch(deleteProductInFavouriteProduct(id))
    }

    const updateBasketPro = (i) => {
        state.basket.find(item => item == i) ? dispatch(setBasketProductCount(i)) : dispatch(updateProductToBasket(i))
    }
    return (
        <div>
            <Card className="max-h-[460px] min-h-[460px] gap-0 flex flex-col justify-between">
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
                        onClick={() => updateBasketPro(item)}
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
    )
}

export default ProductCardItem