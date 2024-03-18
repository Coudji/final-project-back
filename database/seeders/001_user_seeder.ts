import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        firstname: 'Jean-Marc',
        lastname: 'Panacloc',
        niss: '80.08.24-124.89',
        nickname: 'JP',
        email: 'ft21@test.com',
        password: '12345678',
        address: {
          street: 'oulalalala',
          number: '7',
          city: 'Berninois',
          zip_code: 7500
        },
        userType: 'admin'
      },
      {
        firstname: 'Francky',
        lastname: 'Tchibozomique',
        niss: '82.09.14-123.87',
        nickname: 'FT1',
        email: 'ft210@test.com',
        password: '1234',
        address: {
          street: 'oulalalala2',
          number: '7b',
          city: 'Berninois',
          zip_code: 7500       
        },
      },
      {
        firstname: 'Jeff',
        lastname: 'Colcanap',
        niss: '78.12.04-114.29',
        nickname: 'FT2',
        email: 'ft214@test.com',
        password: '1234',
        address: {
          street: 'oulalalala3',
          number: '7c',
          city: 'Berninois',
          zip_code: 7500,
        },
      },
      {
        firstname: 'Jean',
        lastname: 'Culle',
        niss: '64.11.02-104.69',
        nickname: 'FT3',
        email: 'ft2140@test.com',
        password: '1234',
        address: {
          street: 'oulalalala31',
          number: '7c',
          city: 'Berninois',
          zip_code: 7500,
        },
      },
      {
        firstname: 'Nick',
        lastname: 'Lenain',
        niss: '48.02.12-112.29',
        nickname: 'FT24',
        email: 'ft2148@test.com',
        password: '1234',
        address: {
          street: 'oulalalala7',
          number: '7c',
          city: 'Berninois',
          zip_code: 7500,
        },
      },
    ])
  }
}
