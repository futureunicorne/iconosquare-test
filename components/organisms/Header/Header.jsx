import React from 'react'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const handleRoutingLogo = () => {
    router.push('/', undefined, { shallow: false })
  }

  return (
    <div className='fixed w-screen bg-white shadow-lg border-b-2 border-gray-100 h-auto z-10'>
      <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-centerpy-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <button onClick={handleRoutingLogo}>
              <img className='h-8 w-auto sm:h-10' src='/images/png/logoImage.png' alt='logo' />
            </button>
          </div>
          <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'></div>
        </div>
      </div>
    </div>
  )
}

export default Header
