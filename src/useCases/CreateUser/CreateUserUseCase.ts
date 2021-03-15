import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { IMailProvider } from "../../providers/IMailProvider";
import { UserValidator } from "../../entities/UserValidator";
import { IUserValidatorsRepository } from "../../repositories/IUserValidatorsRepository";

export class CreateUserUseCase{
    constructor(
        private usersRepository: IUsersRepository,
        private userValidatorsRepository: IUserValidatorsRepository,
        private mailProvider: IMailProvider
    ){}

    async execute(data: ICreateUserRequestDTO){
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
        if(userAlreadyExists){
            throw new Error('Email already registered.');
        }
        const user = new User(data);
        const userValidator = new UserValidator(user);
        await this.usersRepository.save(user);
        await this.userValidatorsRepository.save(userValidator);

        this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email
            },
            from: {
                name: "Daniel Suzuki",
                email: "daniel.suzuki@gobrasa.org"
            },
            subject: "Verificação de Email",
            body: `<p>Codigo de Verificação: <a href="http://localhost:${process.env.PORT||5000}/${userValidator.key}">${userValidator.key}</a></p>`
        })
    }
}