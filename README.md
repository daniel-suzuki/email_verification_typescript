# Email Verification System
An email verification system built in TypeScript with the application of SOLID architecture principles. The way the system works is described below:
1. A client sends a POST request to the API to create a user.
2. The API creates the user in MongoDB with the 'verified' property set to 'false', creates a unique validator with a validation link, and sends it to the users email.
3. The user clicks on the validation link and the API changes the 'verified' property to 'true', destroys the validator in the database, and sends an email confirming the validation.

# Technologies used:
- Node
- Express
- TypeScript
- Mailtrap
- MongoDB

# Sources:
This projects was based on other sources:
1. https://github.com/rmanguinho/clean-ts-api/tree/master/src/main
2. https://www.youtube.com/watch?v=7BNoxRntLYo&list=LL&index=1
3. https://www.youtube.com/watch?v=vAV4Vy4jfkc
4. https://stackoverflow.com/questions/39092822/how-to-confirm-email-address-using-express-node
