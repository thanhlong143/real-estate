import slugify from 'slugify'

export const postSoldTypes = [
   'Căn hộ chung cư',
   'Nhà mặt phố',
   'Nhà riêng',
   'Nhà phố thương mại',
   'Biệt thự',
   'Đất nền',
   'Bán đất',
   'Trang trại',
   'Khu nghỉ dưỡng',
   'Kho',
   'Nhà xưởng',
   'Khác',
].map(el => ({ name: el, pathname: slugify(el) }))

export const postRentTypes = [
   'Căn hộ chung cư',
   'Nhà mặt phố',
   'Nhà riêng',
   'Nhà phố thương mại',
   'Biệt thự',
   'Đất nền',
   'Bán đất',
   'Trang trại',
   'Khu nghỉ dưỡng',
   'Kho',
   'Nhà xưởng',
   'Khác',
].map(el => ({ name: el, pathname: slugify(el) }))

export const banners = [
   '/assets/jpg/banner-1.jpg',
   '/assets/jpg/banner-2.jpg',
   '/assets/jpg/banner-3.jpg',
   '/assets/jpg/banner-4.jpg',
].map((el, index) => ({ id: index, imageUrl: el }))