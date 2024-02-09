import mongoose from 'mongoose';
import { MONGO_URI } from './config'

export default function runMongo(mongoUri: string = MONGO_URI) {
    return mongoose.connect(mongoUri);
};