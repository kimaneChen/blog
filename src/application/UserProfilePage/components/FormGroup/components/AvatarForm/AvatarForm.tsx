import { FC } from 'react'

const AvatarForm: FC = () => (
  <div className="flex gap-4">
    <div className="grow">
      <h2 className="text-2xl font-medium mb-4">Your Avatar</h2>
      <p className="text-on-background">
        Click on the avatar to upload a custom one from your files.
      </p>
    </div>
    <button
      aria-label="Upload avatar"
      type="button"
      className="w-[72px] h-[72px] bg-outline rounded-full shrink-0"
    />
  </div>
)

export default AvatarForm
