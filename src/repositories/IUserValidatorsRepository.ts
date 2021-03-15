import { UserValidator } from "../entities/UserValidator";

export interface IUserValidatorsRepository{
    findValidatorByValidationKey(key: string): Promise<UserValidator>;
    save(userValidator: UserValidator): Promise<void>;
    delete(userValidator: UserValidator): Promise<void>;
}