import Announce from '#models/announce'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Announce.createMany([
      {
        id: 1,
        userId: 1,
        title: "oups i didn't again",
        description: "caliente lorem20, lorem30 mais sans use la commande lorem dans html",
        infidelityCard: false,
        private: true,
        escort: true,
        practice: [1, 2, 3, 4, 5],
        
      }
    ])
  }
}