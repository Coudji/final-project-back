import vine from '@vinejs/vine';

export const createAnnounceValidator = vine.compile(
  vine.object({
    title: vine.string().maxLength(64),
    description: vine.string().minLength(3).maxLength(600),
    infidelityCard: vine.boolean().optional(),
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

export const updateAnnounceValidator = vine.compile(
  vine.object({
    title: vine.string().maxLength(64).optional(),
    description: vine.string().minLength(3).maxLength(600).optional(),
    infidelityCard: vine.boolean().optional(),
    private: vine.boolean().optional(),
    escort: vine.boolean().optional(),
    practices: vine.array(vine.number()).optional(),
    pricing: vine.object({
      '_15': vine.number().optional(),
      '_30': vine.number().optional(),
      '_45': vine.number().optional(),
      '_60': vine.number().optional(),
    }).optional()
  })
)
