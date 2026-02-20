import {Table,Model, Column, DataType} from 'sequelize-typescript'

@Table({
    tableName: 'steps-analytics',
    timestamps:true
})
export class StepsAnalyticsModel extends Model{
     @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
     })
     declare id:string

     @Column({ type: DataType.UUID })
     declare userId: string;

     @Column({
        type:DataType.INTEGER,
        defaultValue: 0,
        allowNull: false
     })
    totalSteps:number

    @Column({
        type:DataType.DECIMAL(5,2),
        allowNull: false})
    totalKmCovered: number

    @Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW
      })
      declare createdAt: Date

    @Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW
      })
      declare updatedAt: Date
};
