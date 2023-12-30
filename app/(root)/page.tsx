import React from 'react'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import Card from '@/components/shared/Card'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input'
import connectToDatabase from '@/lib/database'

function page() {
    connectToDatabase()
    return (
        <>
            <div className='w-full h-full box-border grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 grid-cols-1  py-6 '>
                <section className=' lg:ml-32 lg:mt-24  my-4 mx-2 lg:my-24 px-4 lg:px-0 md:px-16 '>
                    <h1 className='text-4xl lg:text-5xl font-extrabold  lg:leading-[60px]'>
                        {' '}
                        Host Your Events with us{' '}
                        <span className='lg:py-2 md:py-2 lg:leading-[50px]'>
                            Your Events : Our Platform
                        </span>{' '}
                    </h1>
                    <p className='lg:py-3 md:py-3 leading-5 font-sans font-medium text-sm py-2'>
                        Book and learn helpful tips from 3,168+ mentors in world-class
                        companies with our global community.
                    </p>
                    <a href='#cc'>
                        <button className='w-[100%] box-border  md:w-fit lg:w-fit sm:w-fit '>
                            <h1 className='bg-blue-600 px-4 lg:py-2 py-2 md:rounded-2xl sm:rounded-2xl rounded-lg text-white lg:text-base md:text-base text-sm '>
                                Explore Now
                            </h1>
                        </button>
                    </a>
                </section>

                <section className='  lg:mt-10  lg:px-16 lg:justify-center lg:flex px-6 my-2 lg:my-24  rounded-md w-full  md:justify-center md:flex   '>
                    <img
                        src='./hero.jpg'
                        alt='hero'
                        className='rounded-xl lg:w-[80%] md:w-[80%] sm:w-[80%] lg:mx-1 lg:rounded-l-[50%] '
                    />
                </section>
            </div>

            <h1
                className=' lg:px-32 lg:text-5xl  font-bold font-sans text-gray-700 px-8 text-4xl md:px-16 sm:px-8 '
                id='cc'
            >
                Events
            </h1>

            {/* Search ane Category Filter */}
            <div className='  box-border lg:flex grid md:grid-cols-2  sm:grid-cols-1 lg:justify-between lg:px-28  w-full pt-4 gap-x-2 text-gray-500 space-y-2'>
                <div className='lg:w-1/2 lg:pl-4 lg:pr-0  w-full  md:px-16 sm:px-16 md:py-2 px-6  '>
                    <Input
                        type='text'
                        placeholder='Search Events '
                        className='w-full rounded-xl bg-gray-100 outline-none border-none'
                    />
                </div>
                <div className=' lg:w-1/2 box-border px-6'>
                    <Select >
                        <SelectTrigger className="w-full rounded-xl bg-gray-100 outline-none border-none ">
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>North America</SelectLabel>
                                <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                                <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                                <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                                <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                                <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                                <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                            </SelectGroup>


                        </SelectContent>
                    </Select>
                </div>
            </div>

            <Card />
        </>
    )
}

export default page
