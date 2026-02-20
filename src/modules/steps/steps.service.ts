import { Inject, Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { StepsModel } from "./steps.model";
import { StepsAnalyticsModel } from "./steps.analytics";
import { StepsDto, StepsResponseDto } from "./steps.dto";
import { plainToInstance } from "class-transformer";
import { LoggerInstance } from "src/utils/log";

@Injectable()
export class StepService{
constructor(@Inject('LOGGER')private logger:typeof LoggerInstance, @InjectModel(StepsModel) private stepsModel: typeof StepsModel,
    @InjectModel(StepsAnalyticsModel) private stepsAnalyticsModel: typeof StepsModel){}

async createStepsWorkoutSession(stepsDto:StepsDto,user:string):Promise<StepsResponseDto>{
   try{
     const stepsRecord= await this.stepsModel.create({
         ...stepsDto,userId:user
      })
      if(!stepsRecord){
        throw new InternalServerErrorException('failed to create steprecord request')
      }
      return plainToInstance(StepsResponseDto,stepsRecord.get({plain:true}))
   }
    catch(err){
        this.logger.error(err)
        throw new InternalServerErrorException('failed to create request')
    }
    };

async stepsAnalytics(){
    try{
        
        }
    catch(err){

        }
    };
};