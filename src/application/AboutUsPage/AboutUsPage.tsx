import { NextPage } from 'next'
import LegalMarkdownLayout, { Title } from '@/application/LegalMarkdownLayout'
import LegalMarkdown from '@/application/LegalMarkdown'
import about from './assets/about.md'
import TeamCards from './components/TeamCards'

const AboutUsPage: NextPage = () => (
  <LegalMarkdownLayout title={Title.About}>
    <LegalMarkdown>{about}</LegalMarkdown>
    <TeamCards />
  </LegalMarkdownLayout>
)

export default AboutUsPage
