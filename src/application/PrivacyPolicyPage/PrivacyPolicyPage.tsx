import { NextPage } from 'next'
import LegalMarkdownLayout from '@/components/LegalMarkdownLayout'
import ReactMarkdown from 'react-markdown'
import policy from './assets/policy.md'

const PrivacyPolicyPage: NextPage = () => (
  <LegalMarkdownLayout title="Privacy Policy">
    <ReactMarkdown>{policy}</ReactMarkdown>
  </LegalMarkdownLayout>
)

export default PrivacyPolicyPage
