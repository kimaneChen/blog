import { NextPage } from 'next'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import UserLayout, { Size } from '@/application/UserLayout'
import useSWR from 'swr'
import User from '@/types/User'
import Loading from '@/components/Loading'
import FormGroup from './components/FormGroup'
import AvatarForm from './components/FormGroup/components/AvatarForm'
import TextForm from './components/FormGroup/components/TextForm'
import Label from './components/FormGroup/components/TextForm/components/Label'

const UserProfilesPage: NextPage = () => {
  const { data, isLoading } = useSWR<User>(`/api/user/profile`)
  return (
    <UserLayout className="px-9 lg:px-[72px]" size={Size.Large}>
      {isLoading ? (
        <div className="h-[900px] flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <>
          <FormGroup heading="Your Name">
            <TextForm
              name="name"
              prompt="username"
              registerOptions={{ maxLength: 25, required: true }}
              label={<Label text="Name" />}
              defaultValue={data?.name}
            />
          </FormGroup>
          <FormGroup heading="Your Occupation">
            <TextForm
              name="occupation"
              prompt="occupation label"
              registerOptions={{ maxLength: 25, required: true }}
              label={<Label text="Occupation" />}
              defaultValue={data?.occupation}
            />
          </FormGroup>
          <FormGroup>
            <AvatarForm />
          </FormGroup>
          <FormGroup heading="Your Self Introduction">
            <TextForm
              name="selfIntroduction"
              long
              prompt="self-introduction"
              registerOptions={{ maxLength: 80, required: true }}
              label={<Label text="Intro" />}
              defaultValue={data?.selfIntroduction}
            />
          </FormGroup>
          <FormGroup heading="Your Social Link">
            <TextForm
              name="linkedInLink"
              prompt="Linkedin"
              registerOptions={{ required: true }}
              label={<Label text="LinkedIn" icon={<FaLinkedin size="20px" />} visible />}
              defaultValue={data?.linkedInLink}
            />
            <TextForm
              name="gitHubLink"
              prompt="Github"
              registerOptions={{ required: true }}
              label={<Label text="GitHub" icon={<FaGithub size="20px" />} visible />}
              defaultValue={data?.gitHubLink}
            />
          </FormGroup>
        </>
      )}
    </UserLayout>
  )
}

export default UserProfilesPage
