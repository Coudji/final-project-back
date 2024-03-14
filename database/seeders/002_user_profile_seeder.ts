import UserProfile from '#models/user_profile'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await UserProfile.createMany([
      {
        userId: 1,
        genre: 'homme',
        orientation: 'à gauche?',
        size: 5,
        weight: 12,
        penis_size: 4,
        hairColor: 'auburn',
        eyeColor: 'jaune cyrose',
      },
      {
        userId: 2,
        genre: 'femme',
        orientation: 'à droite?',
        size: 5,
        weight: 12,
        bra_cup: 'bonnet A',
        hairColor: 'auburn',
        eyeColor: 'jaune cyrose',
      },
      {
        userId: 3,
        genre: 'déviant',
        orientation: 'en haut?',
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
        orientation: 'en bas?',
        size: 5,
        weight: 12,
        penis_size: 10,
        hairColor: 'auburn',
        eyeColor: 'jaune cyrose',
      },
      {
        userId: 5,
        genre: 'femme',
        orientation: 'tout droit?',
        size: 5,
        weight: 12,
        bra_cup: 'bonnet C',
        hairColor: 'auburn',
        eyeColor: 'jaune cyrose',
      },
    ])
  }
}
