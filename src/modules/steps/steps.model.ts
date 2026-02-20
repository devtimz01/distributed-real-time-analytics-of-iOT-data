import {Table,Model, Column, DataType, BelongsTo, ForeignKey} from 'sequelize-typescript'
import { AuthModel } from '../user/auth-model'

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
     @BelongsTo(()=>AuthModel,{foreignKey:'userId'})
     userId: AuthModel

     @Column({
        type:DataType.INTEGER,
        defaultValue: 0,
        allowNull: false
     })
    count:number

     @Column({
        type:DataType.DECIMAL(5,2),
        allowNull: false})
     km_covered: number

     @Column({
        type:DataType.DATE,
        allowNull: true})
     start_timestamp:Date

      @Column({
        type:DataType.DECIMAL(5,2),
        allowNull: false})
     current_pace: number

      @Column({
        type:DataType.DATE,
        allowNull: true})
     end_timestamp:Date

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
}