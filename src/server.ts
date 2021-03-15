import { MongoHelper } from './repositories/implementations/helpers/MongoHelper';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path:__dirname+'/./../.env'});

MongoHelper.connect(process.env.MONGO_URL)
  .then(async () => {
    const app = (await import('./app')).default
    app.listen(process.env.PORT || 5000, () => { console.log(`Server running at http://localhost:${process.env.PORT}`) })
  })
  .catch(console.error)