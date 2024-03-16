import vine from '@vinejs/vine';

export const userProfileValidator = vine.compile(
  vine.object({
    userId: vine.number(),
    genre: vine.enum(['homme', 'femme', 'robot', 'déviant']),
    orientation: vine.string(),
    size: vine.number(),
    weight: vine.number(),
    penis_size: vine.number(),
    bra_cup: vine.string(),
    hairColor: vine.string(),
    eyeColor: vine.string(),
  })
);
