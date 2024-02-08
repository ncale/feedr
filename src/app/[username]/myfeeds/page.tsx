export default function MyFeedsPage({ params }: {
    params: { username: string }
}) {
    return (
      <main className="">
        <h1>{`${params.username}'s Feeds`}</h1>
      </main>
    );
}
  