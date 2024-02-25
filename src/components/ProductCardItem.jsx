import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { Card, CardBody, CardFooter, CardHeader, IconButton, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { setFavourites } from "../reducers/favourite.slice";
import { setBasket } from "../reducers/basket.slice";

const ProductCardItem = ({ item, dispatch }) => {

    // States
    const { favourites } = useSelector(state => state.favourite)
    const { basketProducts } = useSelector(state => state.basket)

    // useStates
    const [isFavourite, setIsFavourite] = useState(favourites.find(i => i.id === item.id) ? true : false)

    // functions
    function toggleFavourite(item) {
        setIsFavourite(!isFavourite)
        dispatch(setFavourites(item))
    }

    return (
        <div>
            <Card className="max-h-[460px] min-h-[460px] flex flex-col justify-between">
                <CardHeader shadow={false} floated={false} className="relative mb-0 ">
                    <div onClick={() => toggleFavourite(item)} className="transition-all duration-200 absolute right-[5px] top-[5px] ">
                        <IconButton className="rounded-full z-10 bg-blue-gray-100">
                            {isFavourite ? <AiFillHeart className="text-[16px] md:text-[22px] text-red-500" /> : <AiOutlineHeart className="text-[16px] md:text-[22px]" />}
                        </IconButton>
                    </div>
                    <div className="overflow-hidden border p-2 rounded-md">
                        <img
                            src={item.image}
                            alt="card-image"
                            className="h-full min-h-[200px] max-h-[200px] w-full object-contain transition-all duration-100 hover:scale-[1.02]"
                        />
                    </div>
                </CardHeader>
                <CardBody>
                    <div className="mb-2 flex items-center justify-between">
                        <Typography color="blue-gray" className="font-[600] text-[16px]">
                           {item.title.length > 25 ? item.title.slice(0, 25) + "..." : item.title}
                        </Typography>
                    </div>
                    <Typography color="blue-gray" className="text-blue-900 font-[600] text-[20px] mb-1">
                        {item.price?.toLocaleString()} $
                    </Typography>
                    <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75"  >
                        {item.description?.slice(0, 80) + "..."}
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0 flex gap-2">
                    <button
                        onClick={() => dispatch(setBasket(item))}
                        className="transition-all duration-200 bg-blue-700 w-full py-[6px] border-[1px] border-blue-700 rounded-md text-white shadow-none active:bg-white active:text-blue-700 ">
                        Add to Basket
                    </button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ProductCardItem