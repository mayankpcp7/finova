import Image from 'next/image'
import React from 'react'
import Button, { GoldButton } from './common/Button'

const Ready = () => {
    return (
        <div className='bg-off-black'>
            <div className='max-w-[1072px] mx-auto px-4 md:py-16 sm:py-12 py-8'>
                <div className='max-w-[1040px] rounded-[30px] bg-brown-black-gradient py-[30px] px-[34px] '>
                    <div className='flex md:flex-row flex-col justify-center items-center md:gap-16 gap-4 w-full'>
                        <Image width={252} height={495} className='sm:max-w-[252px] sm:max-h-[495px] max-w-[143px] max-h-[281px]' src="/assets/images/png/bitcoin-plane.png" alt='bitcoin-plane' />
                        <div className='flex flex-col max-w-[320px]'>
                            <h2 className='text-center md:text-start text-white font-bold !leading-126 sm:text-custom-4xl text-custom-2xl'>Ready to Start?</h2>
                            <p className='text-white md:text-start text-center font-normal xs:text-lg text-base !leading-126 sm:max-w-[320px] max-w-[265px] md:mx-0 mx-auto sm:pt-8 pt-3'>Join FINOVA today and take the first step towards financial freedom. Our expert trade signals and courses will guide you every step of the way.</p>
                            <GoldButton className="sm:mt-8 mt-6" goldButton={"Join Now"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ready