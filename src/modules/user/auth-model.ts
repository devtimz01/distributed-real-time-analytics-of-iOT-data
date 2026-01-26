import { Model, Table,Column,DataType } from "sequelize-typescript";

@Table({
    tableName:'Auth',
    timestamps: true
})
export class AuthModel extends Model{
    @Column({
            primaryKey: true,
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4
         })
         declare id:string
    @Column({
          type: DataType.STRING,
          allowNull: false,
          unique: true
           })
        username: string
    @Column({
          type: DataType.STRING,
          allowNull: false,
          unique:false
           })
        password: string
    @Column({
          type: DataType.STRING,
          allowNull: true,
           })
        email: string
    @Column({
          type: DataType.BOOLEAN,
          defaultValue: false,
          allowNull: true
           })
        isEmailVerified: boolean
    @Column({
          type: DataType.ENUM('male','female'),
          allowNull: false,
           })
        gender: 'male'|'female'
    @Column({
          type: DataType.INTEGER,
          allowNull: false,
           })
        age: number
    @Column({
          type: DataType.DECIMAL(5,2),
          allowNull: true,
    })
    weight:number
    @Column({
          type: DataType.SMALLINT,
          allowNull: true,
    })
    height_cm:number
    @Column({
          type: DataType.DATE,
          defaultValue: DataType.NOW,
          allowNull: false,
           })
        declare createdAt: Date
    @Column({
          type: DataType.DATE,
          defaultValue: DataType.NOW,
          allowNull: false,
           })
        declare updatedAt: Date
};