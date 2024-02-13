import mongoose from "mongoose";

export interface FeedInput {
	feedName: string
	feedDescription: string
	isPrivate: string
	channelIds: string[]
};

export interface FeedDocument extends FeedInput, mongoose.Document {
	authorFid: number
	isDefault: boolean
	channelUrls: string[]
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
	channelIds: [String],
	channelUrls: [String],
});

export default mongoose.model<FeedDocument>('Feed', feedSchema);