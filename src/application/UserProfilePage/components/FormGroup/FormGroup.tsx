import { FC, ReactNode } from 'react'

interface Props {
  heading?: string
  children: ReactNode
}

const FormGroup: FC<Props> = ({ heading = undefined, children }) => (
  <section className="border flex flex-col gap-4 my-6 px-8 lg:px-[60px] py-10 rounded-xl">
    {heading && <h2 className="text-2xl font-medium">{heading}</h2>}
    {children}
  </section>
)

export default FormGroup
