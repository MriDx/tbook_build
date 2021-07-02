"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class TeacherSlotValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            'slot_id': Validator_1.schema.number([
                Validator_1.rules.required(),
                Validator_1.rules.exists({ column: 'id', table: 'slots' })
            ]),
            'teacher_id': Validator_1.schema.number([
                Validator_1.rules.required(),
                Validator_1.rules.exists({ column: 'id', table: 'users' }),
            ])
        });
        this.messages = {};
    }
}
exports.default = TeacherSlotValidator;
//# sourceMappingURL=TeacherSlotValidator.js.map