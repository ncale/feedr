export default function FeedPage({ params }: {
	params: { feedName: string }
}) {
	return (
		<div className="flex flex-col">
			<div className="p-2 border-b-2 border-black border-opacity-50">
				<h1 className="text-lg font-bold">{params.feedName}</h1>
			</div>
			<div>
				
			</div>
		</div>
	);
}
  