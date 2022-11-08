import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { Loader } from './';

const commonStyle = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white';
const Welcome = () => {

    const Input = ({ placeholder, type, name, value }) => {
        return (
            <input 
            placeholder={ placeholder } 
            type = {type}
            step = '0.00001'
            value = {value}
            onChange = {(e) => handleChange(e, name)}
            className='my-2 p-2 w-full rounded-sm bg-transparent outline-none text-sm text-white white-glassmorphism border-none'
            />
        );
    };

    const connectWallet = () => {

    };

    const handleSubmit = () => {

    };

    return (
        <div className='flex w-full justify-center items-center'>
             <div className='flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
                 <div className='flex flex-1 justify-start flex-col mf:mr-10 '>
                    <h1 className='text-3xl sm:text-5xl text-gradient py-1'>
                        Send Crypto <br /> Across the world
                    </h1>
                    <p className='text-slate-300 mt-5 font-light md:w-9/12 w-10/12 text-base'>
                        Buy and Sell Crypto currentcy across the world is really easy in just <span className='text-cyan-300 hover:cursor-pointer'>One Click</span> with Krypto.
                    </p>
                    <button type='button' onClick={ connectWallet } className='flex flex-row justify-center bg-[#2952e3] my-5 p-3 rounded-full cursor-pointer hover:animate-pulse'>
                        <p className='text-white font-semibold '>Connect Wallet</p>
                    </button>
                    <div className='grid md:grid-cols-3 bottom-0 grid-cols-2 w-full mt-10'>
                        <div className={`rounded-tl-2xl ${commonStyle}`}>
                            Reliability
                        </div>
                        <div className={`sm:rounded-tr-none max-sm:rounded-tr-2xl ${commonStyle}`}>
                            Ethereum
                        </div>
                        <div className={`sm:rounded-tr-2xl max-sm:rounded-tr-none ${commonStyle}${commonStyle}`}>
                            Security
                        </div>
                        <div className={`sm:rounded-bl-2xl max-sm:rounded-bl-none ${commonStyle}${commonStyle}`}>
                            WEB 3.0
                        </div>
                        <div className={`sm:rounded-bl-none max-sm:rounded-bl-2xl ${commonStyle}`}>
                            Low Cost
                        </div>
                        <div className={`rounded-br-2xl ${commonStyle}`}>
                            Blockchain
                        </div>
                    </div>
                 </div>
                 {/* CARD */}
                 <div className='flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10'>
                        <div className='flex p-3 justify-end items-start flex-col rounded-xl h-40 w-72 my-5 eth-card white-glassmorphism'>
                            <div className='flex justify-between w-full h-full'>
                                <div className='w-full flex justify-between items-start'>
                                    <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center'>
                                        <SiEthereum fontSize={21} color='white' />
                                    </div>
                                    <BsInfoCircle fontSize={18} color='white' />
                                </div>
                            </div>
                            <div className='bg-slate-300 rounded-full px-2'>
                                <p className='text-slate-500 text-sm font-light'>
                                    0x2SFE08D...OXV3
                                </p>
                            </div>
                            <div>
                                <p className='text-slate-100 text-lg font-semibold'>
                                    Ethereum
                                </p>
                            </div>
                        </div>
                        <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
                            <Input placeholder={'Address to'} name='addressTo' type='text' handleChange={ () => {} }/>
                            <Input placeholder={'Amount to'} name='amount' type='number' handleChange={ () => {} }/>
                            <Input placeholder={'Keyword (Gif)'} name='keyword' type='text' handleChange={ () => {} }/>
                            <Input placeholder={'Message'} name='message' type='text' handleChange={ () => {} }/>
                            <div className='w-full h-[1px] bg-gray-400 my-5'/>
                            {false ? (<Loader />)
                            : (
                                <button type='button' className='text-white p-2 border-[1px] border-[#5b6364] rounded-xl w-full hover:border-slate-200 hover:text-slate-300' onClick={handleSubmit}>
                                    Send Now
                                </button>
                            )}
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;