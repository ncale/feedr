import PageHeader from "@/components/pages/PageHeader";

export default function Home() {
  return (
    <div className="flex flex-col">
      <PageHeader pageTitle="Home" isProfile={true} />
    </div>
  );
}
