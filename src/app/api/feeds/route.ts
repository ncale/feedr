import Feed from "@/models/feed";
import { NextRequest, NextResponse } from "next/server";

async function createNewFeed() {
	const feed = new Feed({
		feedName: 'test',
		authorFid: 999,
		isPrivate: false,
		channels: ['/baking', '/food', '/coffee', '/hotbeverages']
	})
	await feed.save();
};

export async function POST(req: NextRequest) {
	try {
		// Extract the JSON from the request
		const body = await req.json();
    const feedData = body.formData;
		// Pass the data to Mongo DB
    await Feed.create(feedData);
		// Return the response
    return NextResponse.json({ message: "Feed Created Successfully" }, { status: 201 });
	} catch (err) {
		console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
	}
};

async function getFeeds() {
	const fid = 123;
	const feed = await Feed.find({ authorFid: fid });
	return feed;
};

export async function GET(request: NextRequest) {
	try {
		const feeds = await getFeeds();
		return NextResponse.json({ message: "Feed Created Successfully" }, { status: 201 });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: "Error", err }, { status: 500 });
	}
};