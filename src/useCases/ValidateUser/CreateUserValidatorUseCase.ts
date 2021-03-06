import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUserValidatorsRepository } from "../../repositories/IUserValidatorsRepository";
import { ICreateUserValidatorRequestDTO } from "../ValidateUser/CreateUserValidatorDTO";

export class CreateUserValidatorUseCase{
    constructor(
        private usersRepository: IUsersRepository,
        private userValidatorsRepository: IUserValidatorsRepository,
        private mailProvider: IMailProvider
    ){}

    async execute(data: ICreateUserValidatorRequestDTO){
        const validatorExists = await this.userValidatorsRepository.findValidatorByValidationKey(data.key);
        if(!validatorExists){
            throw new Error('Email not registered or another error might have occurred.');
        }
        const user = await this.usersRepository.findById(validatorExists.userId);
        if(!user){
            throw new Error('User not found based on validator id.');
        }
        await this.usersRepository.validate(user);
        await this.userValidatorsRepository.delete(validatorExists);

        this.mailProvider.sendMail({
            to: {
                name: user.name,
                email: user.email
            },
            from: {
                name: "Daniel Suzuki",
                email: "daniel.suzuki@gobrasa.org"
            },
            subject: "Email Verificado",
            body: `<p>Email Verificado</p>`
        })
    }
}