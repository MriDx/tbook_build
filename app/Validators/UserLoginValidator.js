"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class UserLoginValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            'email': Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.required(),
                Validator_1.rules.email(),
                Validator_1.rules.exists({ column: 'email', table: 'users' }),
            ]),
            'password': Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.required()
            ])
        });
        this.messages = {};
    }
}
exports.default = UserLoginValidator;
//# sourceMappingURL=UserLoginValidator.js.map