import Gallery from '#models/gallery'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Gallery.createMany([
      {
        userId: 1,
        filePath: "public/gallery/1/beh.jpg",
        cover: true
      },
      {
        userId: 2,
        filePath: "public/gallery/2/beh.jpg",
        cover: true
      },
      {
        userId: 3,
        filePath: "public/gallery/3/beh.jpg",
        cover: true
      },
      {
        userId: 4,
        filePath: "public/gallery/4/beh.jpg",
        cover: true
      },
      {
        userId: 5,
        filePath: "public/gallery/5/beh.jpg",
        cover: true
      },
      {
        userId: 6,
        filePath: "public/gallery/6/beh.jpg",
        cover: true
      },
    ])
  }
}
