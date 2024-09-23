import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const postTypes = ['Cho thuê', 'Bán'].map((el, index) => ({ id: index, value: el, label: el }))

const Search = () => {
   const [activedTab, setActivedTab] = useState('Cho thuê')

   return (
      <div className='bg-black/40 absolute top-0 bottom-0 left-10 right-10 text-slate-50 flex items-center justify-center'>
         <div className='w-[945px] max-w-full'>
            <Tabs onValueChange={value => setActivedTab(value)} value={activedTab}>
               <TabsList>
                  {postTypes.map((el) => (
                     <TabsTrigger value={el.value} key={el.id}>
                        {el.label}
                     </TabsTrigger>
                  ))}
               </TabsList>
               {postTypes.map(el => (
                  <TabsContent className='bg-black/60 rounded-md space-y-4 text-sm h-40' value={el.value} key={el.id}>
                     {el.label}
                  </TabsContent>
               ))}
            </Tabs>
         </div>
      </div>
   )
}

export default Search