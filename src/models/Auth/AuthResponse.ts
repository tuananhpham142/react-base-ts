export interface LoginResponse {
    AccessToken: string;
    Expires: number;
    RefreshToken: string;
}
export interface RegisterResponse {
    AccessToken: string;
    Expires: number;
    RefreshToken: string;
}

export interface RegisterUnconfirmedInterface {
    username: string;
    confirmed: boolean;
}

export interface ForgotPasswordResponse {}

export interface ChangePasswordResponse {}

export interface ResetPasswordResponse { }

export interface SendOtpForgotPasswordResponse {}
