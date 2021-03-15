import { UserValidator } from "../../entities/UserValidator";
import { IUserValidatorsRepository } from "../IUserValidatorsRepository";
import { MongoHelper } from "./helpers/MongoHelper";

export class MongoUserValidatorsRepository implements IUserValidatorsRepository{
    async findValidatorByValidationKey(key: string): Promise<UserValidator>{
        const userValidatorCollection = MongoHelper.getCollection('validators');
        const result = await userValidatorCollection.findOne({ key: key });
        return result;
    }

    async save(userValidator: UserValidator): Promise<void>{
        const userValidatorCollection = MongoHelper.getCollection('validators');
        await userValidatorCollection.insertOne(userValidator);
    }

    async delete(userValidator: UserValidator): Promise<void> {
        const userValidatorCollection = MongoHelper.getCollection('validators');
        await userValidatorCollection.deleteOne({ key: userValidator.key });
    }
}