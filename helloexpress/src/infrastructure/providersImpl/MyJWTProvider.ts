import { JWTProvider, JWTProviderDTO, TokenPayLoad } from "../../application/providers/JWTProvider";

export class MyJWTProvider implements JWTProvider{
    sign(data: JWTProviderDTO): string {
        return data.payLoad
    }
    verify(token: string, secret: string): TokenPayLoad {
        return {sub: token, iat: 0, exp: 0}
    }
}