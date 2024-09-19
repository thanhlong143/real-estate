import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useMyStore = create(
   persist(
      (set) => ({
         token: null,
         me: null,
         googleData: null,
         setToken: token => set(() => ({ token })),
         setMe: me => set(() => ({ me })),
         setGoogleData: (data) => set(() => ({ googleData: data }))
         // getMe: 
      }),
      {
         name: 'real-estate/me',
         storage: createJSONStorage(() => sessionStorage),
         partialize: (state) => Object.fromEntries(Object.entries(state).filter(el => el[0] === 'token' || el[0] || 'me')),
      }
   )
)

export default useMyStore