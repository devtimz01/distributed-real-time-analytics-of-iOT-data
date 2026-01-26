import { Injectable } from '@nestjs/common';
import { AuthModel } from './auth-model';
import { Auth, Authcreationbody, } from './auth-interface';
import * as argon2 from 'argon2'
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Injectable()
export class AuthServiceService {
 constructor(private authmodel:typeof AuthModel, private jwtService:JwtService, private configService:ConfigService){}

    async signup(signupDto:Auth):Promise<Auth>{
        const record= {
            where:{username:signupDto.username}
        }
        const findUser = await this.authmodel.findOne(record)
        if(findUser){
            throw new Error('user already exists')
        }
        const hashedPassword= await argon2.hash(signupDto.password)
        const newUser = await this.authmodel.create({hashedPassword,...signupDto})
        return newUser
    }
    async login(loginDto:Partial<Auth>){
        const validUser = await this.authmodel.findOne({where:{username:loginDto.username}})
        if(!validUser){
            throw new Error('user does not exists,signup!')
        }
        const isPasswordMatch = await argon2.verify(loginDto.username as string,validUser.password as string)
        if(!isPasswordMatch){throw new Error('wrong credentials')}
        const accessToken = await this.jwtService.signAsync({
            id: loginDto.id,
            username: loginDto.username
        })
        const refreshToken = await this.jwtService.signAsync({
            id: loginDto.id,
            username: loginDto.username
        },{secret: this.configService.get<string>('jwt_secret'),expiresIn: '7d'})
        return {accessToken,refreshToken}
    }
    
};
