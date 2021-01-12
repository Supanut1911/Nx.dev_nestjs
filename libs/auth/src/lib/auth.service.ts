import { Injectable } from "@nestjs/common";
import { AuthCredentialDto } from "./authCredentialDto";
import { UserRepository } from "./user.repository";
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {

    constructor(
        private userRepository: UserRepository
    ){}
    
    async signUp(
        authCredentialDto: AuthCredentialDto
    ) {
        let salt = await bcrypt.genSalt()
        let { username, password } =  authCredentialDto
        let user = this.userRepository.create()
        user.username = username,
        user.password = await this.hashpassword(password, salt)

        try {
            await user.save()
        } catch (error) {
            console.error(error)
        }
    }

    private async hashpassword(password: string, salt: string) {
        return bcrypt.hash(password, salt)
    }
}