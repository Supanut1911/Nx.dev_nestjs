import { ExecutionContext, Injectable } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";
import { AuthGuard } from "@nestjs/passport";


@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext) {
        return super.canActivate(context)
    }

    handleRequest(err, user, info) {
        if(err || !user) {
            throw err || new RpcException('unauthorized')
        }
        return user
    }
}