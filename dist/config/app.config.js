"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const config_1 = require("@nestjs/config");
const envs_config_1 = require("./envs.config");
exports.appConfig = (0, config_1.registerAs)('appConfig', () => { var _a; return envs_config_1.environmentConfig[((_a = process.env.NEST_ENV) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || 'local']; });
//# sourceMappingURL=app.config.js.map