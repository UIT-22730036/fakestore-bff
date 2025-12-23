import { Inject } from '@nestjs/common';
import {
  Args,
  ArgsType,
  Field,
  ObjectType,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { firstValueFrom } from 'rxjs';
import { UserUseCase } from 'src/usecase/user/user.usecase';

@ArgsType()
class HealthCheckArgs {
  @Field(() => String)
  name: string;
}

@ObjectType()
class HealthCheck {
  @Field(() => String)
  message: string;
}

@Resolver()
export class HealthCheckResolver {
  constructor(
    @Inject('USER_USE_CASE')
    private readonly userUseCase: UserUseCase,
  ) {}

  @Query(() => HealthCheck)
  async healthCheck(@Args() args: HealthCheckArgs): Promise<HealthCheck> {
    const res = await firstValueFrom(
      this.userUseCase.pingPong(args.name).pipe(),
    );
    return res;
  }
}
