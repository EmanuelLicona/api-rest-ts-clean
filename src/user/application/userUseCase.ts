import { UserEntity } from '../domain/user.entity';
import { UserRepository } from '../domain/user.repository';
import { UserValue } from '../domain/user.value';

export class UserUseCase {
  constructor(
    private readonly userRepository: UserRepository
  ) {}


  public registerUser = async (name: string, email: string): Promise<void> => {
    const userValue = new UserValue(name, email)
    const userCreated = await this.userRepository.registerUser(userValue)
  }

  public async getUsers(): Promise<UserEntity[]> {
    const users = await this.userRepository.findUsers()
    return users
  }
}