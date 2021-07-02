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
const Slot_1 = __importDefault(require("./Slot"));
const User_1 = __importDefault(require("./User"));
const BookRequest_1 = __importDefault(require("./BookRequest"));
class TeacherSlot extends Orm_1.BaseModel {
}
__decorate([
    Orm_1.column({ isPrimary: true }),
    __metadata("design:type", Number)
], TeacherSlot.prototype, "id", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], TeacherSlot.prototype, "slot_id", void 0);
__decorate([
    Orm_1.column({ serializeAs: 'teacher_id' }),
    __metadata("design:type", Number)
], TeacherSlot.prototype, "user_id", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], TeacherSlot.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], TeacherSlot.prototype, "updatedAt", void 0);
__decorate([
    Orm_1.hasOne(() => User_1.default, {
        localKey: 'user_id',
        foreignKey: 'id'
    }),
    __metadata("design:type", Object)
], TeacherSlot.prototype, "teacher", void 0);
__decorate([
    Orm_1.belongsTo(() => Slot_1.default, {
        localKey: 'id',
        foreignKey: 'slot_id'
    }),
    __metadata("design:type", Object)
], TeacherSlot.prototype, "slot", void 0);
__decorate([
    Orm_1.belongsTo(() => User_1.default, {
        localKey: 'id',
        foreignKey: 'user_id'
    }),
    __metadata("design:type", Object)
], TeacherSlot.prototype, "user", void 0);
__decorate([
    Orm_1.hasMany(() => BookRequest_1.default, {
        localKey: 'id',
        foreignKey: 'teacher_slot_id'
    }),
    __metadata("design:type", Object)
], TeacherSlot.prototype, "requests", void 0);
exports.default = TeacherSlot;
//# sourceMappingURL=TeacherSlot.js.map