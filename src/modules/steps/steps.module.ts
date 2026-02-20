import { Module } from "@nestjs/common";
import { StepsModel } from "./steps.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { AuthModule } from "../user/auth.module";

@Module({
    imports:[SequelizeModule.forFeature([StepsModel]),AuthModule],
    providers:[],
    exports:[SequelizeModule]
})
export class StepsModule{}