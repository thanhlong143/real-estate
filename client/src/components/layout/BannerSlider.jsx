import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { banners } from "@/lib/constants"
import { useEffect, useRef, useState } from "react"

const BannerSlider = () => {
   const intervalRef = useRef()
   const [api, setApi] = useState(null)

   // const startAutoScroll = () => {
   //    intervalRef.current = setInterval(() => {
   //       api.scrollNext()
   //    }, 3000)
   // }
   
   // useEffect(() => {
   //    if (!api) return
   //    startAutoScroll()

   //    return () => {
   //       if (intervalRef.current) clearInterval(intervalRef.current)
   //    }
   // }, [api])

   return (
      <div>
         <Carousel setApi={setApi} opts={{ loop: true }} className='w-full'>
            <CarouselContent>
               {banners.map(el => <CarouselItem key={el.id}>
                  <img src={el.imageUrl} alt="Banner" className="w-full aspect-[3/1] object-cover" />
               </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className='left-2 hover:bg-white/50 bg-transparent' />
            <CarouselNext className='right-2 hover:bg-white/50 bg-transparent' />
         </Carousel>
      </div>
   )
}

export default BannerSlider