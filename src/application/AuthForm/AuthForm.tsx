import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FiMail } from 'react-icons/fi'
import Link from 'next/link'
import checkEmail from '@/apis/checkEmail'
import AuthType from '@/types/AuthType'
import { Variant } from '@/components/Button'
import Error from '@/components/Error'
import AuthButton from '@/application/AuthButton'
import Input from '@/components/Input'
import handleAuthentication from '@/utils/handleAuthentication'
import CheckEmailModal from './components/CheckEmailModal'

enum EmailErrorMessage {
  Exists = 'Email address already exists.',
  Invalid = 'Please enter a valid email address.',
  noAccount = 'There is no Chuckroo account associated with this email address.',
}

interface Props {
  type: AuthType
}

const AuthForm: FC<Props> = ({ type }) => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [isShowCheckEmailModal, setIsShowCheckEmailModal] = useState(false)

  const onSubmit = async (data: any): Promise<void> => {
    setIsLoading(true)
    await handleAuthentication('email', { email: data.email, redirect: false })
    setIsShowCheckEmailModal(true)
    setIsLoading(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6 md:mb-2">
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
          {errors.email?.message === EmailErrorMessage.noAccount && (
            <div className="my-3">
              <Error>
                {`${EmailErrorMessage.noAccount} `}
                <Link href="/sign-up/email" className="underline">
                  Sign up?
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
                  return type === AuthType.SignUp || EmailErrorMessage.noAccount
                } catch (err: any) {
                  if (err?.response.status === 409) {
                    return type === AuthType.Login || EmailErrorMessage.Exists
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
      {isShowCheckEmailModal && (
        <CheckEmailModal
          type={type}
          email={getValues('email')}
          onClose={() => setIsShowCheckEmailModal(false)}
        />
      )}
    </>
  )
}

export default AuthForm
