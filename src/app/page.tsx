import PageHeader from "@/components/PageHeader";

export default function Home() {
  return (
    <div className="flex flex-col">
      <PageHeader pageTitle="Home" isProfile={true} />
    </div>
  );
}
