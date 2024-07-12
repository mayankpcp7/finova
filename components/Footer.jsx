import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { footerLinks, socialMediaLinks } from './common/Helper'
import Button from './common/Button'

const Footer = () => {
    return (
        <div className="bg-off-black">
            <div className="max-w-[1072px] px-4 mx-auto md:py-16 sm:py-12 py-8">
                <div className="flex justify-center my-5">
                    <Image src="/assets/images/png/Logo.png" alt="Logo" width={132} height={25} />
                </div>
                <div className="mt-16 flex justify-center">
                    <div className='bg-white rounded-full max-w-[540px] w-full flex items-center gap-5'>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 rounded-l-full text-black"
                        />
                        <Button className="max-w-[137px] m-0" btnname={"Subscribe"} />
                    </div>
                </div>
                <div className="flex justify-center items-center gap-6 mb-6">
                    {socialMediaLinks.map((obj, index) => (
                        <div key={index}>
                            <Link href={obj.src} target="_blank" rel="noopener noreferrer">
                                <i className={obj.icon}></i>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="border-t border-gray-700 pt-6 flex justify-center items-center gap-16">
                    <p className="text-sm ">&copy; 2024 Finova. All rights reserved.</p>
                    <div className="flex justify-center gap-16 text-sm">
                        {footerLinks.map((obj, index) => (
                            <Link href={obj.href} key={index}>
                                {obj.text}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer