import UserProfile from '#models/user_profile'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await UserProfile.createMany([
      {
        id: 1,
        userId: 1,
        genre: 'bizarre',
        orientation: 'à gauche?',
        size: 5,
        weight: 12,
        penis_size: 4,
        hairColor: 'auburn',
        eyeColor: 'jaune cyrose'
      },
      {
        id: 2,
        userId: 2,
        genre: 'bizarre',
        orientation: 'à droite?',
        size: 5,
        weight: 12,
        bra_cup: 'bonnet A',
        hairColor: 'auburn',
        eyeColor: 'jaune cyrose'
      },
      {
        id: 3,
        userId: 3,
        genre: 'bizarre',
        orientation: 'en haut?',
        size: 5,
        weight: 12,
        penis_size: 8,
        bra_cup: 'bonnet B',
        hairColor: 'auburn',
        eyeColor: 'jaune cyrose'
      },
      {
        id: 4,
        userId: 4,
        genre: 'bizarre',
        orientation: 'en bas?',
        size: 5,
        weight: 12,
        penis_size: 10,
        hairColor: 'auburn',
        eyeColor: 'jaune cyrose'
      },
      {
        id: 5,
        userId: 5,
        genre: 'bizarre',
        orientation: 'tout droit?',
        size: 5,
        weight: 12,
        bra_cup: 'bonnet C',
        hairColor: 'auburn',
        eyeColor: 'jaune cyrose'
      }
    ])
  }
}