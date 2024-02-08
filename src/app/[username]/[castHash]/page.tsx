export default function CastPage({ params }: {
  params: { username: string, castHash: string }
}) {
    return (
      <main className="">
        <h1>Cast page</h1>
        <p>{`${params.username} owns ${params.castHash} cast`}</p>
      </main>
    );
  }
  