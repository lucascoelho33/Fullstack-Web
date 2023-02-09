import { refreshToken } from "firebase-admin/app"
import { JWTProvider } from "../providers/JWTProvider"

export class RefreshTokenCommand{

    constructor(
        private userTokenRepository: UserTokenRepository,
        private jwtProvider: JWTProvider
    ){}

    public async execute({refreshToken}: RefreshTokenRequestModel): Promise<RefreshTokenResponseModel>

        // Try valid token
        let userId: string
        try {
            const payload = this.jwtProvider.verify(refreshToken, 'my-fake-secret')
            userId = payload.sub
        } catch (error) {
            throw new Error("Não foi possível renovar sua sessão. Faça login novamente!")
        }

        const userToken = await this.userTokenRepository.getByUserId(userId)
        
        if (!userToken){
            throw new Error("Não foi possível renovar sua sessão. Faça login novamente!")
        }

        if (userToken.token != refreshToken){
            throw new Error("Não foi possível renovar sua sessão. Faa login novamente!")
        }

        // Tudo ok

        // Generate Tokens
        const accessToken = this.jwtProvider.sign({expiresIn: '1h', secret: 'my-fake-secret', subject: user.id!})
        const newRefreshToken = this.jwtProvider.sign({expiresIn: '1d', secret: 'my-fake-secret', subject: this.user.id!})

        // Update refresh Token into DB
        await this.userTokenRepository.save({token: refreshToken, user: userToken.user})

        return {accessToken, refreshToken: newRefreshToken}
        
}