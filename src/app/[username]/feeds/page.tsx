import Link from "next/link";
import PageHeader from "@/components/pages/PageHeader";
import FeedList from "@/components/feedList/FeedList";
import { feedsApiUrl } from "@/utils/config";
import { FeedDocument } from "@/models/feed";


async function getFeeds(): Promise<{ feeds: FeedDocument[] }> {
  const res = await fetch(feedsApiUrl, { 
    method: 'GET', 
    headers: {"Content-Type": "application/json"}, 
    next: {revalidate: 15} 
  });
  return res.json();
};

export default async function MyFeedsPage({ params }: { params: { username: string } }) {

  const { feeds } = await getFeeds();

  return (
    <div className="flex flex-col">
      <PageHeader pageTitle="Feeds" isProfile={true} />
      <div className="flex flex-col p-2">
        <div className="flex justify-between mb-2 text-white">
          <div className="">
            <button className="px-6 mr-1 rounded bg-purple-800 opacity-60 hover:opacity-100"><span className="text-sm font-bold">All</span></button>
            <button className="px-6 mr-1 rounded bg-purple-800 opacity-60 hover:opacity-100"><span className="text-sm font-bold">Favorite</span></button>
            <button className="px-6 mr-1 rounded bg-purple-800 opacity-60 hover:opacity-100"><span className="text-sm font-bold">Mine</span></button>
          </div>
          <Link className="px-6 bg-purple-800 rounded opacity-60 hover:opacity-100" href='/~/create'><span className="text-sm font-bold">+ Create</span></Link>
        </div>

        <FeedList feeds={feeds} />
      </div>
    </div>
  );
}
  