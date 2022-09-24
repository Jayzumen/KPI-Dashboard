export interface Root {
    status: string
    userInfo: UserInfo
}

export interface UserInfo {
    actions: any
    changePasswordId: any
    changePasswordReason: any
    emailVerificationId: any
    methods: any
    pendingIdPLinkId: any
    refreshToken: string
    registrationVerificationId: any
    state: any
    threatsDetected: any
    token: string
    tokenExpirationInstant: string
    trustToken: any
    twoFactorId: any
    twoFactorTrustId: any
    user: any
}