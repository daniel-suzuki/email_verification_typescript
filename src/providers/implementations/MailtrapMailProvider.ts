import { IMailProvider } from "../IMailProvider";
import { IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";

export class MailtrapMailProvider implements IMailProvider{
    private transporter;
    constructor(){
        this.transporter = nodemailer.createTransport({
            host: process.env.MAIL_PROVIDER_HOST,
            port: process.env.MAIL_PROVIDER_PORT,
            auth: {
                user: process.env.MAIL_PROVIDER_AUTH_USER,
                pass: process.env.MAIL_PROVIDER_AUTH_PASS
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