import { IsString, MaxLength, MinLength } from "class-validator"

export class AuthCredentialDto {
    @IsString()
    @MinLength(4)
    @MaxLength(10)
    username: string

    @IsString()
    @MinLength(4)
    @MaxLength(10)
    password: string
}