import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { randomUUID } from 'crypto'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        id: 1,
        firstname: 'Franck',
        lastname: 'Tchibozo',
        nickname: 'FT',
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
        firstname: 'Franckyz', 
        lastname: 'Thé', 
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
        firstname: 'Franckyz', 
        lastname: 'Thés', 
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
        firstname: 'Francis', 
        lastname: 'Tchizobi', 
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