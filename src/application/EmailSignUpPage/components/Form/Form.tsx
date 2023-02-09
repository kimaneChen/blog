import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { FaEnvelope } from 'react-icons/fa'
import { Variant } from '@/components/Button'
import Error from '@/components/Error'
import AuthButton from '@/components/AuthButton'
import Input from '@/components/Input'

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: any): Promise<void> => {
    await signIn('email', { callbackUrl: '/', email: data.email })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <Input
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('email', {
            required: true,
            validate: (value) => {
              const regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/i
              return regex.test(value) || 'Please enter a valid email address.'
            },
          })}
          placeholder="Email Address"
        />
        {errors.email && <Error>{String(errors.email.message)}</Error>}
      </div>
      <AuthButton
        onClick={handleSubmit(onSubmit)}
        icon={<FaEnvelope className="text-lg" />}
        variant={Variant.Dark}
        block
        type="submit"
      >
        Continue with Email
      </AuthButton>
    </form>
  )
}

export default Form
