"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class SlotCreateValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            'name': Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.required(),
                Validator_1.rules.unique({ column: 'name', table: 'slots' })
            ]),
            'timing_id': Validator_1.schema.number([
                Validator_1.rules.required(),
                Validator_1.rules.exists({ column: 'id', table: 'slot_timings' })
            ])
        });
        this.messages = {};
    }
}
exports.default = SlotCreateValidator;
//# sourceMappingURL=SlotCreateValidator.js.map