import { UserEntity } from './user.entity';

export interface UserRepository {
  findUsers(): Promise<UserEntity[]>
  findUserById(userId: string): Promise<UserEntity>
  registerUser(user: UserEntity): Promise<void>
  updateUser(user: UserEntity): Promise<void>
  deleteUser(userId: string): Promise<void>
}