import UserProfile from '#models/user_profile'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await UserProfile.createMany([
      {
        userId: 1,
        genre: 'homme',
        orientation: 'hétéro',
        size: 5,
        weight: 12,
        penis_size: 4,
        hairColor: 'auburn',
        eyeColor: 'jaune cyrose',
      },
      {
        userId: 2,
        genre: 'femme',
        orientation: 'homo',
        size: 5,
        weight: 12,
        bra_cup: 'bonnet A',
        hairColor: 'auburn',
        eyeColor: 'jaune cyrose',
      },
      {
        userId: 3,
        genre: 'transformers',
        orientation: 'pas difficile',
        size: 5,
        weight: 12,
        penis_size: 8,
        bra_cup: 'bonnet B',
        hairColor: 'auburn',
        eyeColor: 'jaune cyrose',
      },
      {
        userId: 4,
        genre: 'robot',
        orientation: 'plug & play',
        size: 5,
        weight: 12,
        penis_size: 10,
        hairColor: 'auburn',
        eyeColor: 'jaune cyrose',
      },
      {
        userId: 5,
        genre: 'femme',
        orientation: 'hétéro',
        size: 5,
        weight: 12,
        bra_cup: 'bonnet C',
        hairColor: 'auburn',
        eyeColor: 'jaune cyrose',
      },
    ])
  }
}
