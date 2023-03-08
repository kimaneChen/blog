import { Tag as PrismaTag } from '@prisma/client'

interface Tag extends Pick<PrismaTag, 'id' | 'name'> {}

export default Tag
