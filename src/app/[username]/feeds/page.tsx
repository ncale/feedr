import PageHeader from "@/components/pages/PageHeader";
import FeedBlock from "@/components/feeds/FeedBlock";
import Link from "next/link";
import FeedList from "@/components/feeds/FeedList";

export default async function MyFeedsPage({ params }: {
  params: { username: string }
}) {
  
  return (
    <div className="flex flex-col">
      <PageHeader pageTitle="Feeds" isProfile={true} />
      <div>
        <FeedList />
        <div className="ml-4 mt-1 text-sm"><Link href='/~/create'>+ Create a new feed</Link></div>
      </div>
    </div>
  );
}
  