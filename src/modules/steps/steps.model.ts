import {Table,Model, Column, DataType} from 'sequelize-typescript'

@Table({
    tableName: 'steps',
    timestamps:true
})
export class StepsModel extends Model{
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
    declare steps:number

     @Column({
        type:DataType.DECIMAL(5,2),
        allowNull: false})
    declare kmCovered: number

     @Column({
        type:DataType.DATE,
        allowNull: true})
     declare startTimestamp:Date

      @Column({
        type:DataType.DECIMAL(5,2),
        allowNull: false})
      declare pace: number

      @Column({
        type:DataType.DATE,
        allowNull: true})
     declare endTimestamp:Date

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
