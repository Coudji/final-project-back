import Practice from '#models/practice'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    await Practice.createMany([
      {
        id: 1,
        practiceName: 'massage classic',
        practiceCategoryId: 1
      },
      {
        id: 2,
        practiceName: 'massage tantra',
        practiceCategoryId: 1
      },
      {
        id: 3,
        practiceName: 'massage nuru',
        practiceCategoryId: 1
      },
      {
        id: 4,
        practiceName: 'massage sensuel',
        practiceCategoryId: 1
      },
      {
        id: 5,
        practiceName: 'massage + finitions',
        practiceCategoryId: 1
      },
      {
        id: 6,
        practiceName: 'fellation sans capotes',
        practiceCategoryId: 2
      },
      {
        id: 7,
        practiceName: 'fellation avec capotes',
        practiceCategoryId: 2
      },
      {
        id: 8,
        practiceName: 'cunnilingus',
        practiceCategoryId: 2
      },
      {
        id: 9,
        practiceName: 'doigter',
        practiceCategoryId: 2
      },
      {
        id: 10,
        practiceName: 'embrasser avec la langue',
        practiceCategoryId: 2
      },
      {
        id: 11,
        practiceName: 'sucer les tétons',
        practiceCategoryId: 2
      },
      {
        id: 12,
        practiceName: 'sexe sans capotes',
        practiceCategoryId: 3
      },
      {
        id: 13,
        practiceName: 'sexe avec capotes',
        practiceCategoryId: 3
      },
      {
        id: 14,
        practiceName: 'double pénétration',
        practiceCategoryId: 3
      },
      {
        id: 15,
        practiceName: 'sodomie',
        practiceCategoryId: 3
      },
      {
        id: 16,
        practiceName: 'avaler du sperme',
        practiceCategoryId: 3
      },
      {
        id: 17,
        practiceName: 'éjaculer sur les seins ou sur le corps',
        practiceCategoryId: 3
      },
      {
        id: 18,
        practiceName: 'éjaculer sur le visage',
        practiceCategoryId: 3
      },
      {
        id: 19,
        practiceName: 'éjaculer dans la bouche',
        practiceCategoryId: 3
      },
      {
        id: 20,
        practiceName: 'plug-and-play',
        practiceCategoryId: 3
      },
      {
        id: 21,
        practiceName: 'bondage',
        practiceCategoryId: 4
      },
      {
        id: 22,
        practiceName: 'facesitting',
        practiceCategoryId: 4
      },
      {
        id: 23,
        practiceName: 'jeux de rôle',
        practiceCategoryId: 4
      },
      {
        id: 24,
        practiceName: 'partouze',
        practiceCategoryId: 4
      },
      {
        id: 25,
        practiceName: 'golden shower',
        practiceCategoryId: 4
      },
      {
        id: 26,
        practiceName: 'Amaury la fontaine',
        practiceCategoryId: 4
      },
      {
        id: 27,
        practiceName: 'pieds',
        practiceCategoryId: 4
      },
      {
        id: 28,
        practiceName: 'fist / ventriloquie',
        practiceCategoryId: 4
      },
      {
        id: 29,
        practiceName: 'nuitée',
        practiceCategoryId: 5
      },
      {
        id: 30,
        practiceName: 'dîner',
        practiceCategoryId: 5
      },
      {
        id: 31,
        practiceName: 'échangisme',
        practiceCategoryId: 5
      },
      {
        id: 32,
        practiceName: 'film / photo',
        practiceCategoryId: 5
      },
      {
        id: 33,
        practiceName: 'striptease',
        practiceCategoryId: 5
      },
      {
        id: 34,
        practiceName: 'sexe en voiture',
        practiceCategoryId: 5
      },
      {
        id: 35,
        practiceName: 'sexe en plein air',
        practiceCategoryId: 5
      },
      {
        id: 36,
        practiceName: 'very quicky',
        practiceCategoryId: 5
      },
      {
        id: 37,
        practiceName: 'FT21',
        practiceCategoryId: 6
      },
      {
        id: 38,
        practiceName: 'accessible fauteuil roulant',
        practiceCategoryId: 6
      },
      {
        id: 39,
        practiceName: 'déficience auditive',
        practiceCategoryId: 6
      },
      {
        id: 40,
        practiceName: 'déficience visuelle',
        practiceCategoryId: 6
      },
      {
        id: 41,
        practiceName: 'déficience cognitive',
        practiceCategoryId: 6
      },
      {
        id: 42,
        practiceName: 'déficience physique',
        practiceCategoryId: 6
      },
      {
        id: 43,
        practiceName: 'déficience de la parole',
        practiceCategoryId: 6
      }
    ])
  }
}