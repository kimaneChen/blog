import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { Variant } from '@/components/Button'
import Error from '@/components/Error'
import AuthButton from '@/components/AuthButton'
import Input from '@/components/Input'
import { FiMail } from 'react-icons/fi'
import Link from 'next/link'
import checkEmail from '@/apis/checkEmail'

enum EmailErrorMessage {
  Exists = 'Email address already exists.',
  Invalid = 'Please enter a valid email address.',
}

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: any): Promise<void> => {
    setIsLoading(true)
    await signIn('email', {
      callbackUrl: localStorage.getItem('redirect_url') || '/',
      email: data.email,
    })
    setIsLoading(false)
    localStorage.removeItem('redirect_url')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2">
        {errors.email?.message === EmailErrorMessage.Exists && (
          <div className="my-3">
            <Error>
              {`${EmailErrorMessage.Exists} `}
              <Link href="/login/email" className="underline">
                Log in?
              </Link>
            </Error>
          </div>
        )}
        <Input
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('email', {
            required: true,
            validate: async (value) => {
              const regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/i
              if (!regex.test(value)) {
                return EmailErrorMessage.Invalid
              }
              try {
                await checkEmail(value)
                return true
              } catch (err: any) {
                if (err?.response.status === 409) {
                  return EmailErrorMessage.Exists
                }
                throw err
              }
            },
          })}
          placeholder="Email Address"
          error={!!errors.email}
        />
        {errors.email?.message === EmailErrorMessage.Invalid && (
          <Error>{EmailErrorMessage.Invalid}</Error>
        )}
      </div>
      <AuthButton
        onClick={handleSubmit(onSubmit)}
        icon={<FiMail className="text-lg" />}
        isLoading={isLoading}
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
