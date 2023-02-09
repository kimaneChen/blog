import { z } from 'zod'

export const SuggestedTagsSchema = z.object({
  search: z.string(),
})

export type SuggestedTags = z.infer<typeof SuggestedTagsSchema>
