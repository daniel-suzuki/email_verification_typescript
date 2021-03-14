import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { mongoUserValidatorsRepository, mongoUsersRepository } from "../CreateUser";
import { CreateUserValidatorController } from "./CreateUserValidatorController";
import { CreateUserValidatorUseCase } from "./CreateUserValidatorUseCase";


const mailtrapMailProvider = new MailtrapMailProvider()

const createUserValidatorUseCase = new CreateUserValidatorUseCase(
    mongoUsersRepository,
    mongoUserValidatorsRepository,
    mailtrapMailProvider
)

const createUserValidatorController = new CreateUserValidatorController(createUserValidatorUseCase)

export { createUserValidatorUseCase, createUserValidatorController }