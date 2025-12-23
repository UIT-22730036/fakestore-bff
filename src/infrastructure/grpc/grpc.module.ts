import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import * as dotenv from 'dotenv';
import { UserServiceAdapter } from './user/user-service.adapter';

dotenv.config();

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_SERVICE_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: process.env.USER_SERVICE_URL,
          package: ['ping_pong'],
          protoPath: ['src/ping-pong/ping-pong.proto'],
          loader: {
            includeDirs: [
              join(
                __dirname,
                '../../..',
                'node_modules/@dellta103/fakestore-protobuf',
              ),
            ],
          },
        },
      },
    ]),
  ],
  providers: [
    {
      provide: 'USER_SERVICE_ADAPTER',
      useClass: UserServiceAdapter,
    },
  ],
  exports: ['USER_SERVICE_ADAPTER'],
})
export class GrpcModule {}
