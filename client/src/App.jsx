import { Outlet } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'
import useMyStore from './zustand/useMyStore'
import { useEffect } from 'react'

const App = () => {

   const { token, getMe } = useMyStore()

   useEffect(() => {
      if (token) getMe()
   }, [token])
   return (
      <main className='text-primary'>
         <Outlet />
         <Toaster position='top-center' expand={false} richColors />
      </main>
   )
}

export default App