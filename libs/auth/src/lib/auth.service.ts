import { Injectable } from "@nestjs/common";
import { AuthCredentialDto } from "./authCredentialDto";
import { UserRepository } from "./user.repository";
import * as bcrypt from 'bcryptjs'
import { JwtPayload } from "./jwt-payload.interface";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private userRepository: UserRepository,
        private jwtService: JwtService
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

    async signIn(
        authCredentialDto: AuthCredentialDto
    ) {
      const username = await this.validateUserPassword(authCredentialDto)

      if(!username) {
        return {
            message: 'Invalid Credential'
        }
      }

      const payload: JwtPayload = { username }
      const accessToken = await this.jwtService.sign(payload)
      return { accessToken }
    }

    private async hashpassword(password: string, salt: string) {
        return bcrypt.hash(password, salt)
    }

    private async validateUserPassword(authCredentialDto: AuthCredentialDto) {
        const { username, password } = authCredentialDto
        const user = await this.userRepository.findOne({ username })

        if(user && await this.validatePassword(password, user.password)) {
            return user.username
        } else {
            return null
        }
    }

    private async validatePassword(
        password: string, 
        userPassword: string
    ): Promise<Boolean> {
        let hash = await bcrypt.compare(password, userPassword)
        return hash 
    }
}