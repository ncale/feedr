import runMongo from "@/utils/mongo";
import Feed from "@/models/feed";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		// Extract JSON from the request
		const body = await req.json();
		// Pass the data to Mongo DB
		await runMongo();
    	await Feed.create(body);
		// Return the response
    	return NextResponse.json({ message: "Feed Created Successfully" }, { status: 201 });
	} catch (err) {
		console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
	}
};

export async function GET(req: NextRequest) {
	try {
		// Extract the user's fid or feed id from request
		const url = new URL(req.url);
		// Init vars
		let feedId = '';
		let mongoQuery: {authorFid: string};
		let feeds
		// Query Mongo DB
		if (url.searchParams.has("feed-id")) {
			feedId = url.searchParams.get("feed-id") || '';
			await runMongo();
			feeds = await Feed.findById(feedId);
		} else if (url.searchParams.has("user-fid")) {
			mongoQuery = {authorFid: url.searchParams.get("user-fid") || ''};
			await runMongo();
			feeds = await Feed.find(mongoQuery);
		};
		// Return the result
		return NextResponse.json({ feeds: feeds }, { status: 201 });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: "Error", err }, { status: 500 });
	}
};