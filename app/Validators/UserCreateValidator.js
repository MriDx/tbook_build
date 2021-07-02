"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class UserCreateValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            'name': Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.required()
            ]),
            'email': Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.required(),
                Validator_1.rules.email()
            ]),
            'password': Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.required()
            ])
        });
        this.messages = {};
    }
}
exports.default = UserCreateValidator;
//# sourceMappingURL=UserCreateValidator.js.map