import { BannerSlider } from '@/components/layout'
import { Search } from '@/components/searchs'
import React from 'react'

const Homepage = () => {
   return (
      <div className='relative'>
         <BannerSlider />
         <div>
            <Search />
         </div>
      </div>
   )
}

export default Homepage