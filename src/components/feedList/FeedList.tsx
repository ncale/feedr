import { FeedDocument } from "@/models/feed";
import FeedBlock from "./FeedBlock";

export default async function FeedList( props: { feeds: FeedDocument[] } ) {

  const feedListComponent = props.feeds.map((feed) => <FeedBlock name={feed.feedName} desc={feed.feedDescription} feedId={feed._id} />)

	return (
		<>
      {feedListComponent}
    </>
	)
}