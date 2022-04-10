import { Migration } from '@mikro-orm/migrations';

export class Migration20220410113104 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "post" rename column "created_at" to "created_ats";');
  }

  async down(): Promise<void> {
    this.addSql('alter table "post" rename column "created_ats" to "created_at";');
  }

}
