import {Table,Model, Column, DataType} from 'sequelize-typescript'

@Table({
    tableName: 'BodyMetrics',
    timestamps:true
})
class FitnessTrackerModel extends Model{
     @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
     })
     declare id:string
     @Column({
        type:DataType.DECIMAL(3,2),
        allowNull: true
     })
     weight:number

     @Column({
        type:DataType.DECIMAL(3,2),
        allowNull: true})
     height: number

     @Column({
        type:DataType.DECIMAL(3,2),
        allowNull: true})
     bodyfat:number

      @Column({
        type:DataType.DECIMAL(3,2),
        allowNull: true})
        musclemass: number

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