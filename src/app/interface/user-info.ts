export interface LoginData {
    status: string
    userInfo: UserInfo
}

export interface UserInfo {
    refreshToken: string
    token: string
    tokenExpirationInstant: string
}
