import PageHeader from "@/components/PageHeader";

export default function CastPage({ params }: {
  params: { username: string, castHash: string }
}) {
    return (
      <div className="">
        <PageHeader pageTitle="Thread" isProfile={true} />
        <p>{`${params.username} owns ${params.castHash} cast`}</p>
      </div>
    );
  }
  