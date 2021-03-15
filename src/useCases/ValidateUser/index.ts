import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { MongoUsersRepository } from "../../repositories/implementations/MongoUsersRepository";
import { MongoUserValidatorsRepository } from "../../repositories/implementations/MongoUserValidatorsRepository";
import { CreateUserValidatorController } from "./CreateUserValidatorController";
import { CreateUserValidatorUseCase } from "./CreateUserValidatorUseCase";


const mailtrapMailProvider = new MailtrapMailProvider()
const mongoUsersRepository = new MongoUsersRepository()
const mongoUserValidatorsRepository = new MongoUserValidatorsRepository()


const createUserValidatorUseCase = new CreateUserValidatorUseCase(
    mongoUsersRepository,
    mongoUserValidatorsRepository,
    mailtrapMailProvider
)

const createUserValidatorController = new CreateUserValidatorController(createUserValidatorUseCase)

export { createUserValidatorUseCase, createUserValidatorController }