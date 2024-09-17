import { create } from 'zustand'

const useMyStore = create((set) => {
   return {
      token: null,
      me: null,
      googleData: null,
      setToken: token => set(() => ({ token })),
      setMe: me => set(() => ({ me })),
      setGoogleData: (data) => set(() => ({ googleData: data }))
      // getMe: 
   }
})

export default useMyStore