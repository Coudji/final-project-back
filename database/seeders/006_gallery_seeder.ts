import Gallery from '#models/gallery'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Gallery.createMany([
      {
        userId: 1,
        url: "http://localhost:3333/uploads/gallery/1/jm1.png",
        cover: false
      },
      {
        userId: 1,
        url: "http://localhost:3333/uploads/gallery/1/jm2.jpg",
        cover: true
      },
      {
        userId: 2,
        url: "http://localhost:3333/uploads/gallery/2/62bbf7a517a46cb642c01b6d9ba655a7.png",
        cover: true
      },
      {
        userId: 3,
        url: "http://localhost:3333/uploads/gallery/3/43b8ef98b263fe8059daa5af5b2b34a7.jpg",
        cover: true
      },
      {
        userId: 3,
        url: "http://localhost:3333/uploads/gallery/3/5c03e90f285e288cb07b8b984773bc8f.jpg",
        cover: false
      },
      {
        userId: 4,
        url: "http://localhost:3333/uploads/gallery/4/be031b7ddf84623e14f1b8d7176993fe.jpg",
        cover: true
      },
      {
        userId: 4,
        url: "http://localhost:3333/uploads/gallery/4/5985a3fab33cbb740d315735452716cd.jpg",
        cover: false
      },
      {
        userId: 5,
        url: "http://localhost:3333/uploads/gallery/5/bfa6b16a65ed8b274a42c4696865b454.jpg",
        cover: true
      },
      {
        userId: 6,
        url: "http://localhost:3333/uploads/gallery/6/d310d8bfa2968dfe35fc08e61bfd5527.jpg",
        cover: true
      },
      {
        userId: 7,
        url: "http://localhost:3333/uploads/gallery/7/79fd2082dc65f16e69ab88d92cdbd03f.jpg",
        cover: true
      },
      {
        userId: 7,
        url: "http://localhost:3333/uploads/gallery/7/b4b32705f8f7b4d476ac9da2f6d1b7a9.jpg",
        cover: false
      },
      {
        userId: 8,
        url: "http://localhost:3333/uploads/gallery/8/2f3389419fd94f1bcb67cc27634566d8.jpg",
        cover: true
      },
      {
        userId: 9,
        url: "http://localhost:3333/uploads/gallery/9/5d56e2d93be35be9240fe6a5833ed64d.jpg",
        cover: true
      },
      {
        userId: 10,
        url: "http://localhost:3333/uploads/gallery/10/f34083345266ec8dd79e46fcad85983d.png",
        cover: true
      },
      {
        userId: 10,
        url: "http://localhost:3333/uploads/gallery/10/2f86b2bd9e0fa6cb6e8a0d93d03420d2.png",
        cover: false
      },
      {
        userId: 11,
        url: "http://localhost:3333/uploads/gallery/11/5316_backdrop_scale_1280xauto.jpg",
        cover: true
      },
      {
        userId: 12,
        url: "http://localhost:3333/uploads/gallery/12/20ab0ea03bbd63267b946fbd8d5fac0a.jpeg",
        cover: true
      },
      {
        userId: 21,
        url: "http://localhost:3333/uploads/gallery/21/d5e402b05df19a40f21263f118c91840f8493192.jpg",
        cover: true
      },
      {
        userId: 13,
        url: "http://localhost:3333/uploads/gallery/13/20ab0ea03bbd63267b946fbd8d5fac0a.jpeg",
        cover: true
      },
    ])
  }
}
