"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class BookRequestValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            'teacher_slot_id': Validator_1.schema.number([
                Validator_1.rules.required(),
                Validator_1.rules.exists({ column: 'id', table: 'teacher_slots' })
            ])
        });
        this.messages = {};
    }
}
exports.default = BookRequestValidator;
//# sourceMappingURL=BookRequestValidator.js.map