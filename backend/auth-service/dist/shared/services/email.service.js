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
var EmailService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let EmailService = EmailService_1 = class EmailService {
    constructor(configService) {
        this.configService = configService;
        this.logger = new common_1.Logger(EmailService_1.name);
        this.isDev = configService.get('environment') === 'development';
        this.frontendUrl = configService.get('frontend.url');
        this.fromEmail = configService.get('email.from');
    }
    async sendVerificationEmail(email, token) {
        const verificationUrl = `${this.frontendUrl}/verify-email?token=${token}`;
        if (this.isDev) {
            this.logger.debug(`[DEV MODE] Sending verification email to ${email}`);
            this.logger.debug(`Verification URL: ${verificationUrl}`);
            return;
        }
        this.logger.log(`Sending verification email to ${email}`);
    }
    async sendPasswordResetEmail(email, token) {
        const resetUrl = `${this.frontendUrl}/reset-password?token=${token}`;
        if (this.isDev) {
            this.logger.debug(`[DEV MODE] Sending password reset email to ${email}`);
            this.logger.debug(`Reset URL: ${resetUrl}`);
            return;
        }
        this.logger.log(`Sending password reset email to ${email}`);
    }
    async sendLoginNotificationEmail(email, ipAddress, userAgent) {
        if (this.isDev) {
            this.logger.debug(`[DEV MODE] Sending login notification to ${email}`);
            this.logger.debug(`Login details: IP=${ipAddress}, UA=${userAgent}`);
            return;
        }
        this.logger.log(`Sending login notification to ${email}`);
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = EmailService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], EmailService);
//# sourceMappingURL=email.service.js.map