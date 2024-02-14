'use client';

import Image from "next/image";
import { CastWithInteractions } from "@neynar/nodejs-sdk/build/neynar-api/v2";
import { IconContext } from "react-icons";
import { TbActivityHeartbeat } from "react-icons/tb";
import ChannelPill from "./ChannelPill";

export default function CastComponent({ cast }: { cast: CastWithInteractions }) {
	
	//const embeds = cast.embeds.map((embed) => <p>{embed}</p>)

	const pfpUrl = new URL(cast.author.pfp_url)
	const pfp = (pfpUrl.hostname==='i.imgur.com') ? (
		<Image 
			src={pfpUrl.href}
			width={200}
			height={200}
			alt={`${cast.author.username} profile picture`}
			className="rounded-full max-w-10 max-h-10 w-10 h-10"
		/>
	) : (<></>)

	const activeBadge = (cast.author.active_status==='active') && (
		<IconContext.Provider value={{color: "white", size: "0.8em"}}>
			<TbActivityHeartbeat className="inline ml-1 rounded-full bg-blue-600"/>
		</IconContext.Provider>
	)
	
	return (
		<div className="flex p-2 border-b-2 border-black border-opacity-50">
			{pfp}
			<div className="flex flex-col ml-2">
				<div className="items-center leading-tight">
					<span className="font-bold">{cast.author.display_name}</span>
					{activeBadge}
					<span className="ml-1 text-sm leading-tight">@{cast.author.username}</span>
				</div>
				<div>
					<span>{cast.text}</span>
					{/* embeds */}
				</div>
				<div>
					{/* channel pill */}
					{cast.parent_hash ?? (<ChannelPill channelUrl={cast.parent_hash || ''} />)}
				</div>
				<div>
					{/* reactions bar */}
				</div>
			</div>
		</div>
	)
}