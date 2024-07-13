import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { footerLinks, socialMediaLinks } from './common/Helper'
import Button from './common/Button'

const Footer = () => {
    const getCurrentYear = () => new Date().getFullYear();

    return (
        <div className="bg-off-black">
            <div className="max-w-[1072px] px-4 mx-auto md:py-16 sm:py-12 py-8">
                <div className="flex justify-center py-5">
                    <Image src="/assets/images/png/logo.png" alt="Logo" width={132} height={25} />
                </div>
                <div className="lg:my-16 md:my-12 sm:my-8 my-6 flex justify-center">
                    <div className='bg-white rounded-full max-w-[540px] w-full flex items-center gap-5'>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="ps-7 rounded-l-full text-black w-full"
                        />
                        <Button className="!max-w-[137px] !mt-0 !py-[13px]" btnname={"Subscribe"} />
                    </div>
                </div>
                <div className="flex justify-center items-center gap-6 lg:mb-16 md:mb-12 sm:mb-8 mb-6">
                    {socialMediaLinks.map((obj, index) => (
                        <div key={index}>
                            <Link href={obj.src} target="_blank" rel="noopener noreferrer">
                                {obj.icon}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className=" flex sm:flex-row flex-col justify-center items-center lg:gap-16 md:gap-14 sm:gap-5 gap-5">
                    <p className="text-moon-mist font-normal text-sm !sm:leading-126">&copy;  {getCurrentYear()} Finova. All rights reserved.</p>
                    <div className="flex sm:flex-row flex-col justify-center lg:gap-16 md:gap-14 sm:gap-5 gap-5 text-sm">
                        {footerLinks.map((obj, index) => (
                            <Link href={obj.src} key={index} target='_blank' className='text-moon-mist hover:text-white duration-300 font-normal text-sm !sm:leading-126 sm:text-start text-center py-0.5'>
                                {obj.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer