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
	isPrivate: {
		type: Boolean,
		default: false,
	},
	channels: [String]
});

type Feed = mongoose.InferSchemaType<typeof feedSchema>

export default mongoose.model<Feed>('Feed', feedSchema);