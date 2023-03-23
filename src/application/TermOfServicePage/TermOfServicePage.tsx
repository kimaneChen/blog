import { NextPage } from 'next'
import LegalMarkdownLayout, { Title } from '@/application/LegalMarkdownLayout'
import LegalMarkdown from '@/application/LegalMarkdown'
import term from './assets/term.md'

const TermOfServicePage: NextPage = () => (
  <LegalMarkdownLayout title={Title.Term}>
    <LegalMarkdown>{term}</LegalMarkdown>
  </LegalMarkdownLayout>
)

export default TermOfServicePage
