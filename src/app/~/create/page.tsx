import CreateFeedForm from "@/components/feedList/CreateFeedForm";
import PageHeader from "@/components/pages/PageHeader";

export default function CreatePage() {
  return (
    <div className="flex flex-col">
      <PageHeader pageTitle="Create" isProfile={true} />
      <div className="m-2">
        <CreateFeedForm />
      </div>
    </div>
  );
}
