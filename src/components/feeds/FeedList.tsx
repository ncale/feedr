'use client';

import { feedsApiUrl } from "@/utils/config";
import FeedBlock from "./FeedBlock";
import { useProfile } from "@farcaster/auth-kit";
import type { Feed } from "@/models/feed";

async function getFeeds() {
  try {
    const res = await fetch(feedsApiUrl, {method: 'GET'});
    const feeds = res.json();
    return feeds;
  } catch (err) {
    console.error('Error fetching feeds:', err);
  };
};

export default async function FeedList() {

	const {
		isAuthenticated,
		profile: { username, fid }
	} = useProfile();

  /*
  const feeds = await getFeeds();

  const feedList = feeds!.map((feed: Feed) => {
    return <FeedBlock name={feed.feedName} desc="" />
  })
  */

	return (
		<>
      {/*feeds ? (
        {feedList}
      ) : (
        <FeedBlock name='Unfiltered' desc='A simple, unfiltered feed of Farcaster casts from accounts you follow' />
      )*/}
    </>
	)
}