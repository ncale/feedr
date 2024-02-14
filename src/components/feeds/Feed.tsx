import neynarClient from "@/utils/neynar";
import { CastWithInteractions, FeedResponse } from "@neynar/nodejs-sdk/build/neynar-api/v2";
import CastList from "../casts/CastList";
import { FeedDocument } from "@/models/feed";
import { FeedContext } from "../../../services/feedContext";

async function getFeedCasts(channels: { id: string, url: string }[]): Promise<{ casts: CastWithInteractions[] }> {
	const channelIds = channels.map((channel) => {return channel.id});
	const res: FeedResponse = await neynarClient.fetchFeedByChannelIds(channelIds, {withRecasts: true, withReplies: true, limit: 30})
	return res;
}

export default async function Feed( { feed }: { feed: FeedDocument } ) {
	
	const { casts } = await getFeedCasts(feed.channels);

	return (
		<div className="">
			<FeedContext.Provider value={feed}>
				<CastList casts={casts} />
			</FeedContext.Provider>
		</div>
	)
}