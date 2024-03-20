import vine from '@vinejs/vine'
import { FieldContext } from '@vinejs/vine/types'

export const patchUserValidator = vine.compile(
  vine.object({
    firstname: vine.string().maxLength(20).optional(),
    lastname: vine.string().maxLength(20).optional(),
    nickname: vine.string().minLength(3).maxLength(20).optional(),
    email: vine
      .string()
      .email()
      .maxLength(254)
      .optional(),
    password: vine.string().minLength(8).maxLength(32).optional(),
    niss: vine.string().maxLength(15).optional(),
    address: vine
      .object({
        street: vine.string(),
        number: vine.string(),
        city: vine.string(),
        zip_code: vine.number(),
      })
      .optional(),
  })
)

export const userExistValidator = vine.compile(
  vine.object({
    params: vine.object({
      id: vine.number().exists(async (query, id) => {
        const user = await query.from('users').where('id', id).first()
        return !!user
      }),
    }),
  })
)

export const userCredentialValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .email()
      .unique(async (query, field) => {
        const user = await query.from('users').where('email', field).first()

        return !user
      }
    )
    .optional(),
    password: vine.string().minLength(8).maxLength(32).optional()
  }),
)

type Options = {
  age: number
}

function canfuck(
  value: unknown,
  options: Options,
  field: FieldContext
){

  if (typeof value !== 'string') {
    return
  }

  const dateString = value.slice(0,8).split(".").toString()
  const partialBirthYear = +dateString.substring(0,2)
  let birthYear = partialBirthYear >=0 && partialBirthYear <= 20 ? 2000 : 1900
  birthYear += partialBirthYear
  const today = new Date().getFullYear()
  const age = today - birthYear

  if (age < options.age){
    field.report(
      'T\'as pas 18 ans cheh!',
      'Range ta bite gros dégueulasse !',
      field
    )
  }
}
const canfuckRule = vine.createRule(canfuck)

export const isAbleToFuckValidator = vine.compile(
  vine.object({
    niss: vine.string().use(canfuckRule({age:18}))
  })
)