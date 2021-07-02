"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TeacherSlot_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/TeacherSlot"));
const TeacherSlotValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/TeacherSlotValidator"));
class TeacherSlotsController {
    async index({}) {
        return await TeacherSlot_1.default.query()
            .preload('slot', (b) => b.preload('timing'))
            .preload('teacher', (b) => b.select(['id', 'name']));
    }
    async create({ request, response }) {
        const data = await request.validate(TeacherSlotValidator_1.default);
        await TeacherSlot_1.default.create({ slot_id: data.slot_id, user_id: data.teacher_id });
        return response.status(200).json({ status: 'success' });
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
    async myslots({ auth }) {
        const user = await auth.use('api').authenticate();
        return await TeacherSlot_1.default.query()
            .where('user_id', user.id)
            .preload('requests');
    }
}
exports.default = TeacherSlotsController;
//# sourceMappingURL=TeacherSlotsController.js.map