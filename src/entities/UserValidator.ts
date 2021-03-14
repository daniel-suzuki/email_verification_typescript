import { uuid } from "uuidv4";
import { User } from "./User";

export class UserValidator{
    public key: string;
    public userId: string;

    constructor(user: User){
        this.key = uuid();
        this.userId = user.id;
    }
}