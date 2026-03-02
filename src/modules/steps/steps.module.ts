import { Module } from "@nestjs/common";
import { StepsModel } from "./steps.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { LogModule } from "src/utils/logs.module";
import { StepsAnalyticsModel } from "./steps.analytics";
import { StepsController } from "./steps.controller";
import { StepService } from "./steps.service";
import { GuardModule } from "src/common/guards/guards-module";
import { AuthModule } from "../user/auth.module";
import { WebsocketModule } from "../Web-socket/ws-module";

@Module({
    imports:[SequelizeModule.forFeature([StepsModel,StepsAnalyticsModel]),LogModule,GuardModule,AuthModule,WebsocketModule],
    providers:[StepService],
    controllers:[StepsController],
    exports:[SequelizeModule]
})
export class StepsModule{}