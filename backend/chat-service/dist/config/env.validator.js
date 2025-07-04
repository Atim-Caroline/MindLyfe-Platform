"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const Joi = require("joi");
const validate = (config) => {
    const schema = Joi.object({
        NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
        PORT: Joi.number().default(3003),
        SERVICE_NAME: Joi.string().default('chat-service'),
        DB_HOST: Joi.string().default('localhost'),
        DB_PORT: Joi.number().default(5432),
        DB_USERNAME: Joi.string().default('postgres'),
        DB_PASSWORD: Joi.string().default('postgres'),
        DB_NAME: Joi.string().default('mindlyfe_chat'),
        DB_SYNC: Joi.boolean().default(false),
        DB_LOGGING: Joi.boolean().default(false),
        JWT_SECRET: Joi.string().min(32).default('mindlyf-chat-secret-key-change-in-production'),
        JWT_EXPIRES_IN: Joi.string().default('15m'),
        REDIS_HOST: Joi.string().default('localhost'),
        REDIS_PORT: Joi.number().default(6379),
        REDIS_PASSWORD: Joi.string().allow('').default(''),
        SOCKET_CORS_ORIGIN: Joi.string().default('*'),
        AUTH_SERVICE_URL: Joi.string().uri().default('http://auth-service:3001'),
        COMMUNITY_SERVICE_URL: Joi.string().uri().default('http://community-service:3004'),
        TELETHERAPY_SERVICE_URL: Joi.string().uri().default('http://teletherapy-service:3002'),
        NOTIFICATION_SERVICE_URL: Joi.string().uri().default('http://notification-service:3005'),
        AUTH_SERVICE_TOKEN: Joi.string().min(16).default('mindlyf-inter-service-auth-token'),
        COMMUNITY_SERVICE_TOKEN: Joi.string().min(16).default('mindlyf-inter-service-community-token'),
        TELETHERAPY_SERVICE_TOKEN: Joi.string().min(16).default('mindlyf-inter-service-teletherapy-token'),
        NOTIFICATION_SERVICE_TOKEN: Joi.string().min(16).default('mindlyf-inter-service-notification-token'),
        MAX_FILE_SIZE: Joi.number().default(10485760),
        ALLOWED_FILE_TYPES: Joi.string().default('jpg,jpeg,png,gif,pdf,doc,docx,txt'),
        UPLOAD_DESTINATION: Joi.string().default('./uploads'),
        RATE_LIMIT_MAX: Joi.number().default(100),
        RATE_LIMIT_WINDOW: Joi.number().default(60000),
        CORS_ORIGIN: Joi.string().default('http://localhost:3000,http://localhost:3001,http://localhost:4200'),
        LOG_LEVEL: Joi.string().valid('error', 'warn', 'info', 'debug', 'verbose').default('debug'),
        AWS_ACCESS_KEY_ID: Joi.string().allow(''),
        AWS_SECRET_ACCESS_KEY: Joi.string().allow(''),
        AWS_REGION: Joi.string().default('us-east-1'),
        AWS_S3_BUCKET: Joi.string().allow(''),
        SMTP_HOST: Joi.string().allow(''),
        SMTP_PORT: Joi.number().allow(''),
        SMTP_USER: Joi.string().allow(''),
        SMTP_PASS: Joi.string().allow(''),
        SENTRY_DSN: Joi.string().allow(''),
        ANALYTICS_API_KEY: Joi.string().allow(''),
        ENABLE_FILE_UPLOADS: Joi.boolean().default(true),
        ENABLE_VIDEO_CALLS: Joi.boolean().default(true),
        ENABLE_MODERATION: Joi.boolean().default(true),
        ENABLE_ANALYTICS: Joi.boolean().default(false),
        BCRYPT_ROUNDS: Joi.number().default(12),
        SESSION_SECRET: Joi.string().min(32).default('mindlyf-session-secret-change-in-production'),
        TURN_SERVER_URL: Joi.string().allow(''),
        TURN_SERVER_USERNAME: Joi.string().allow(''),
        TURN_SERVER_PASSWORD: Joi.string().allow(''),
        STUN_SERVER_URL: Joi.string().default('stun:stun.l.google.com:19302'),
    });
    const { error, value } = schema.validate(config, { allowUnknown: true });
    if (error) {
        throw new Error(`Config validation error: ${error.message}`);
    }
    return value;
};
exports.validate = validate;
//# sourceMappingURL=env.validator.js.map