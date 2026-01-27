import { Exclude, Transform, Type } from 'class-transformer'
import {IsLowercase, IsNotEmpty, IsString, MinLength,MaxLength,IsEmail,IsEnum,IsNumber,Min,Max, Matches} from 'class-validator'

export class SignupDto{
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(30)
  @Transform(({value})=>value.trim())
  username: string;
  
  @IsNotEmpty()
  @IsEmail()
  @Transform(({value})=>value.trim())
  email: string;
  
  @IsNotEmpty()
  @IsString()
  @Transform(({value})=>value.trim())
  @MinLength(8)
  @MaxLength(100)
  password: string;
  
  @IsNotEmpty()
  @IsEnum(['male', 'female'], { message: 'Gender must be either male or female' })
  gender: 'male' | 'female';
  
  @IsNotEmpty()
  @IsNumber()
  @Transform(({value})=>value.trim())
  @Type(()=>Number)
  @Min(13)
  @Max(120)
  age: number;
  
  @IsNotEmpty()
  @IsNumber()
  @Transform(({value})=>value.trim())
  @Type(()=>Number)
  @Min(30)
  @Max(300)
  weight: number; // in kg
  
  @IsNotEmpty()
  @IsNumber()
  @Transform(({value})=>value.trim())
  @Type(()=>Number)
  @Min(100)
  @Max(250)
  height_cm: number;
};


export class AuthResponseDto {
  id: string;
  username: string;
  email: string;
  isEmailVerified: boolean;
  gender: 'male' | 'female';
  age: number;
  weight: number;
  height_cm: number;
  createdAt: Date;
  updatedAt: Date;
  
  @Exclude()
  password: string;
  
};

