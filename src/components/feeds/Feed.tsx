import neynarClient from "@/utils/neynar";
import { CastWithInteractions, FeedResponse } from "@neynar/nodejs-sdk/build/neynar-api/v2";
import CastList from "./CastList";
import { FeedDocument } from "@/models/feed";

async function getFeedCasts(channels: string[]): Promise<{ casts: CastWithInteractions[] }> {
	const res: FeedResponse = await neynarClient.fetchFeedByChannelIds(channels, {withRecasts: true, withReplies: true, limit: 30})
	return res;
}

export default async function Feed( { feed }: { feed: FeedDocument } ) {
	
	const { casts } = await getFeedCasts(feed.channels);

	return (
		<div className="">
			<CastList casts={casts} />
		</div>
	)
}