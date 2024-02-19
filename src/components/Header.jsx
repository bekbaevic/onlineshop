import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import Container from './Container'
import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    
    const state = useSelector(state => state.product)
    
    return (
        <div className='border-b-[1px]'>
            <Container>
                <header className='flex justify-between items-center gap-10 h-[60px]'>
                    <Link to={"/"}>
                        <h1 className="cursor-pointer text-[24px] font-[600]"><span className="text-blue-700">Online</span>Shop</h1>
                    </Link>
                    <div className="flex items-center sm:gap-[20px] md:gap-[40px]">
                        <form onSubmit={(e) => e.preventDefault()} className="sm:cursor-pointer md:cursor-auto flex items-center justify-left border-[2px] sm:py-[8px] md:py-[1px] md:px-[1px] rounded-full md:w-[300px] lg:w-[500px]">
                            <BiSearchAlt className="sm:text-[14px] md:text-[20px] sm:mx-[8px] md:mx-[10px]" />
                            <input type="text" placeholder="Search..." className="sm:hidden md:flex w-full py-[9px] pl-[2px] pr-[9px] h-full outline-none rounded-full" />
                        </form>
                        <ul className="flex justify-center items-center sm:gap-[20px] md:gap-[30px]">
                            <Link to={"/basket"} className="hover:text-indigo-700">
                                <li  className="flex relative flex-col justify-center items-center">
                                    <BsCart3 className='text-[25px]' />
                                    <div className="absolute top-[-5px] bg-blue-700 w-[16px] flex justify-center items-center text-white text-[12px] leading-[0] rounded-full h-[16px] right-[-2px]">{state.basket.length}</div>
                                    <span className="text-[12px] font-[500]">Basket</span>
                                </li>
                            </Link>
                            <Link to={"/Favourite"} className="hover:text-indigo-700">
                                <li className="flex relative flex-col justify-center items-center">
                                    <AiOutlineHeart className='text-[25px]' />
                                    <div className="absolute top-[-5px] bg-blue-700 w-[16px] flex justify-center items-center text-white text-[12px] leading-[0] rounded-full h-[16px] right-[5px]">{state.favouriteProducts.length}</div>
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