import mongoose from "mongoose";
import { Channel } from "@neynar/nodejs-sdk/build/neynar-api/v2";

export interface FeedInput {
	feedName: string
	feedDescription: string
	isPrivate: boolean
	channels: Channel[]
};

export interface FeedDocument extends FeedInput, mongoose.Document {
	authorFid: number
	isDefault: boolean
}

const feedSchema = new mongoose.Schema({
	feedName: {
		type: String,
		required: true,
	},
	feedDescription: {
		type: String,
		required: false,
	},
	authorFid: {
		type: Number,
		required: true,
		min: 1,
	},
	isDefault: {
		type: Boolean,
		default: false,
	},
	isPrivate: {
		type: Boolean,
		default: false,
	},
	channels: [{
		id: String,
		url: String
	}],
});

export default mongoose.model<FeedDocument>('Feed', feedSchema);