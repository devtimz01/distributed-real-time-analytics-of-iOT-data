import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModel } from './auth-model';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
   imports:[ConfigModule ,SequelizeModule.forFeature([AuthModel]),
   JwtModule.registerAsync({
      useFactory:async(configService:ConfigService)=>({
         secret: configService.get<string>('jwt_secret'),
         signOptions:{expiresIn:'1h'}
      }),
      inject:[ConfigService]
   })
],
   providers:[],
   exports:[SequelizeModule]
})

export class AuthModule{}