"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const organization_controller_1 = require("./organization.controller");
const organization_service_1 = require("./organization.service");
const user_entity_1 = require("../entities/user.entity");
const organization_entity_1 = require("../entities/organization.entity");
const subscription_entity_1 = require("../entities/subscription.entity");
const payment_entity_1 = require("../entities/payment.entity");
let OrganizationModule = class OrganizationModule {
};
exports.OrganizationModule = OrganizationModule;
exports.OrganizationModule = OrganizationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                user_entity_1.User,
                organization_entity_1.Organization,
                subscription_entity_1.Subscription,
                payment_entity_1.Payment
            ])
        ],
        controllers: [organization_controller_1.OrganizationController],
        providers: [organization_service_1.OrganizationService],
        exports: [organization_service_1.OrganizationService]
    })
], OrganizationModule);
//# sourceMappingURL=organization.module.js.map