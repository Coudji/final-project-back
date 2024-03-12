import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class index_seeder extends BaseSeeder {
  private async seed(Seeder: { default: typeof BaseSeeder }) {
    await new Seeder.default(this.client).run()
  }

  async run() {
    await this.seed(await import('#database/seeders/user_seeder'))
    await this.seed(await import('#database/seeders/user_profile_seeder'))
    await this.seed(await import('#database/seeders/practice_category_seeder'))
    await this.seed(await import('#database/seeders/practice_seeder'))
    await this.seed(await import('#database/seeders/announce_seeder'))
  }
}
