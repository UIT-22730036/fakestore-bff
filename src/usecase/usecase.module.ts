import { Module } from '@nestjs/common';
import { UserUseCase } from './user/user.usecase';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.mdule';

@Module({
  imports: [InfrastructureModule],
  providers: [
    {
      provide: 'USER_USE_CASE',
      useClass: UserUseCase,
    },
  ],
  exports: ['USER_USE_CASE'],
})
export class UseCaseModule {}
