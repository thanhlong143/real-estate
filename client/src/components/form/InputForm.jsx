import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { placeholderCn, resetOutline } from '@/lib/classnames'
import PropTypes from 'prop-types'
import { cn } from '@/lib/utils'

const InputForm = ({ form, label, name, type = 'text', placeholder }) => {
   return (
      <FormField name={name} control={form.control} render={({ field }) => <FormItem>
         {label && <FormLabel>{label}</FormLabel>}
         <FormControl>
            <Input placeholder={placeholder} type={type} className={cn(resetOutline, placeholderCn)} {...field} />
         </FormControl>
         <FormMessage />
      </FormItem>} />
   )
}

export default InputForm
InputForm.propTypes = {
   form: PropTypes.shape({
      control: PropTypes.any.isRequired
   }),
   label: PropTypes.string,
   name: PropTypes.string.isRequired,
   type: PropTypes.oneOf(['text', 'password']),
   placeholder: PropTypes.string
}