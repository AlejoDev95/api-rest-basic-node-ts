"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsDelegate = void 0;
const whitelist = ["http://localhost:4200", "http://localhost:5000"];
const corsDelegate = (req, callback) => {
    var _a;
    let corsOptions;
    if (whitelist.indexOf((_a = req.header("Origin")) !== null && _a !== void 0 ? _a : "") !== -1) {
        corsOptions = { origin: true };
    }
    else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};
exports.corsDelegate = corsDelegate;
//# sourceMappingURL=cors.js.map