import { Request, Response } from 'express';
import { CreateUserValidatorUseCase } from './CreateUserValidatorUseCase';

export class CreateUserValidatorController{

    constructor(
        private createUserValidatorUseCase: CreateUserValidatorUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response>{
       const { key } = req.params;

       try{
           await this.createUserValidatorUseCase.execute({ key });
           return res.status(201).send();
       }catch(err){
           return res.status(400).json({
               message: err.message || "Unexpected error.",
           });
       };
    }
}
