import dotenv from 'dotenv';
dotenv.config();

export const MONGO_URI = process.env.MONGO_URI as string;
export const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY as string;