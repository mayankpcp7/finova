import Image from 'next/image'
import React from 'react'

const Ready = () => {
    return (
        <div className='bg-off-black'>
            <div className='max-w-[1072px] mx-auto px-4 md:py-[60px] sm:py-12 py-8'>
                <div className='max-w-[1040px] rounded-[30px] bg-brown-black-gradient p-[30px] flex justify-center items-center gap-16'>
                    <Image width={252} height={495} src="/assets/images/png/bitcoin-plane.png" alt='bitcoin-plane' />
                    <div className='flex flex-col'>
                        <h2 className='text-center md:text-start text-white font-bold leading-126 sm:text-custom-4xl text-custom-2xl'>Ready to Start?</h2>
                        <p className='text-white font-normal xs:text-lg text-base leading-126 max-w-[320px] pt-8'>Join FINOVA today and take the first step towards financial freedom. Our expert trade signals and courses will guide you every step of the way.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ready