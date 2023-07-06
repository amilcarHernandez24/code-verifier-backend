import  express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';

// cnfiguration the .env file
dotenv.config();

// Create Express App
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// Define the first Route of the app
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to my API Restful: Express + TS + Nodemon + Jest + Swagger + Mongoose')
});

// Define the first Route of the app
app.get('/hello', (req: Request, res: Response) => {
    // Send Hello World
    res.send('Welcome to GET Route: Hello!')
});

// Execute APP and Listen Request to PORT
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
})