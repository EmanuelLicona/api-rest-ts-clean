import { Request, Response } from 'express'
import { UserUseCase } from '../../application/userUseCase'

export class UserController {

  constructor(
    private readonly userUseCase: UserUseCase
  ) {
    this.getUsers = this.getUsers.bind(this) // ! Usar arrow function en vez de bind, se cambia el this al usar funciones normales
  }

  public registerUser = async ({ body: { name, email } }: Request, res: Response): Promise<void> => {
    const user = await this.userUseCase.registerUser(name, email)
    res.status(201).json(user)
  }

  public async getUsers(req: Request, res: Response): Promise<void> {
    const users = await this.userUseCase.getUsers()
    res.status(200).json(users)
  }
}