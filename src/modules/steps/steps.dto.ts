import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Expose } from "class-transformer";
import { Trim } from "src/common/decorators/trim.deccorator";

export class StepsDto{
    @IsString()
    @IsNotEmpty()
    @Trim()
    userId:string
    @IsInt()
    @IsNotEmpty()
    @Trim()
    steps:number
    @IsNumber()
    @IsNotEmpty()
    @Trim()
    pace:number
    @IsNumber()
    @IsNotEmpty()
    @Trim()
    kmCovered:number
    @IsNumber()
    @IsNotEmpty()
    @Trim()
    startTimestamp:number
    @IsNumber()
    @IsNotEmpty()
    @Trim()
    endTimestamp:number
}

export class StepsResponseDto{
    @Expose()
    id:string
    @Expose()
    userId:string
    @Expose()
    steps:number
    @Expose()
    pace:number
    @Expose()
    kmCovered:number
    @Expose()
    startTimestamp:number
    @Expose()
    endTimestamp:number
}

export class StepsAnalyticsResponseDto{
    @Expose()
    id:string
    @Expose()
    totalSteps:number
    @Expose()
    totalKmCovered:number
    @Expose()
    createdAt:Date
    @Expose()
    updatedAt:Date
}