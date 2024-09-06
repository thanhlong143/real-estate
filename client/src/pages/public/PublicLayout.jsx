import { Header } from '@/components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
   return (
      <div>
         <Header />
         <Outlet />
      </div>
   )
}

export default PublicLayout