"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const libs_1 = require("./../libs");
class UserService {
    constructor() {
        this.poolConnection = libs_1.poolConnection;
        this.poolConnection.on("error", (error) => console.error("Error on pool connection", error));
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return data;
        });
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM tasks";
            const rta = yield this.poolConnection.query(query);
            return rta.rows;
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return { id };
        });
    }
    update(id, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                id,
                changes,
            };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return { id };
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=users.service.js.map