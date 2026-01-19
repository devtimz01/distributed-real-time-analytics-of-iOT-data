import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Dialect } from 'sequelize';
@Module({
    imports:[
        SequelizeModule.forRootAsync({
            imports:[ConfigModule],
            useFactory: async(configService:ConfigService)=>({
                dialect: configService.get<string>('DB_DIALECT') as Dialect,
                host: configService.get<string>('DB_HOST'),
                port: configService.get<number>('DB_PORT'),
                username: configService.get<string>('DB_USERNAME'),
                database: configService.get<string>('DB_DATABASE'),
                password: configService.get<string>('DB_PASSWORD'),
                models:[],
                autoLoadModels:true,
                synchronize:true,
                pool:{
                    max: 20,
                    min:5,
                    acquire:90000,
                    idle:10000
                }
            }),
            inject:[ConfigService],
        })
    ]
})

export class DatabaseModule {}
//export class DatabaseModule {}

