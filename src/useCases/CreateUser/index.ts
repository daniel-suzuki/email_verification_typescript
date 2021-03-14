import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { MongoUsersRepository } from "../../repositories/implementations/MongoUsersRepository";
import { MongoUserValidatorsRepository } from "../../repositories/implementations/MongoUserValidatorsRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";


const mailtrapMailProvider = new MailtrapMailProvider()
const mongoUsersRepository = new MongoUsersRepository()
const mongoUserValidatorsRepository = new MongoUserValidatorsRepository()

const createUserUseCase = new CreateUserUseCase(
    mongoUsersRepository, 
    mongoUserValidatorsRepository, 
    mailtrapMailProvider
)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, mongoUsersRepository, mongoUserValidatorsRepository, createUserController }