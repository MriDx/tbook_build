"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Database"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const StudentRegisterValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/StudentRegisterValidator"));
const UserCreateValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/UserCreateValidator"));
const UserLoginValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/UserLoginValidator"));
class UsersController {
    async index({}) {
    }
    async create({ request, response }) {
        const data = await request.validate(UserCreateValidator_1.default);
        await User_1.default.create(data);
        return response.status(200).json({ status: 'success' });
    }
    async store({}) {
    }
    async show({ auth, response }) {
        const user = await auth.use('api').authenticate();
        let details = await user.related('student_details').query().first();
        return response.status(200).json({
            data: {
                user: user,
                details: details
            }
        });
    }
    async edit({}) {
    }
    async update({}) {
    }
    async destroy({}) {
    }
    async login({ request, auth }) {
        const data = await request.validate(UserLoginValidator_1.default);
        const token = await auth.use('api').attempt(data.email, data.password);
        return token.toJSON();
    }
    async studentRegister({ request, auth, response }) {
        const data = await request.validate(StudentRegisterValidator_1.default);
        const trx = await Database_1.default.transaction();
        try {
            const user = await User_1.default.create({ name: data.name, email: data.email, password: data.password }, trx);
            await user.related('student_details').create({ branch: data.branch, semester: data.semester });
            await trx.commit();
            const token = await auth.use('api').attempt(data.email, data.password);
            return response.status(200).json({
                status: 'success',
                data: token.toJSON()
            });
        }
        catch (error) {
            await trx.rollback();
        }
        return response.status(422).json({ status: 'failed' });
    }
    async teacherRegister({ request, auth, response }) {
        const data = await request.validate(UserCreateValidator_1.default);
        const user = await User_1.default.create({
            name: data.name,
            email: data.email,
            password: data.password,
            role: 'teacher'
        });
        await user.save();
        const token = await auth.use('api').attempt(data.email, data.password);
        return response.status(200).json({
            status: 'success',
            data: token.toJSON()
        });
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map