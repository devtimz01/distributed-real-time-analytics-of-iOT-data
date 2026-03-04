import { Inject, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { StepsModel } from "./steps.model";
import { StepsAnalyticsModel } from "./steps.analytics";
import { StepsAnalyticsResponseDto, StepsDto, StepsResponseDto } from "./steps.dto";
import { plainToInstance } from "class-transformer";
import { LoggerInstance } from "src/utils/log";
import { Sequelize } from "sequelize-typescript";
import { WebsocketGateway } from "../Web-socket/web-socket";

@Injectable()
export class StepService{
constructor(@Inject('LOGGER')private logger:typeof LoggerInstance,private socketio: WebsocketGateway,  @InjectModel(StepsModel) private stepsModel: typeof StepsModel,
    @InjectModel(StepsAnalyticsModel) private stepsAnalyticsModel: typeof StepsModel, private sequelize: Sequelize){}

async createStepsWorkoutSession(stepsDto:StepsDto,user:string):Promise<StepsResponseDto>{
   try{
    return await this.sequelize.transaction(async(tx)=>{
      const stepsRecord = await this.stepsModel.create({
         ...stepsDto,userId:user
      },{transaction:tx})
      if(!stepsRecord){
        throw new InternalServerErrorException('failed to create steprecord request')
      }
      await this.stepsAnalytics(user,stepsDto)
      return plainToInstance(StepsResponseDto,stepsRecord.get({plain:true}))
    })
   }
    catch(err){
        this.logger.error(err)
        throw new InternalServerErrorException('failed to create request')
    }
    };

async stepsAnalytics(req:string,stepsDto:StepsDto):Promise<StepsAnalyticsResponseDto>{
   try{
      await this.sequelize.transaction(async(tx)=>{
        await this.stepsAnalyticsModel.increment({
        totalSteps: stepsDto.steps,
        totalKmCOvered: stepsDto.kmCovered
      },{where:{userId: req},transaction:tx
        })
      })
        const analytics= await this.stepsAnalyticsModel.findOne({
            where:{
                userId:req
            }
        })
        if(!analytics){
            throw new InternalServerErrorException('cannot get analytics record')
        }
      const socketId = this.socketio.getSocketId(req)
      if(!socketId){
        throw new NotFoundException('cannot get users socket.id')
      }
      this.socketio.server.to(socketId).emit('dashboard',{
        message:analytics,
        from: req
      })
     return plainToInstance(StepsAnalyticsResponseDto, analytics.get({plain:true}))
    }
   catch(err){
        this.logger.error(err)
        throw new InternalServerErrorException('failed to create request')
    }
  };
};