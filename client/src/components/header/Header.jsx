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

const Header = () => {
   return (
      <div className='h-24 p-4 flex bg-red-300'>
         <div>
            <Link to={'/'} className='text-5xl tracking-widest text-shadow text-blue-600 font-bold'>
               PITAYA
            </Link>
         </div>
         <NavigationMenu>
            <NavigationMenuList>
               {navigation.map(el => <Fragment key={el.id}>
                  {el.hasSub && (<NavigationMenuItem>
                     <NavigationMenuTrigger>{el.name}</NavigationMenuTrigger>
                     <NavigationMenuContent className='p-4 grid grid-cols-2 min-w-96'>
                        {el.subs.map(sub => <NavigationMenuLink className={cn(navigationItemClassName)} key={sub.pathname}>
                           {sub.name}
                        </NavigationMenuLink>)}
                     </NavigationMenuContent>
                  </NavigationMenuItem>)}
                  {!el.hasSub && <NavigationMenuItem>
                     <NavigationMenuLink className={cn('text-sm font-medium')}>{el.name}</NavigationMenuLink>
                  </NavigationMenuItem>}
               </Fragment>)}
            </NavigationMenuList>
         </NavigationMenu>
      </div>
   )
}

export default Header