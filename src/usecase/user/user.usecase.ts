import { Inject, Injectable } from '@nestjs/common';
import { UserServiceAdapter } from 'src/infrastructure/grpc/user/user-service.adapter';

@Injectable()
export class UserUseCase {
  constructor(
    @Inject('USER_SERVICE_ADAPTER')
    private readonly userServiceAdapter: UserServiceAdapter,
  ) {}

  pingPong(service: string) {
    return this.userServiceAdapter.pingPong(service);
  }
}
