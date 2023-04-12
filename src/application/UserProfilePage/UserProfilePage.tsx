import { NextPage } from 'next'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import UserLayout from '@/application/UserLayout'
import FormGroup from './components/FormGroup'
import AvatarForm from './components/FormGroup/components/AvatarForm'
import TextForm from './components/FormGroup/components/TextForm'
import Label from './components/FormGroup/components/TextForm/components/Label'

const UserProfilesPage: NextPage = () => (
  <UserLayout className="max-w-[1284px] px-9 lg:px-[72px]">
    <FormGroup heading="Your Name">
      <TextForm
        name="name"
        registerOptions={{ maxLength: 25, required: true }}
        label={<Label text="Name" />}
      />
    </FormGroup>
    <FormGroup heading="Your Occupation">
      <TextForm
        name="occupation"
        registerOptions={{ maxLength: 25, required: true }}
        label={<Label text="Occupation" />}
      />
    </FormGroup>
    <FormGroup>
      <AvatarForm />
    </FormGroup>
    <FormGroup heading="Your Self Introduction">
      <TextForm
        name="intro"
        long
        registerOptions={{ maxLength: 80, required: true }}
        label={<Label text="Intro" />}
      />
    </FormGroup>
    <FormGroup heading="Your Social Link">
      <TextForm
        name="linkedin"
        registerOptions={{ required: true }}
        label={<Label text="LinkedIn" icon={<FaLinkedin size="20px" />} visible />}
      />
      <TextForm
        name="github"
        registerOptions={{ required: true }}
        label={<Label text="GitHub" icon={<FaGithub size="20px" />} visible />}
      />
    </FormGroup>
  </UserLayout>
)

export default UserProfilesPage
