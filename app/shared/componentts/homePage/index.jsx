'use client'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import MyImage from '../myImage'
import aiImage1 from '@/app/shared/assets/images/aiPics/ai1.jpg'

function HomePage() {
  const { data: session } = useSession()

  return (
    <>
    <div className='flex justify-center w-full'>
      <MyImage src={aiImage1} className={'mix-blend-lighten animate-pulse'}  height={500} width={500} alt={''} />
      </div>
    <div className='flex items-center'>
      <h1>Hello,</h1>
      <MyImage className={'mx-1 rounded-full'} src={session?.user?.image} height={25} width={25} alt={''} />
      <h1>{session?.user?.name}</h1>
    </div>    
    </>
  )
}

export default HomePage
