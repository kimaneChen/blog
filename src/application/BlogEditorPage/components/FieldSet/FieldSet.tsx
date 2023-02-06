import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import dynamic from 'next/dynamic'

const EditorBlock = dynamic(() => import('./components/Editor'), {
  ssr: false,
})

const FieldSet: FC = () => {
  const { register } = useFormContext()

  return (
    <div className="bg-white py-16 px-20 grow flex flex-col">
      <input
        className="block focus:outline-none placeholder:text-placeholder-500 text-[2rem] mb-3"
        type="text"
        placeholder="Give this blog a title"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register('title', {
          required: true,
        })}
      />
      <input
        className="block focus:outline-none placeholder:text-placeholder-400 mb-5"
        type="text"
        placeholder="A short description to attract others attention"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register('description', {
          required: true,
        })}
      />
      <div>
        <button
          className="border border-outline  bg-surface text-xs text-on-background px-1.5 py-1 mb-5 rounded"
          type="button"
        >
          Add a tag
        </button>
      </div>
      <hr className="border-t-2 border-outline mb-5" />
      <div className="prose max-w-none">
        <EditorBlock />
      </div>
    </div>
  )
}

export default FieldSet
