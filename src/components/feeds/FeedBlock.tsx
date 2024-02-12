'use client';

import { useProfile } from "@farcaster/auth-kit";
import Link from "next/link";

export default function FeedBlock(props: { name: string, desc: string, feedId: string }) {
	
	const {
		isAuthenticated,
		profile: { username, fid } 
	} = useProfile();
	
	return (
		<div className="flex justify-between rounded mb-2 p-2 border-2 border-black border-opacity-25">
			<div className="flex flex-col">
				<h2 className="text-md">{props.name}</h2>
				<p className="text-xs">{props.desc}</p>
			</div>
			<div className="flex">
				<div className="text-xs"><Link href={`/${username}/feeds/edit/${props.feedId}`}>Edit</Link></div>
				<div className="text-xs ml-1"><button>Delete</button></div>
			</div>
		</div>
	)
}