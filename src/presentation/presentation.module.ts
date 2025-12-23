import { Module } from '@nestjs/common';
import { GraphModule } from './graphql/graph.module';

@Module({
  imports: [GraphModule],
})
export class PresentationModule {}
