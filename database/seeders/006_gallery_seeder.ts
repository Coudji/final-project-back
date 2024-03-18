import Gallery from '#models/gallery'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Gallery.createMany([
      {
        userId: 1,
        fileName: "Trouduc",
        cover: false,
      },
      {
        userId: 2,
        fileName: "JeSuisDansLeGameEnClaquette",
        cover: true,
      },
      {
        userId: 3,
        fileName: "photoDeBidulle",
        cover: true,
      },
      {
        userId: 4,
        fileName: "photo4",
        cover: true,
      },
      {
        userId: 5,
        fileName: "photo2",
        cover: true,
      },
      {
        userId: 6,
        fileName: "photoPhoto",
        cover: true,
      },
    ])
  }
}
