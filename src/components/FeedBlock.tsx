type FeedBlock = {
	name: string
	desc: string
}

export default function FeedBlock(props: FeedBlock) {

	return (
		<div className="flex justify-between rounded mx-2 mt-2 p-3 pt-2 border-2 border-black border-opacity-25">
			<div className="flex flex-col">
				<h2 className="text-md">{props.name}</h2>
				<p className="text-xs">{props.desc}</p>
			</div>
			<div className="flex">
				<div className="text-xs">Edit</div>
				<div className="text-xs ml-1">Delete</div>
			</div>
		</div>
	)
}