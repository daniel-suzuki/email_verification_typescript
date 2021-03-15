import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import { MongoHelper } from "./helpers/MongoHelper";

export class MongoUsersRepository implements IUsersRepository{
    async findByEmail(email: string): Promise<User>{
        const userCollection = MongoHelper.getCollection('users');
        const result = await userCollection.findOne({ email: email});
        return result;
    }

    async findById(id: string): Promise<User>{
        const userCollection = MongoHelper.getCollection('users');
        const result = await userCollection.findOne({ id: id });
        return result;
    }

    async save(user: User): Promise<void>{
        const userCollection = MongoHelper.getCollection('users');
        await userCollection.insertOne(user);
    }

    async validate(user: User): Promise<void>{
        const userCollection = MongoHelper.getCollection('users');
        await userCollection.updateOne({ id: user.id }, { $set: { verified: true } });
    }
}