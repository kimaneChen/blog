import { FC, ReactNode } from 'react'
import { useForm, RegisterOptions } from 'react-hook-form'
import classNames from 'classnames'
import Button, { Size as ButtonSize, Variant } from '@/components/Button'
import Input, { Size as InputSize } from '@/components/Input'

export interface Props {
  name: string
  label?: ReactNode
  long?: boolean
  registerOptions?: RegisterOptions
}

const TextForm: FC<Props> = ({
  name,
  label = undefined,
  long = false,
  registerOptions = undefined,
}) => {
  const {
    formState: { errors, isDirty },
    handleSubmit,
    register,
  } = useForm()

  const onSubmit = (): void => {
    // eslint-disable-next-line no-console
    console.log('submitted')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            {errors[name]?.type === 'maxLength' && (
              <span className="text-error">
                {`Please use ${registerOptions?.maxLength ?? 'the correct'} characters at maximum.`}
              </span>
            )}
          </div>
          <Button
            disabled={!isDirty}
            size={ButtonSize.Small}
            type="submit"
            variant={Variant.OnBackground}
          >
            Save
          </Button>
        </div>
      </div>
    </form>
  )
}

export default TextForm
