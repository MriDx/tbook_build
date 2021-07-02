"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Slots extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'slots';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('name').notNullable();
            table.integer('timing_id').unsigned().references('id').inTable('slot_timings');
            table.integer('user_id').unsigned().references('id').inTable('users');
            table.integer('capacity').defaultTo(100);
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Slots;
//# sourceMappingURL=1625160541032_slots.js.map