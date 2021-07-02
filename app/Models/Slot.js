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
const SlotTiming_1 = __importDefault(require("./SlotTiming"));
class Slot extends Orm_1.BaseModel {
}
__decorate([
    Orm_1.column({ isPrimary: true }),
    __metadata("design:type", Number)
], Slot.prototype, "id", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Slot.prototype, "name", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], Slot.prototype, "timing_id", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], Slot.prototype, "user_id", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], Slot.prototype, "capacity", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Slot.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Slot.prototype, "updatedAt", void 0);
__decorate([
    Orm_1.hasOne(() => SlotTiming_1.default, {
        localKey: 'timing_id',
        foreignKey: 'id'
    }),
    __metadata("design:type", Object)
], Slot.prototype, "timing", void 0);
exports.default = Slot;
//# sourceMappingURL=Slot.js.map