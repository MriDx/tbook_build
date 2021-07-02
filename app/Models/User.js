"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
const Hash_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Hash"));
const Slot_1 = __importDefault(require("./Slot"));
const TeacherSlot_1 = __importDefault(require("./TeacherSlot"));
const BookRequest_1 = __importDefault(require("./BookRequest"));
const StudentDetail_1 = __importDefault(require("./StudentDetail"));
class User extends Orm_1.BaseModel {
    static async hashPassword(user) {
        if (user.$dirty.password) {
            user.password = await Hash_1.default.make(user.password);
        }
    }
}
__decorate([
    Orm_1.column({ isPrimary: true }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], User.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], User.prototype, "updatedAt", void 0);
__decorate([
    Orm_1.hasMany(() => Slot_1.default, {
        localKey: 'user_id',
        foreignKey: 'id'
    }),
    __metadata("design:type", Object)
], User.prototype, "created_slots", void 0);
__decorate([
    Orm_1.hasMany(() => TeacherSlot_1.default, {
        localKey: 'user_id',
        foreignKey: 'id'
    }),
    __metadata("design:type", Object)
], User.prototype, "slots", void 0);
__decorate([
    Orm_1.hasMany(() => BookRequest_1.default, {
        localKey: 'id',
        foreignKey: 'student_id'
    }),
    __metadata("design:type", Object)
], User.prototype, "book_requests", void 0);
__decorate([
    Orm_1.hasOne(() => StudentDetail_1.default, {
        localKey: 'id',
        foreignKey: 'student_id'
    }),
    __metadata("design:type", Object)
], User.prototype, "student_details", void 0);
__decorate([
    Orm_1.beforeSave(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User]),
    __metadata("design:returntype", Promise)
], User, "hashPassword", null);
exports.default = User;
//# sourceMappingURL=User.js.map