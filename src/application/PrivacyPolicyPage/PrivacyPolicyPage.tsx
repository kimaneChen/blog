import { NextPage } from 'next'
import LegalMarkdownLayout, { Title } from '@/application/LegalMarkdownLayout'
import LegalMarkdown from '@/application/LegalMarkdown'
import policy from './assets/policy.md'

const PrivacyPolicyPage: NextPage = () => (
  <LegalMarkdownLayout title={Title.Policy}>
    <LegalMarkdown>{policy}</LegalMarkdown>
  </LegalMarkdownLayout>
)

export default PrivacyPolicyPage
