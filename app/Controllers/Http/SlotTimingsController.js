"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SlotTiming_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/SlotTiming"));
class SlotTimingsController {
    async index({}) {
    }
    async create({ request, response }) {
        let { timing } = request.all();
        await SlotTiming_1.default.create({ timing: timing });
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
}
exports.default = SlotTimingsController;
//# sourceMappingURL=SlotTimingsController.js.map