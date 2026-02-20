import {Table,Model, Column, DataType} from 'sequelize-typescript'

@Table({
    tableName: 'goals',
    timestamps:true
})
export class GoalsModel extends Model{
     @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
     })
     declare id:string

     @Column({ type: DataType.UUID })
     declare userId: string;

    @Column({ type: DataType.ENUM('steps', 'pushups', 'sleep') })
      declare type: string;
    
    @Column({ type: DataType.INTEGER })
     declare target: number;  
    
    @Column({ type: DataType.INTEGER })
    durationDays: number;

    @Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW})
    declare createdAt: Date

    @Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW
      })
      declare updatedAt: Date
};
