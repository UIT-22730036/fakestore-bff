import { Args, ArgsType, Field, Query, Resolver } from '@nestjs/graphql';

@ArgsType()
class HealthCheckArgs {
  @Field(() => String)
  name: string;
}

@Resolver()
export class HealthCheckResolver {
  @Query(() => String)
  healthCheck(@Args() args: HealthCheckArgs): string {
    return `hello ${args.name}`;
  }
}
