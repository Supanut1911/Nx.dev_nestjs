import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './authCredentialDto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){}

    @Post('/signup')
    signup(
        @Body() authCredentialDto: AuthCredentialDto
    ) {
        return this.authService.signUp(authCredentialDto)
    }
}
