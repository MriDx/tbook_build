"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Slot_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Slot"));
const SlotCreateValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/SlotCreateValidator"));
class SlotsController {
    async index({}) {
    }
    async create({ request, auth, response }) {
        const data = await request.validate(SlotCreateValidator_1.default);
        const user = await auth.use('api').authenticate();
        const slot = new Slot_1.default();
        slot.name = data.name;
        slot.timing_id = data.timing_id;
        slot.user_id = user.id;
        await slot.save();
        return response.status(200).json({ status: 'succes' });
    }
    async store({}) {
    }
    async show({}) {
    }
    async edit({}) {
    }
    async update({}) {
    }
    async destroy({}) {
    }
}
exports.default = SlotsController;
//# sourceMappingURL=SlotsController.js.map