// Configuration for the client, database (MongoDB), and Farcaster (Neynar) APIs

// Load in environment variables
import dotenv from 'dotenv';
dotenv.config();

// Host server url and api key
const API_URL: string = 'http://localhost:3000';
export const API_KEY: string | undefined = process.env.API_KEY;
// Configure host server api route paths
export const authApiUrl = `${API_URL}/api/auth`;
export const feedsApiUrl = `${API_URL}/api/feeds`;

// Mongo database url (includes login credentials)
export const MONGO_URI = process.env.MONGO_URI as string;

// Neynar api key
export const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY as string;