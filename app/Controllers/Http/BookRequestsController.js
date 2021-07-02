"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BookRequest_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/BookRequest"));
const TeacherSlot_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/TeacherSlot"));
const BookRequestActionValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/BookRequestActionValidator"));
const BookRequestValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/BookRequestValidator"));
const standalone_1 = require("@adonisjs/auth/build/standalone");
const standalone_2 = require("@adonisjs/core/build/standalone");
class BookRequestsController {
    async index({}) {
        return await BookRequest_1.default.query()
            .preload('slot_data', (b) => b.preload('slot', (b) => b.preload('timing')))
            .preload('requested_by', (b) => b.select(['id', 'name', 'email']));
    }
    async create({ request, auth, response }) {
        const data = await request.validate(BookRequestValidator_1.default);
        const student = await auth.use('api').authenticate();
        const bookRequest = new BookRequest_1.default();
        bookRequest.teacher_slot_id = data.teacher_slot_id;
        bookRequest.student_id = student.id;
        await bookRequest.save();
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
    async action({ request, auth, response }) {
        const data = await request.validate(BookRequestActionValidator_1.default);
        const user = await auth.use('api').authenticate();
        const bookRequest = await BookRequest_1.default.findByOrFail('id', data.request_id);
        if (user.role == 'teacher') {
            try {
                const teacherSlot = await TeacherSlot_1.default.findByOrFail('user_id', bookRequest.teacher_slot_id);
                if (teacherSlot.user_id != user.id) {
                    throw new standalone_2.Exception('');
                }
            }
            catch (error) {
                throw new standalone_1.AuthenticationException('You have no permission to fulfil the request', 'Unauthorized access', 'null', 'null');
            }
        }
        bookRequest.action_by = user.id;
        bookRequest.status = data.status;
        await bookRequest.save();
        return response.status(200).json({ status: 'success' });
    }
    async pending({}) {
        return await BookRequest_1.default.query()
            .where('status', 'requested')
            .preload('slot_data', (b) => b.preload('slot', (b) => b.preload('timing')))
            .preload('requested_by', (b) => b.select(['id', 'name', 'email']));
    }
    async accepted({}) {
        return await BookRequest_1.default.query()
            .where('status', 'accepted')
            .preload('slot_data', (b) => b.preload('slot', (b) => b.preload('timing')))
            .preload('requested_by', (b) => b.select(['id', 'name', 'email']));
    }
    async rejected({}) {
        return await BookRequest_1.default.query()
            .where('status', 'rejected')
            .preload('slot_data', (b) => b.preload('slot', (b) => b.preload('timing')))
            .preload('requested_by', (b) => b.select(['id', 'name', 'email']));
    }
}
exports.default = BookRequestsController;
//# sourceMappingURL=BookRequestsController.js.map