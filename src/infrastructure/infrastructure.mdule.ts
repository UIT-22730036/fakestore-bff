import { Module } from '@nestjs/common';
import { GrpcModule } from './grpc/grpc.module';

@Module({
  imports: [GrpcModule],
  exports: [GrpcModule],
})
export class InfrastructureModule {}
