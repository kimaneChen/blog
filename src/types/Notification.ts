import Avatar from '@/types/Avatar'

export enum Type {
  Comment,
  Reply,
  React,
}

interface Notification {
  title: string
  inline?: string
  responses: {
    id: string
    content: string
    avatar?: Avatar
    inline?: string
    type: Type
    relativeTime: string
    isChecked?: boolean
  }[]
}

export default Notification
