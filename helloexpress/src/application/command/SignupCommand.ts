interface SignupRequestModel{
    username: string
    password: string
}

interface SignupResponseModel{
    userId: string
}

export class SignupCommand{

    constructor(
        private userRepository: UserRepository
        private hashProvider: HashProvider){
    }

    public async execute({username, password}: SignupRequestModel): Promise<SignupResponseModel>
        const existingUser = await this.userRepository.getByUsername(username)

        if (existingUser){
            throw new Error('Já existe um usuário com este username')
        }

        // Valid Password Policy (can be a Provider)
        // TODO

        const encriptedPassword = await this.hashProvider.hash(password)

        const userId = await this.userRepository.save({username, password: encriptedPassword})

        return {userId}
        
}