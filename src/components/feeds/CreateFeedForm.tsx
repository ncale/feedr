'use client';

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useProfile } from "@farcaster/auth-kit";
import { feedsApiUrl } from "@/utils/config";

export default function CreateFeedForm() {
	
	const router = useRouter();

	const {
		isAuthenticated,
		profile: { username, fid }
	} = useProfile();

	const [feedName, setFeedName] = useState('');
	const [isPrivate, setIsPrivate] = useState(false);
	const [channels, setChannels] = useState(''); // to change data type
	const [numConnections, setNumConnections] = useState(''); // to change data type
	const [isLoading, setIsLoading] = useState(false);

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()
		setIsLoading(true);
		const feed = {
			feedName: feedName, 
			authorFid: fid, 
			isDefault: false, 
			isPrivate: isPrivate, 
			channels: [channels], 
			numConnections: 1
		}
		const res = await fetch(feedsApiUrl, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(feed)
		})
		if (res.status === 201) {
			router.refresh();
			router.push(`/${username}/feeds`);
		} 
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				<span>Feed name:</span>
				<input
					className="ml-1"
					required
					type="text"
					onChange={event => setFeedName(event.target.value)}
					value={feedName} 
				/>
			</label>
			<br/>
			<label>
				<span>Set as a private channel?</span>
				<input
					className="ml-1"
					type="checkbox"
					checked={isPrivate}
					onChange={event => setIsPrivate(event.target.checked)}
				/>
			</label>
			<br/>
			<label>
				<span>What channels do you want to include?</span>
				<input
					className="ml-1"
					type="text"
					onChange={event => setChannels(event.target.value)}
					value={channels} />
			</label>
			<br/>
			<label>
				<span>Who do you want to see casts from?</span>
				<input
					className="ml-1"
					type="text"
					onChange={event => setNumConnections(event.target.value)}
					value={numConnections} />
			</label>
			<br/>
			<button type="submit" disabled={isLoading} className="font-bold">
				{isLoading ? (<span>Saving...</span>) : (<span>Save</span>)}
			</button>
		</form>
	);
};