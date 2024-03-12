import PracticeCategory from '#models/practice_category'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await PracticeCategory.createMany([
      {
        id: 1,
        categoryName: 'massage'
      },
      {
        id: 2,
        categoryName: 'preliminary'
      },
      {
        id: 3,
        categoryName: 'intimate'
      },
      {
        id: 4,
        categoryName: 'other'
      },
      {
        id: 5,
        categoryName: 'disability'
      }
    ])
  }
}