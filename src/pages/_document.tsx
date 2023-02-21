import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

const Document: React.FC = () => (
  <Html lang="en">
    <Head />
    <body>
      <Main />
      <div id="modal" />
      <NextScript />
    </body>
  </Html>
)

export default Document
