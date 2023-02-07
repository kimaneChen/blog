import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import Button, { Variant } from '@/components/Button'
import { useSession } from 'next-auth/react'

const ActionButtons: FC = () => {
  const { formState } = useFormContext()
  const { isValid } = formState
  const { data: session } = useSession()

  return (
    <div className="flex justify-end gap-3 pt-6 pb-3">
      {session ? (
        <Button disabled={!isValid} type="submit" variant={Variant.Primary}>
          Publish
        </Button>
      ) : (
        <Button onClick={() => window.open('/?redirect_url=/close', '_blank')}>
          Log In to Publish
        </Button>
      )}

      <Button variant={Variant.Outline}>Close</Button>
    </div>
  )
}

export default ActionButtons
