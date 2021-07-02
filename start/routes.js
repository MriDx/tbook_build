"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/', async () => {
    return { hello: 'world' };
});
Route_1.default.group(() => {
    Route_1.default.post('login', 'UsersController.login');
    Route_1.default.get('me', 'UsersController.show').middleware(['auth']);
    Route_1.default.post('student/register', 'UsersController.studentRegister');
    Route_1.default.post('teacher/register', 'UsersController.teacherRegister');
    Route_1.default.post('slot/create', 'SlotsController.create').middleware(['admin']);
    Route_1.default.post('slot/timing/create', 'SlotTimingsController.create').middleware(['admin']);
    Route_1.default.post('slot/add', 'TeacherSlotsController.create').middleware(['admin']);
    Route_1.default.get('slot/available', 'TeacherSlotsController.index');
    Route_1.default.post('slot/request', 'BookRequestsController.create').middleware(['student']);
    Route_1.default.get('slot/requests', 'BookRequestsController.index').middleware(['admin']);
    Route_1.default.get('slot/requests/pending', 'BookRequestsController.pending').middleware(['admin']);
    Route_1.default.get('slot/requests/accepted', 'BookRequestsController.accepted').middleware(['admin']);
    Route_1.default.get('slot/requests/rejected', 'BookRequestsController.rejected').middleware(['admin']);
    Route_1.default.get('my_slots', 'TeacherSlotsController.myslots').middleware(['teacher']);
    Route_1.default.put('slot/action', 'BookRequestsController.action').middleware(['adminteacher']);
}).prefix('api/v1');
//# sourceMappingURL=routes.js.map