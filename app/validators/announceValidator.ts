import vine from '@vinejs/vine';

export const announceValidator = vine.compile(
  vine.object({
    userId: vine.number(),
    title: vine.string(),
    description: vine.string().minLength(3).maxLength(20),
    infidelityCard: vine.boolean(),
    private: vine.boolean(),
    escort: vine.boolean(),
    practices: vine.array(vine.number()),
    pricing: vine.object({
        '15min': vine.number(),
        '30min': vine.number(),
        '45min': vine.number(),
        '60min': vine.number(),
    })
  })
);