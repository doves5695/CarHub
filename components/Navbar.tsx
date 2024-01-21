import React from 'react'
import Link from '@/node_modules/next/link'
import Image from '@/node_modules/next/image'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link href={'/'} className="flex justify-center items-center">
                <Image src={'/logo.svg'} alt="car hub logo" width={119} height={18} className="object-contain" />
            </Link>
            <CustomButton 
            title={'sign in'}containerStyles="text-primary-blue rounded-full bg-white min-x-[130px]" 
            btnType={"button"}/>
        </nav>
    </header>
  )
}

export default Navbar
