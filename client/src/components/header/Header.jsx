import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import React, { Fragment, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import navigation from './navigation'
import { cn } from '@/lib/utils'
import { navigationItemClassName, resetOutline } from '@/lib/classnames'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Login } from '@/components/login'
import useMyStore from '@/zustand/useMyStore'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import menu from './menu'
import { LogOut } from 'lucide-react'

const Header = () => {

   const [isShowDialog, setIsShowDialog] = useState(false)
   const { me, logout } = useMyStore()

   const onClose = useCallback(() => {
      setIsShowDialog(false)
   }, [])

   return (
      <div className='h-24 p-4 flex shadow items-center justify-between'>
         <div className='flex items-center gap-6'>
            <Link to={'/'} className='text-5xl tracking-widest text-shadow text-main font-bold'>
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
            {!me ? (<Dialog onOpenChange={(isOpen) => setIsShowDialog(isOpen)} open={isShowDialog}>
               <DialogTrigger asChild>
                  <Button
                     onClick={() => setIsShowDialog(true)}
                     className='bg-transparent text-stone-900 hover:bg-transparent hover:underline'
                  >
                     Đăng nhập / Đăng ký
                  </Button>
               </DialogTrigger>
               <DialogContent isHideClose={false} className='min-w-[800px] p-0'>
                  <DialogHeader>
                     <DialogTitle />
                     <Login onClose={onClose} />
                  </DialogHeader>
               </DialogContent>
            </Dialog>) : (
               <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                     <Button className={resetOutline} variant='transparent'>{me.fullname}</Button>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent>
                        {menu.map(el => <DropdownMenuItem>
                           <Link className='flex items-center gap-2' to={el.path}>
                              {el.icon}
                              {el.label}
                           </Link>
                        </DropdownMenuItem>)}
                        <DropdownMenuItem onClick={() => logout()} className='flex items-center gap-2'>
                           <LogOut size={14} />
                           <span>Đăng xuất</span>
                        </DropdownMenuItem>
                     </DropdownMenuContent>
               </DropdownMenu>
            )}
            <Button size='lg' variant='outline'>Đăng tin</Button>
         </div>
      </div>
   )
}

export default Header