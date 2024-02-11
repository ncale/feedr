
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
      <div className="p-2 border-b-2 border-black border-opacity-50">
        <h1 className="text-lg font-bold">Feeds</h1>
      </div>
      <div>

      </div>
    </div>
  );
}
  