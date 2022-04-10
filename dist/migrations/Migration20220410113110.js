"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220410113110 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220410113110 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table "post" rename column "created_ats" to "created_at";');
    }
    async down() {
        this.addSql('alter table "post" rename column "created_at" to "created_ats";');
    }
}
exports.Migration20220410113110 = Migration20220410113110;
//# sourceMappingURL=Migration20220410113110.js.map