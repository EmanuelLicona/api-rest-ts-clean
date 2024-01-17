import { Router } from 'express'
import { TypeOrmUserRepository } from '../repository/typeorm.user.repository'
import { UserUseCase } from '../../application/userUseCase'
import { UserController } from '../controller/user.controller'



const router = Router()

// ! Iniciar el repositorio de usuarios
const userRepository = new TypeOrmUserRepository()

// ! Iniciar el caso de uso
const userUseCase = new UserUseCase(userRepository)

// ! Iniciar el user controller
const userController = new UserController(userUseCase)

router.post('/user/register', userController.registerUser)
router.get('/user', userController.getUsers)
// router.post('/auth/login', loginCtrl)

export default router