import PageHeader from "@/components/pages/PageHeader";
import Feed from "@/components/feeds/Feed";

export default function FeedPage({ params }: {
	params: { feedId: string }
}) {
	return (

		<div className="flex flex-col">
			<PageHeader pageTitle={'feed name'} isProfile={true} />
			<div>
				<Feed feedId={params.feedId} />
			</div>
		</div>
	);
}
  