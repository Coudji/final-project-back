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
        url: "http://localhost:3333/uploads/gallery/9/2f3389419fd94f1bcb67cc27634566d8.jpg",
        cover: true
      },
      {
        userId: 10,
        url: "http://localhost:3333/uploads/gallery/10/5d56e2d93be35be9240fe6a5833ed64d.jpg",
        cover: true
      },
      {
        userId: 11,
        url: "http://localhost:3333/uploads/gallery/11/2f86b2bd9e0fa6cb6e8a0d93d03420d2.png",
        cover: true
      },
      {
        userId: 11,
        url: "http://localhost:3333/uploads/gallery/11/f34083345266ec8dd79e46fcad85983d.png",
        cover: false
      },
      {
        userId: 12,
        url: "http://localhost:3333/uploads/gallery/12/5316_backdrop_scale_1280xauto.jpg",
        cover: true
      },
      {
        userId: 12,
        url: "http://localhost:3333/uploads/gallery/12/Sans_titre.jpg",
        cover: false
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
      {
        userId: 13,
        url: "http://localhost:3333/uploads/gallery/13/b24a2e1b25a6da393cb1fbf45347983a.jpeg",
        cover: false
      },
      {
        userId: 13,
        url: "http://localhost:3333/uploads/gallery/13/7bbfc93b934cbd09bc455b60a33a5753.jpeg",
        cover: false
      },
      {
        userId: 13,
        url: "http://localhost:3333/uploads/gallery/13/6bb928ccdd5542822fc48c4957a9431b.jpeg",
        cover: false
      },
      {
        userId: 14,
        url: "http://localhost:3333/uploads/gallery/14/53d8648e3f7cce36724832327c85f303.jpeg",
        cover: true
      },
      {
        userId: 15,
        url: "http://localhost:3333/uploads/gallery/15/sample_a5ef4c635d74550a41f8a57269f3a84b.jpg",
        cover: true
      },
      {
        userId: 16,
        url: "http://localhost:3333/uploads/gallery/16/sample_b01f4a117e220672b0d3c8a162746d28.jpg",
        cover: true
      },
      {
        userId: 16,
        url: "http://localhost:3333/uploads/gallery/16/sample_0fb6c6ef8ef1ee01b2551f1e9cf87ff9.jpg",
        cover: false
      },
      {
        userId: 19,
        url: "http://localhost:3333/uploads/gallery/19/sample_6c4b7c65c76ee479d0efe47b9ddec0e1.jpg",
        cover: true
      },
      {
        userId: 19,
        url: "http://localhost:3333/uploads/gallery/19/sample_e168529b399415487746a8ac3611733e.jpg",
        cover: false
      },
    ])
  }
}
