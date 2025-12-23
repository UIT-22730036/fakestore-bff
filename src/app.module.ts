import { Module } from '@nestjs/common';
import { PresentationModule } from './presentation/presentation.module';
import { InfrastructureModule } from './infrastructure/infrastructure.mdule';
import { UseCaseModule } from './usecase/usecase.module';

@Module({
  imports: [PresentationModule, UseCaseModule, InfrastructureModule],
})
export class AppModule {}
