import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service'; 
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './config/Db/init';
import { AuthModule } from './modules/user/auth.module';
import { GuardModule } from './common/guards/guards-module';
import { LogModule } from './utils/logs.module';

@Module({
  imports: [
     ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      cache: true
    }),DatabaseModule,AuthModule,GuardModule,LogModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
