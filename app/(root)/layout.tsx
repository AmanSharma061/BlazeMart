import React from 'react'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import { ClerkProvider } from '@clerk/nextjs'
function layout({ children }: {
    children: React.ReactNode

}) {
    return (



        <div className='w-full h-full'>
            <Header />
            {children}
            <Footer />
        </div>


    )
}

export default layout
