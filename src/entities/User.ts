import { uuid } from 'uuidv4';

export class User {
    public readonly id: string;
    public name: string;
    public email: string;
    public password: string;
    public verified: boolean;

    constructor(props: Omit<User,'id'|"verified">, id?: string, verified?: boolean){
        Object.assign(this, props);
        if(!id){
            this.id = uuid();
        }
        if(!verified){
            this.verified = false;
        }
    }
}