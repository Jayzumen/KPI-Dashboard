export interface LoginData {
    status: string
    userInfo: {
        refreshToken: string
        token: string
        tokenExpirationInstant: string
    }
}

// export interface UserInfo {
//     refreshToken: string
//     token: string
//     tokenExpirationInstant: string
// }
