'use client';

import { useProfile } from "@farcaster/auth-kit";
import Link from "next/link";

export default function FeedBlock(props: { name: string, desc: string, feedId: string }) {
	
	const {
		isAuthenticated,
		profile: { username, fid } 
	} = useProfile();
	
	return (
		<div className="flex justify-between rounded-xl mb-2 p-4 border-2 border-gray-400 hover:bg-white transition ease-out duration-200">
			<div className="flex flex-col">
				<h2 className="text-md font-bold leading-none"><Link href={`/~/feed/${props.feedId}`}>{props.name}</Link></h2>
				<p className="text-xs leading-none mt-1"><Link href={`/~/feed/${props.feedId}`}>{props.desc} Any description provided?</Link></p>
			</div>
			<div className="flex">
				<div className="text-xs leading-none hover:underline"><Link href={`/${username}/feeds/edit/${props.feedId}`}>Edit</Link></div>
				<div className="text-xs ml-1 leading-none hover:underline"><button>Delete</button></div>
			</div>
		</div>
	)
}