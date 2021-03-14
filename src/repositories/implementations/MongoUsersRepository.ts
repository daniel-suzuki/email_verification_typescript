import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class MongoUsersRepository implements IUsersRepository{
    private users: User[] = []

    async findByEmail(email: string): Promise<User>{
        const user = this.users.find(user => user.email === email);
        return user;
    }

    async findById(id: string): Promise<User>{
        const user = this.users.find(user => user.id === id);
        return user;
    }

    async save(user: User): Promise<void>{
        this.users.push(user);
    }

    async validate(user: User): Promise<void>{
        this.users.map(obj => {
            if(user.id === obj.id){
                user.verified = true;
                console.log(user);
            }
        });
    }
}