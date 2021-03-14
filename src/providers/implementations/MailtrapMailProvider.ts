import { IMailProvider } from "../IMailProvider";
import { IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";

export class MailtrapMailProvider implements IMailProvider{
    private transporter;
    constructor(){
        this.transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "f303c8ba325655",
                pass: "5c411c5a369114"
            }
        });
    }
    
    async sendMail(message: IMessage): Promise<void>{
        await this.transporter.sendMail({
            to:{
                name: message.to.name,
                address: message.to.email
            },
            from:{
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
    }
}