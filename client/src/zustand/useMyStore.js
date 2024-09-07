import { create } from 'zustand'

const useMyStore = create((set) => {
   return {
      token: null,
      me: null,
      setToken: token => set(() => ({ token })),
      setMe: me => set(() => ({ me })),
      // getMe: 
   }
})

export default useMyStore