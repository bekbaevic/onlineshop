import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import Container from './Container'
import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterWithSearching } from "../reducers/product.slice";

const Header = () => {
    const { searchItem, searchFilterProducts } = useSelector(state => state.product)
    const { favourites } = useSelector(state => state.favourite)
    const { basketProducts } = useSelector(state => state.basket)
    const dispatch = useDispatch()



    return (
        <div className='border-b-[1px] sticky top-0 z-20 bg-white'>
            <Container>
                <header className='flex justify-between items-center gap-5 sm:gap-10 h-[60px]'>
                    <Link to={"/"}>
                        <h1 className="cursor-pointer text-[24px] font-[600]"><span className="text-blue-700">Online</span>Shop</h1>
                    </Link>
                    <div className="flex items-center gap-[15px] sm:gap-[20px] md:gap-[40px]">
                        <form onSubmit={(e) => e.preventDefault()} className="sm:cursor-pointer md:cursor-auto flex items-center justify-left border-[2px] py-[8px] sm:py-[1px] sm:px-[1px] rounded-full md:w-[300px] lg:w-[500px]">
                            <BiSearchAlt className="text-[14px] md:text-[20px] mx-[8px] md:mx-[10px]" />
                            <input value={searchItem} onChange={e => dispatch(filterWithSearching(e.target.value.toLocaleLowerCase()))} type="text" placeholder="Search..." className="hidden sm:flex w-full py-[9px] pl-[2px] pr-[9px] h-full outline-none rounded-full" />
                        </form>
                        <ul className="flex justify-center items-center gap-[15px] sm:gap-[20px] md:gap-[30px]">
                            <Link to={"/basket"} className="hover:text-indigo-700">
                                <li className="flex relative flex-col justify-center items-center">
                                    <BsCart3 className='text-[25px]' />
                                    <div className="absolute top-[-5px] bg-blue-700 w-[16px] flex justify-center items-center text-white text-[12px] leading-[0] rounded-full h-[16px] right-[-2px]">{basketProducts.length}</div>
                                    <span className="text-[12px] font-[500]">Basket</span>
                                </li>
                            </Link>
                            <Link to={"/Favourite"} className="hover:text-indigo-700">
                                <li className="flex relative flex-col justify-center items-center">
                                    <AiOutlineHeart className='text-[25px]' />
                                    <div className="absolute top-[-5px] bg-blue-700 w-[16px] flex justify-center items-center text-white text-[12px] leading-[0] rounded-full h-[16px] right-[5px]">{favourites.length}</div>
                                    <span className="text-[12px] font-[500]">Favourite</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </header>

            </Container>

        </div>
    )
}

export default Header