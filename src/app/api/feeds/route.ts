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
		// Query Mongo DB
		if (url.searchParams.has("feed-id")) {
			// If url has feed id search param, return that feed
			const feedId = url.searchParams.get("feed-id") || '';
			await runMongo();
			const feed = await Feed.findById(feedId);
			// Return the result
			return NextResponse.json({ feed: feed }, { status: 201 });
		} else if (url.searchParams.has("user-fid")) {
			// If url doesn't have feed id search param, but does have a user fid, return feeds related to that user
			const mongoQuery = { authorFid: url.searchParams.get("user-fid") || '' };
			await runMongo();
			const feeds = await Feed.find(mongoQuery);
			// Return the result
			return NextResponse.json({ feeds: feeds }, { status: 201 });
		} else {
			// If no search params passed, return all feeds
			await runMongo();
			const feeds = await Feed.find();
			// Return the result
			return NextResponse.json({ feeds: feeds }, { status: 201 });
		};
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: "Error", err }, { status: 500 });
	}
};