import { FC } from 'react'

const Contents: FC = () => (
  <section className="w-full mb-60">
    <h1 className="py-2 text-3xl font-inter my-3 font-semibold">Editor.js</h1>
    <p className="text-base mb-6">
      Hey, Meet the new Editor. On this page you can see it in action - try to edit this text.
    </p>
    <hr className="border-r-2" />
    <div className="mt-3">
      <h2 className="text-2xl mb-6 font-semibold">Key features</h2>
      <ul className="list-disc list-inside">
        <li>It is a block-styled editor</li>
        <li>It returns clean data output in JSON</li>
        <li>Designed to be extendable and pluggable with simple API</li>
      </ul>
      <h2 className="text-2xl my-6 font-semibold">What does it mean 《block-styled editor》</h2>
      <p>
        Workspace in classic editors is made of a single contenteditable element, used to create
        different HTML markups. Editor.js workspace consists of separate Blocks: paragraphs,
        headings, images, lists, quotes, etc. Each of them is an independent contenteditable element
        (or more complex structure) provided by Plugin and united by editor&apos;s Core.
      </p>
    </div>
  </section>
)

export default Contents
