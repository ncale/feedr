import PageHeader from "@/components/pages/PageHeader";
import Feed from "@/components/feeds/Feed";
import { feedsApiUrl } from "@/utils/config";
import { FeedDocument } from "@/models/feed";

async function getFeedMetadata(feedId: string): Promise<{ feed: FeedDocument }> {
	const res = await fetch(`${feedsApiUrl}?feed-id=${feedId}`, { 
    method: 'GET', 
    headers: {"Content-Type": "application/json"}, 
    next: {revalidate: 15} 
	});
	return res.json();
}

export default async function FeedPage({ params }: { params: { feedId: string } }) {
	
	const { feed } = await getFeedMetadata(params.feedId);
	
	return (
		<div className="flex flex-col">
			<PageHeader pageTitle={feed.feedName} />
			<div>
				<Feed feed={feed} />
			</div>
		</div>
	)
}
  