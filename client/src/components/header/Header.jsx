import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import navigation from './navigation'
import { cn } from '@/lib/utils'
import { navigationItemClassName } from '@/lib/classnames'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Login } from '../login'

const Header = () => {
   return (
      <div className='h-24 p-4 flex shadow items-center justify-between'>
         <div className='flex items-center gap-6'>
            <Link to={'/'} className='text-5xl tracking-widest text-shadow text-blue-600 font-bold'>
               PITAYA
            </Link>
            <NavigationMenu>
               <NavigationMenuList>
                  {navigation.map(el => <Fragment key={el.id}>
                     {el.hasSub && (<NavigationMenuItem>
                        <NavigationMenuTrigger className='text-sm font-bold'>{el.name}</NavigationMenuTrigger>
                        <NavigationMenuContent className='p-4 grid grid-cols-2 min-w-96'>
                           {el.subs.map(sub => <NavigationMenuLink className={cn(navigationItemClassName)} key={sub.pathname}>
                              {sub.name}
                           </NavigationMenuLink>)}
                        </NavigationMenuContent>
                     </NavigationMenuItem>)}
                     {!el.hasSub && <NavigationMenuItem>
                        <NavigationMenuLink className={cn('text-sm font-bold')}>{el.name}</NavigationMenuLink>
                     </NavigationMenuItem>}
                  </Fragment>)}
               </NavigationMenuList>
            </NavigationMenu>
         </div>
         <div className='flex items-center gap-3'>
            <Dialog>
               <DialogTrigger asChild>
                  <Button className='bg-transparent text-stone-900 hover:bg-transparent hover:underline'>Đăng nhập / Đăng ký</Button>
               </DialogTrigger>
               <DialogContent isHideClose={true} className='min-w-[700px] p-0'>
                  <DialogHeader>
                     <DialogTitle />
                     <Login />
                  </DialogHeader>
               </DialogContent>
            </Dialog>
            <Button size='lg' variant='outline'>Đăng tin</Button>
         </div>
      </div>
   )
}

export default Header