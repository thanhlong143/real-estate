import { apiGetMe } from '@/apis/user'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useMyStore = create(
   persist(
      (set) => ({
         token: null,
         me: null,
         // googleData: null,
         setToken: token => set(() => ({ token })),
         setMe: me => set(() => ({ me })),
         // setGoogleData: (googleData) => set(() => ({ googleData })),
         getMe: async () => {
            const response = await apiGetMe()
            console.log(response);
            if (response.data.success) {
               return set(() => ({ me: response.data.user }))
            } else {
               return set(() => ({ me: null, token: null }))
            }
         },
         logout: () => set(() => ({ token: null, me: null }))
      }),
      {
         name: 'real-estate/me',
         storage: createJSONStorage(() => sessionStorage),
         partialize: (state) => Object.fromEntries(Object.entries(state).filter(el => el[0] === 'token' || el[0] || 'me')),
      }
   )
)

export default useMyStore