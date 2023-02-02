import { FC } from 'react'
import Feature from './components/Feature'

const KeyFeatures: FC = () => (
  <div className="py-3">
    <Feature
      title="Lorem ipsum dolor sit amet."
      content="
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae alias possimus reprehenderit
        voluptatibus velit sint quod illum dolorum aliquam quaerat."
    />
    <Feature
      title="Lorem ipsum dolor sit amet."
      content="
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae alias possimus reprehenderit
        voluptatibus velit sint quod illum dolorum aliquam quaerat."
    />
    <Feature
      title="Lorem ipsum dolor sit amet."
      content="
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae alias possimus reprehenderit
        voluptatibus velit sint quod illum dolorum aliquam quaerat."
    />
  </div>
)

export default KeyFeatures
