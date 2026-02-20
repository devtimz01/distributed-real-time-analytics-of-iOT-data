import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModel } from './auth-model';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { AuthService } from './auth-service';
import { StepsModel } from '../steps/steps.model';
import { StepsModule } from '../steps/steps.module';

@Module({
   imports:[SequelizeModule.forFeature([AuthModel]),
   JwtModule.registerAsync({
      useFactory:async(configService:ConfigService)=>({
         secret: configService.get<string>('jwt_secret'),
         signOptions:{expiresIn:'1h'}
      }),
      inject:[ConfigService]
   }),StepsModule
],
  controllers:[AuthController],
   providers:[AuthService],
   exports:[SequelizeModule]
})

export class AuthModule{}