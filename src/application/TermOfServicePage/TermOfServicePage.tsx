import { NextPage } from 'next'
import ReactMarkdown from 'react-markdown'
import LegalMarkdownLayout from '@/components/LegalMarkdownLayout'
import term from './assets/term.md'

const TermOfServicePage: NextPage = () => (
  <LegalMarkdownLayout title="Term of Service">
    <ReactMarkdown>{term}</ReactMarkdown>
  </LegalMarkdownLayout>
)

export default TermOfServicePage
