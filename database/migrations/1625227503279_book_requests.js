"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class BookRequests extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'book_requests';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('teacher_slot_id').unsigned().references('id').inTable('teacher_slots');
            table.integer('student_id').unsigned().references('id').inTable('users');
            table.enum('status', ['requested', 'accepted', 'rejected']).defaultTo('requested');
            table.integer('action_by').nullable().unsigned().references('id').inTable('users');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = BookRequests;
//# sourceMappingURL=1625227503279_book_requests.js.map