import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        id: 1,
        firstname: 'Jean-Marc',
        lastname: 'Panacloc',
        nickname: 'JP',
        email: 'ft21@test.com',
        password: '1234',
        address: {
          street: 'oulalalala',
          number: '7',
          city: 'Berninois',
          zip_code: 7500
        }
      },
      {
        id: 2, 
        firstname: 'Francky', 
        lastname: 'Tchibozomique', 
        nickname: 'FT1', 
        email: 'ft210@test.com', 
        password: '1234', 
        address: {
          street: 'oulalalala2',
          number: '7b',
          city: 'Berninois',
          zip_code: 7500       
        }
      },
      {
        id: 3, 
        firstname: 'Jeff', 
        lastname: 'Colcanap', 
        nickname: 'FT2', 
        email: 'ft214@test.com', 
        password: '1234', 
        address: {
          street: 'oulalalala3',
          number: '7c',
          city: 'Berninois',
          zip_code: 7500       
        }
      },
      {
        id: 4, 
        firstname: 'Jean', 
        lastname: 'Culle', 
        nickname: 'FT3', 
        email: 'ft2140@test.com', 
        password: '1234', 
        address: {
          street: 'oulalalala31',
          number: '7c',
          city: 'Berninois',
          zip_code: 7500       
        }
      },
      {
        id: 5, 
        firstname: 'Nick', 
        lastname: 'Lenain', 
        nickname: 'FT24', 
        email: 'ft2148@test.com', 
        password: '1234', 
        address: {
          street: 'oulalalala7',
          number: '7c',
          city: 'Berninois',
          zip_code: 7500       
        }
      }
    ])
  }
}