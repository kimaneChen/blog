import { FC } from 'react'

const FieldSet: FC = () => (
  <div className="bg-white p-12 grow flex flex-col">
    <input
      className="block focus:outline-none placeholder:text-placeholder-500 text-[2rem] mb-3"
      type="text"
      placeholder="Give this blog a title"
    />
    <input
      className="block focus:outline-none placeholder:text-placeholder-400 mb-5"
      type="text"
      placeholder="A short description to attract others attention"
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
    <textarea className="grow focus:outline-none" placeholder="Change the world from now on" />
  </div>
)

export default FieldSet
