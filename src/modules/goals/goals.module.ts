import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { GoalsModel } from "./goals";


@Module({
    imports:[SequelizeModule.forFeature([GoalsModel])],
    providers:[],
    exports:[SequelizeModule]
})
export class GoalsModule{}