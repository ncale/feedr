import PageHeader from "@/components/PageHeader";
import FeedBlock from "@/components/FeedBlock";
import Link from "next/link";

async function getFeeds() {
  try {
    const apiPath = '/api/feeds'
    const feeds = await fetch(apiPath, {
      method: 'GET',
      headers: {"Content-type": "application/json"},
    });
    return feeds;
  } catch (err) {
    console.error('Error fetching feeds:', err);
  };
};

export default async function MyFeedsPage({ params }: {
  params: { username: string }
}) {
const feeds = await getFeeds();
  
  return (
    <div className="flex flex-col">
      <PageHeader pageTitle="Feeds" isProfile={true} />
      <div>
        <FeedBlock name='Unfiltered' desc='A simple, unfiltered feed of Farcaster casts from accounts you follow' />
        <div className="ml-4 mt-1 text-sm"><Link href='/~/create'>+ Create a new feed</Link></div>
      </div>
    </div>
  );
}
  