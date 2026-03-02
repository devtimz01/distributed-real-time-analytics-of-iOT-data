import { Model } from "sequelize";
import { Column, Table } from "sequelize-typescript";

@Table({
    tableName:'dashboard',
    timestamps:true
})

export class DashboardModel extends Model{
    //@Column({})
}

