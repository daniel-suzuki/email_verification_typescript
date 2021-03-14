import { Router } from 'express';
import { createUserController } from './useCases/CreateUser';
import { createUserValidatorController } from './useCases/ValidateUser';

const router = Router();

router.post('/users', (req, res) => {
    return createUserController.handle(req, res);
});

router.get('/:key', (req, res) => {
    return createUserValidatorController.handle(req, res);
});

export { router }