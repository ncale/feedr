'use client';

import { useFeedContext } from "../../../services/feedContext";

export default function ChannelPill({ channelUrl }: { channelUrl: string }) {
  
	const feed = useFeedContext();
	const channel = feed.channels.find((channel) => channel.url === channelUrl) ?? { id: '' }

	return (
		<>
			{channel ?? (
				<div className="flex items-center rounded-sm bg-blue-400">
					<span>{channel['id']}</span>
				</div>
			)}
		</>
	)
}