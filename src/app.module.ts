import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { HealthCheckModule } from './health-check/health-check.module';
import { RouterModule } from '@nestjs/core';

const modules = [UserModule, HealthCheckModule];

@Module({
  imports: [
    RouterModule.register([
      {
        path: 'v1',
        children: modules
      },
    ]),
    ...modules,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
