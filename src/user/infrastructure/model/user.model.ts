import { Entity, Column, PrimaryColumn } from "typeorm"
import { BaseModel } from '../../../common/infrastructure/model/base.model'
@Entity({ name: 'users' })
export class UserModel extends BaseModel {
  @PrimaryColumn()
  id: string

  @Column('varchar', { unique: true, nullable: false, length: 100 })
  email: string

  @Column('varchar', { nullable: true, length: 100 })
  name: string
}