import PageHeader from "@/components/pages/PageHeader";

export default function FeedPage({ params }: {
	params: { feedId: string }
}) {
	return (

		<div className="flex flex-col">
			<PageHeader pageTitle={'feed name'} isProfile={true} />
			<div>
				
			</div>
		</div>
	);
}
  