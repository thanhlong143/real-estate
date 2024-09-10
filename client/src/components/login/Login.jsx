import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form } from '@/components/ui/form'
import { InputForm } from '@/components/form'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const formSchema = z.object({
   emailOrPhone: z.string().min(1, { message: 'Bắt buộc' }),
   fullname: z.string().min(5, { message: 'Bắt buộc' }),
   password: z.string().min(5, { message: 'Mật khẩu tối thiểu 6 kí tự' }),
})

const Login = () => {

   const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
         emailOrPhone: '',
         password: '',
         fullname: '',
      }
   })

   const [variant, setVariant] = useState('SIGNIN')

   const toggleVariant = () => {
      if (variant === 'SIGNIN') setVariant('SIGNUP')
      else setVariant('SIGNIN')
   }

   return (
      <div className='grid grid-cols-10 text-primary'>
         <div className='col-span-4 grid place-content-center'>
            <img src='./assets/jpg/banner-login.jpg' alt='login' className='w-full object-contain' />
         </div>
         <div className='col-span-6 p-8'>
            <p className='font-bold text-base'>Xin chào!</p>
            <p className='font-bold text-2xl'>{variant === 'SIGNIN' ? 'Đăng nhập để tiếp tục!' : 'Đăng ký tài khoản!'}</p>
            <Form {...form} >
               <form className='my-6 space-y-4'>
                  <InputForm placeholder='0123456789 hoặc useremail@example.com' form={form} name='emailOrPhone' label='Email hoặc số điện thoại' />
                  <InputForm placeholder='Mật khẩu có tối thiểu 6 kí tự' form={form} name='password' type='password' label='Mật khẩu' />
                  {variant === 'SIGNUP' && <InputForm placeholder='VD: Nguyễn Văn Long' form={form} name='fullname' label='Tên đầy đủ' />}
                  {variant === 'SIGNIN'
                     ? <Button size='default' className='w-full relative top-2'>Đăng nhập</Button>
                     : <Button size='default' className='w-full relative top-2'>Đăng ký</Button>
                  }
               </form>
            </Form>
            <div className='w-full h-6 flex items-center relative my-4'>
               <div className='w-full h-[1px] bg-stone-200'></div>
               <div className='absolute inset-0 bg-transparent'>
                  <p className='px-2 w-fit mx-auto bg-white text-sm text-primary'>Hoặc</p>
               </div>
            </div>
            <Button size='lg' variant='outline' className='w-full mb-4'>
               <img src='/assets/svg/google.svg' alt='Google' className='w-5 h-5 object-cover' />
               <span>Đăng nhập bằng Google</span>
            </Button>
            <p className='text-center text-sm'>
               {variant === 'SIGNIN' ? <span>Bạn chưa có tài khoản? </span> : <span>Bạn đã có tài khoản? </span>}
               <span onClick={toggleVariant} className='text-red-600 font-bold cursor-pointer hover:underline'>
                  {variant === 'SIGNIN' ? 'Đăng ký' : 'Đăng nhập'}
               </span>
            </p>
         </div>
      </div>
   )
}

export default Login