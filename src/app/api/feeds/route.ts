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
		// Extract the user's fid from the request
		const url = new URL(req.url);
		let feedId: string = '';
		let fid: string = '';
		if (url.searchParams.has("feed-id")) {feedId = url.searchParams.get("feed-id") || ''};
		if (url.searchParams.has("user-fid")) {fid = url.searchParams.get("user-fid") || ''};
		// Query Mongo DB
		await runMongo();
		const feeds = await Feed.find({ $or: [{authorFid: fid}, {_id: feedId}]});
		// Return the result
		return NextResponse.json({ feeds: feeds }, { status: 201 });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: "Error", err }, { status: 500 });
	}
};