import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form } from '../ui/form'
import { InputForm } from '../form'
import { Button } from '../ui/button'
import useMyStore from '@/zustand/useMyStore'
import { apiSignInWithGoogle } from '@/apis/auth'

const formSchema = z.object({
   password: z.string().min(6, { message: 'Mật khẩu tối thiểu 6 kí tự' }),
   confirmPassword: z.string()
}).refine(data => {
   const { password, confirmPassword } = data
   return password === confirmPassword
}, { message: 'Mật khẩu không trùng khớp.', path: ['confirmPassword'] })

const SetupPassword = () => {
   const {googleData}=useMyStore()
   const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
         password: '',
         confirmPassword: ''
      }
   })

   const onSubmit = async (data) => {
      if(!googleData) return alert('toast error')
      const payload = {
         ...googleData,
         password: data.password
      }
      const response = await apiSignInWithGoogle(payload)
      console.log(response);
   }

   return (
      <div className='col-span-6 p-8'>
         <p className='font-bold text-base'>Bước cuối cùng!</p>
         <p className='font-bold text-2xl'>Thiết lập mật khẩu</p>
         <Form {...form} >
            <form className='py-6 space-y-4' onSubmit={form.handleSubmit(onSubmit)}>
               <InputForm
                  form={form}
                  name='password'
                  label='Mật khẩu'
                  placeholder='Nhập mật khẩu của bạn'
               />
               <InputForm
                  form={form}
                  name='confirmPassword'
                  label='Mật khẩu'
                  placeholder='Nhập lại mật khẩu của bạn'
               />
               <Button className='w-full' type='submit'>Xác nhận</Button>
            </form>
         </Form>
      </div>
   )
}

export default SetupPassword