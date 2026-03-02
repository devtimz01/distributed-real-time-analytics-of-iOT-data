import { ClassSerializerInterceptor, Controller, HttpCode, UseGuards,Req,UseInterceptors, Patch } from "@nestjs/common";
import { Post } from "@nestjs/common";
import { JwtGuard } from "src/common/guards/jwt-auth";
import { StepService } from "./steps.service";
import { StepsDto } from "./steps.dto";
import type { AuthenticatedRequest } from "../user/auth-interface";

@Controller('/workout')
export class StepsController{
    constructor(private stepservice:StepService){}
@Post('/steps')
@HttpCode(201) 
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtGuard)
postStepworkout(dto:StepsDto,@Req() req:AuthenticatedRequest){
    return this.stepservice.createStepsWorkoutSession(dto, req.user.id)
}

@Patch('/stepsAnalytics')
@HttpCode(201) 
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtGuard)
stepsWorkoutAnalytics(@Req() req:AuthenticatedRequest, dto:StepsDto){
     return this.stepservice.stepsAnalytics(req.user.id,dto)
}

}