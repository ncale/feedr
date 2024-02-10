
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
    <main className="">
      <h1>{`${params.username}'s Feeds`}</h1>

    </main>
  );
}
  