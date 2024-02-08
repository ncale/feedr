export default function FeedPage({ params }: {
    params: { feedId: string }
}) {
    return (
        <main className="">
            <h1>{`${params.feedId} feed`}</h1>
        </main>
    );
}
  