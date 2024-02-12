import mongoose from "mongoose";

const feedSchema = new mongoose.Schema({
	feedName: {
		type: String,
		required: true,
	},
	authorFid: {
		type: Number,
		required: true,
		min: 1,
	},
	isDefault: {
		type: Boolean,
		default: false,
		// only one default per FID
	},
	isPrivate: {
		type: Boolean,
		default: false,
	},
	channels: [String],
	numConnections: {
		type: Number,
		min: 1,
	}
});

export type Feed = mongoose.InferSchemaType<typeof feedSchema>

export default mongoose.model<Feed>('Feed', feedSchema);