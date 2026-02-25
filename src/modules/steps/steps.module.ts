import { Module } from "@nestjs/common";
import { StepsModel } from "./steps.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { LogModule } from "src/utils/logs.module";
import { JwtModule } from "@nestjs/jwt";
import { StepsAnalyticsModel } from "./steps.analytics";

@Module({
    imports:[SequelizeModule.forFeature([StepsModel,StepsAnalyticsModel]),LogModule,JwtModule],
    providers:[],
    exports:[SequelizeModule]
})
export class StepsModule{}