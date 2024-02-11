export default function ProfilePage({ params }: {
  params: { username: string }
}) {
  return (
    <div className="flex flex-col">
      <div className="p-2 border-b-2 border-black border-opacity-50">
        <h1 className="text-lg font-bold">{params.username}</h1>
      </div>
      <div>

      </div>
    </div>
  );
}
  