import { UserValidator } from "../../entities/UserValidator";
import { IUserValidatorsRepository } from "../IUserValidatorsRepository";

export class MongoUserValidatorsRepository implements IUserValidatorsRepository{
    private userValidators: UserValidator[] = []

    async findValidatorByValidationKey(key: string): Promise<UserValidator>{
        const validator = this.userValidators.find(userValidator => userValidator.key === key);
        return validator;
    }

    async save(userValidator: UserValidator): Promise<void>{
        this.userValidators.push(userValidator);
    }
}