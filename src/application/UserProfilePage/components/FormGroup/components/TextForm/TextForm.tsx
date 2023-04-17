import { FC, ReactNode, useEffect, useState } from 'react'
import { useForm, RegisterOptions, SubmitHandler } from 'react-hook-form'
import classNames from 'classnames'
import Button, { Size as ButtonSize, Variant } from '@/components/Button'
import Input, { Size as InputSize } from '@/components/Input'
import User from '@/types/User'
import { UserProfile } from '@/schemas/UserProfile'
import updateUserProfile from '@/apis/updateUserProfile'
import useSWRMutation from 'swr/mutation'

export interface Props {
  name: string
  prompt: string
  label?: ReactNode
  long?: boolean
  registerOptions?: RegisterOptions
  defaultValue?:
    | User['name']
    | User['occupation']
    | User['selfIntroduction']
    | User['linkedInLink']
    | User['gitHubLink']
}

const TextForm: FC<Props> = ({
  name,
  prompt,
  label = undefined,
  long = false,
  registerOptions = undefined,
  defaultValue = null,
}) => {
  const {
    formState: { errors, isDirty },
    handleSubmit,
    register,
    reset,
  } = useForm({
    defaultValues: {
      [name]: defaultValue,
    },
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isShowError, setIsShowError] = useState<boolean>(false)
  const [isShowSuccess, setIsShowSuccess] = useState<boolean>(false)

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isShowError) {
      const timeoutShowError = setTimeout(() => {
        setIsShowError(false)
      }, 3000)
      return () => clearTimeout(timeoutShowError)
    }

    if (isShowSuccess) {
      const timeoutShowSuccess = setTimeout(() => {
        setIsShowSuccess(false)
      }, 3000)
      return () => clearTimeout(timeoutShowSuccess)
    }
  }, [isShowError, isShowSuccess])

  const { trigger } = useSWRMutation(`/api/user/profile`, (_, { arg: data }) =>
    updateUserProfile({ ...data })
  )
  const onError = (): void => setIsShowError(true)

  const onSubmit: SubmitHandler<UserProfile> = async (data) => {
    try {
      setIsLoading(true)
      await trigger(data)
      reset(data)
      setIsShowSuccess(true)
    } catch (error) {
      // TODO: Error Handling
      // eslint-disable-next-line no-console
      console.log(error)
    }
    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div
        className={classNames(
          ['flex', 'flex-col', 'gap-4'],
          !long && ['xl:flex-row', 'xl:items-center']
        )}
      >
        <label
          className={classNames(
            ['flex', 'gap-4', 'items-center', 'w-full'],
            !long && 'xl:max-w-[600px]'
          )}
          htmlFor={name}
        >
          {label}
          <div className="basis-full">
            <Input
              className="focus:outline-none"
              id={name}
              size={InputSize.Medium}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register(name, registerOptions)}
            />
          </div>
        </label>
        <div className={classNames('flex', 'gap-4', 'grow', long && 'w-full')}>
          <div className="flex items-center grow">
            {isShowError && (
              <span className="text-error">
                {errors[name]?.type === 'maxLength' &&
                  `Please use ${
                    registerOptions?.maxLength ?? 'the correct'
                  } characters at maximum.`}
                {errors[name]?.type === 'required' && `The new ${prompt} cannot be empty`}
              </span>
            )}
            {isShowSuccess && (
              <span className="text-success">{`Your  ${prompt} has been updated successfully!`}</span>
            )}
          </div>
          <Button
            disabled={!isDirty}
            size={ButtonSize.Small}
            type="submit"
            variant={Variant.OnBackground}
            isLoading={isLoading}
          >
            Save
          </Button>
        </div>
      </div>
    </form>
  )
}

export default TextForm
