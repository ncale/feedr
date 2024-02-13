import neynarClient from "@/utils/neynar";
import { FeedType, FilterType } from "@neynar/nodejs-sdk";
import CastComponent from "./CastComponent";
import { FeedDocument } from "@/models/feed";
import { feedsApiUrl } from "@/utils/config";
import { Cast } from "@neynar/nodejs-sdk/build/neynar-api/v2";

async function getFeedMetadata(feedId: string): Promise<FeedDocument> {
	const res = await fetch(`${feedsApiUrl}?feed-id=${feedId}`, { 
    method: 'GET', 
    headers: {"Content-Type": "application/json"}, 
    next: {revalidate: 15} 
  });
	return res.json();
}

async function getFeedCasts(parentUrl: string): Promise<{ casts: Cast[] }> {
	const res = await neynarClient.fetchFeed(FeedType.Filter, {
		filterType: FilterType.ParentUrl,
		parentUrl: parentUrl
	})
	return res;
}

export default async function Feed( props: { feedId: FeedDocument['_id'] } ) {
	
	const feedData = await getFeedMetadata(props.feedId);
	
	let castList: Cast[] = []

	switch (feedData.channelIds.length) {
		case 0:
			break
		case 1:
			const { casts } = await getFeedCasts(feedData.channelIds[0])
			castList.concat(casts);
	}

	//castList = await getFeedCasts();

	return (
		<div>
			<CastComponent />
		</div>
	)
}