export interface JWTProviderDTO {
    payLoad: any
    secret: string
    subject: string
    expiresIn: string
}

export interface TokenPayLoad {
    iat: number
    exp: number
    sub: string
}

export interface JWTProvider {
    sign(data: JWTProviderDTO): string
    verify(token: string, secret: string): TokenPayLoad
}