import PageHeader from "@/components/PageHeader";

export default function ProfilePage({ params }: {
  params: { username: string }
}) {
  return (
    <div className="flex flex-col">
      <PageHeader pageTitle={params.username} isProfile={true} />
      <div>

      </div>
    </div>
  );
}
  