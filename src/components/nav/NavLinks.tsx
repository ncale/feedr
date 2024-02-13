'use client';

import Link from 'next/link';
import { useProfile } from '@farcaster/auth-kit';

export default function NavLinks() {
	const {
    isAuthenticated,
    profile: { username, fid },
  } = useProfile();

	return isAuthenticated ? (
		<ul>
			<li><Link href={`/${username}`}>profile</Link></li>
			<li><Link href={`/${username}/feeds`}>my feeds</Link></li>
			<li><Link href='/~/explore'>explore</Link></li>
		</ul>
	) : (
		<ul>
			<li><Link href='/~/explore'>explore</Link></li>
		</ul>
	)
}