import { HttpException, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport'
import { InjectRepository } from "@nestjs/typeorm";
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UserRepository } from "./user.repository";
import { JwtPayload } from './jwt-payload.interface';
import { User } from "./user.entity";
import { RpcException } from "@nestjs/microservices";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secret',
        })
    }

    async validate(payload: JwtPayload, ) {
        const { username } = payload
        const user = await this.userRepository.findOne({ username })

        if(!user) {
            // throw new UnauthorizedException();
            // return null
            // throw new RpcException('unauthorize')
            return {
                message: 'unauthorize'
            }
        }

        return user
    }

}