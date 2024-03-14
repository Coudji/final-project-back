import Announce from '#models/announce'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Announce.createMany([
      {
        userId: 1,
        title: "oups i didn't again",
        description: 'caliente lorem20, lorem30 mais sans use la commande lorem dans html',
        infidelityCard: false,
        private: true,
        escort: true,
        practices: [1, 2, 3, 4, 5],
        pricing: {
          '15min': 50,
          '30min': 80,
          '45min': 110,
          '60min': 120,
        },
      },
      {
        userId: 2,
        title: 'Martine mange des Mister Freeze au ski',
        description: 'Martine se retrouve au ski et suce beaucoup de Mister Freeze',
        infidelityCard: false,
        private: true,
        escort: true,
        practices: [1, 2, 3, 4, 5],
        pricing: {
          '15min': 50,
          '30min': 80,
          '45min': 110,
          '60min': 120,
        },
      },
      {
        userId: 3,
        title: 'Vive les Tchoutches',
        description:
          "Les tchoutches c'est fantastique, surtout pour Amaury qui peut aller aux putes avec l'accord de sa femme",
        infidelityCard: false,
        private: true,
        escort: true,
        practices: [1, 2, 3, 4, 5],
        pricing: {
          '15min': 50,
          '30min': 80,
          '45min': 110,
          '60min': 120,
        },
      },
    ])
  }
}
