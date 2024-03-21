import Gallery from '#models/gallery'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Gallery.createMany([
      {
        userId: 1,
        url: "http://localhost:3333/uploads/gallery/1/beh.jpg",
        cover: true
      },
      {
        userId: 2,
        url: "http://localhost:3333/uploads/gallery/2/beh.jpg",
        cover: true
      },
      {
        userId: 3,
        url: "http://localhost:3333/uploads/gallery/3/beh.jpg",
        cover: true
      },
      {
        userId: 4,
        url: "http://localhost:3333/uploads/gallery/4/beh.jpg",
        cover: true
      },
      {
        userId: 5,
        url: "http://localhost:3333/uploads/gallery/5/beh.jpg",
        cover: true
      },
      {
        userId: 6,
        url: "http://localhost:3333/uploads/gallery/6/beh.jpg",
        cover: true
      },
    ])
  }
}
