"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCasesModule = void 0;
const common_1 = require("@nestjs/common");
const use_cases_service_1 = require("./services/use-cases.service");
const uses_cases_controller_1 = require("./controllers/uses-cases.controller");
const movies_module_1 = require("../domain/movies/movies.module");
let UseCasesModule = class UseCasesModule {
};
UseCasesModule = __decorate([
    (0, common_1.Module)({
        imports: [movies_module_1.MoviesModule],
        controllers: [uses_cases_controller_1.UsesCasesController],
        providers: [use_cases_service_1.UseCasesService],
    })
], UseCasesModule);
exports.UseCasesModule = UseCasesModule;
//# sourceMappingURL=application.module.js.map