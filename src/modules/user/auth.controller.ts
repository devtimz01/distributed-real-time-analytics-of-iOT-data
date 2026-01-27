import { Body, Controller, HttpCode, InternalServerErrorException, Param, Post, UseInterceptors } from '@nestjs/common';
import { AuthServiceService } from './auth-service';
import { Auth, type Authcreationbody } from './auth-interface';
import { AuthResponseDto, SignupDto } from './auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthServiceService){}

@Post('signup')
@UseInterceptors(AuthResponseDto)
@HttpCode(201)
    signupUser(@Body() dto:SignupDto){
        try{
            this.authService.signup(dto) 
        }
        catch(err){
            throw new InternalServerErrorException()
        }
    }
@Post('login')
@HttpCode(201)
    loginUser(){
        try{}
        catch(err){
            throw new InternalServerErrorException()
        }
    }
}
