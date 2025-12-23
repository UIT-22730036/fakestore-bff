import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import {
  PingPongServiceClient,
  PING_PONG_SERVICE_NAME,
} from '@dellta103/fakestore-protobuf/ping-pong';
import { type ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class UserServiceAdapter implements OnModuleInit {
  private userServiceClient: PingPongServiceClient;
  constructor(
    @Inject('USER_SERVICE_PACKAGE')
    private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.userServiceClient = this.client.getService<PingPongServiceClient>(
      PING_PONG_SERVICE_NAME,
    );
  }

  pingPong(service: string) {
    return this.userServiceClient.pingPong({ service });
  }
}
