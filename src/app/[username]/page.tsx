export default function ProfilePage({ params }: {
  params: { username: string }
}) {
  return (
    <main className="">
      <h1>{`${params.username}`}</h1>
    </main>
  );
}
  