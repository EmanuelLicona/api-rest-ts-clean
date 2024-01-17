import { UserEntity } from '../../domain/user.entity';
import { UserRepository } from '../../domain/user.repository'
import { UserModel } from '../model/user.model'

export class TypeOrmUserRepository implements UserRepository {

  async findUsers(): Promise<UserEntity[]> {
    const users = await UserModel.find()
    return users
  }
  async findUserById(id: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  async registerUser(user: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  async updateUser(user: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  async deleteUser(id: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
    
}