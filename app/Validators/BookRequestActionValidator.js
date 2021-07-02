"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class BookRequestActionValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            'status': Validator_1.schema.enum(['requested', 'accepted', 'rejected'], [
                Validator_1.rules.required()
            ]),
            'request_id': Validator_1.schema.number([
                Validator_1.rules.required(),
                Validator_1.rules.exists({ column: 'id', table: 'book_requests' })
            ])
        });
        this.messages = {};
    }
}
exports.default = BookRequestActionValidator;
//# sourceMappingURL=BookRequestActionValidator.js.map