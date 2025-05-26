export declare class RegisterDto {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}
export declare class LoginDto {
    email: string;
    password: string;
}
export declare class RefreshTokenDto {
    refreshToken: string;
}
export declare class ForgotPasswordDto {
    email: string;
}
export declare class ResetPasswordDto {
    token: string;
    password: string;
    passwordConfirmation: string;
}
export declare class VerifyEmailDto {
    token: string;
}
export declare class ChangePasswordDto {
    currentPassword: string;
    newPassword: string;
    newPasswordConfirmation: string;
}
