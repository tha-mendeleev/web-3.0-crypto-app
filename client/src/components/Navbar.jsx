import React from 'react';
import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/logo.png'

const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    );
};

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className='w-full flex md:justify-center justify-between item-center p-4'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <img src={logo} alt="logo" className='w-32 cursor-pointer' />
            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center'>
                 {['Market', 'Exchange', 'Tutorials', 'Wallet'].map((item, index) => (
                    <NavbarItem key={item + index} title={item} />
                 ))
                 }
                 <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full text-center hover:bg-[#2546bd]'>Login</li>
            </ul>
            <div className='flex relative'>
                 { !toggleMenu 
                    ? <HiMenuAlt4 fontSize={30} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(true)} /> : null
                }
                { toggleMenu && (
                    <ul className='z-5 fixed top-0 -right-2 p-3 w-[60vw] h-screen shadow-md md:hidden list-none
                    flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in
                    '>
                        <li className='text-xl w-full my-2'>
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        {['Market', 'Exchange', 'Tutorials', 'Wallet'].map((item, index) => (
                        <NavbarItem key={item + index} title={item} classProps='my-2 text-lg 
                        active:bg-slate-200 active:rounded-full active:px-6 active:text-slate-700 transition-all'/>
                        ))
                        }
                    </ul>
                )
                }
            </div>
        </nav>
    );
}

export default Navbar;