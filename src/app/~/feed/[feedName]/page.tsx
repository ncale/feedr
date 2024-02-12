import PageHeader from "@/components/pages/PageHeader";

export default function FeedPage({ params }: {
	params: { feedName: string }
}) {
	return (
		<div className="flex flex-col">
			<PageHeader pageTitle={params.feedName} isProfile={true} />
			<div>
				
			</div>
		</div>
	);
}
  