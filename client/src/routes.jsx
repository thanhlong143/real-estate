import App from './App'
import { pathNames } from './lib/pathNames'
import { Homepage, News, PublicLayout, RentProperty, SoldProperty } from './pages/public'

const routes = [
   {
      path: '/',
      element: <App />,
      children: [
         {
            path: pathNames.public.layout,
            element: <PublicLayout />,
            children: [
               {
                  path: pathNames.public.homepage,
                  element:<Homepage />
               },
               {
                  path: pathNames.public.news,
                  element: <News />
               },
               {
                  path: pathNames.public.rentProperty,
                  element: <RentProperty />
               },
               {
                  path: pathNames.public.soldProperty,
                  element: <SoldProperty />
               },
            ]
         }
      ]
   }
]

export default routes