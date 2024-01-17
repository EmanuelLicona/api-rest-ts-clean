import { UserEntity } from './user.entity'

export class UserValue implements UserEntity {
  id: string
  name: string
  email: string
  
  constructor (
    name: string,
    email: string
  ) {
    // this.id = '' // TODO se debe crear un value object para el id
    this.name = name
    this.email = email
  }
}