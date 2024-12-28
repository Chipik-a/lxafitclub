import dotenv from 'dotenv';
dotenv.config();


export const testUser = {
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
}