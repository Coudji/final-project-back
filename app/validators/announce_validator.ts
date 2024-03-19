import vine from '@vinejs/vine';

export const announceValidator = vine.compile(
  vine.object({
    userId: vine.number(),
    title: vine.string().maxLength(64),
    description: vine.string().minLength(3).maxLength(600),
    infidelityCard: vine.boolean(),
    private: vine.boolean(),
    escort: vine.boolean(),
    practices: vine.array(vine.number()),
    pricing: vine.object({
      '_15': vine.number().optional(),
      '_30': vine.number().optional(),
      '_45': vine.number().optional(),
      '_60': vine.number().optional(),
    })
  })
)
