import { kebabCase } from 'lodash'
import AuthType from '@/types/AuthType'

const getEmailAuthLink = (authType: AuthType): string => `/${kebabCase(authType)}/email`

export default getEmailAuthLink
