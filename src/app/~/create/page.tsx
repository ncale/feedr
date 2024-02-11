import CreateFeedForm from "@/components/CreateFeedForm";
import PageHeader from "@/components/PageHeader";

export default function CreatePage() {

  // Function to submit a new feed
  async function postFeed() {
    try {
      const apiPath = `/api`;
      const res = fetch(apiPath, {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({  })
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Function to edit an existing feed... WIP
  async function putFeed() {
    try {
      const apiPath = `/api`;
      const res = fetch(apiPath, {
        method: "PUT",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({  })
      });  
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col">
      <PageHeader pageTitle="Create" isProfile={true} />
      <div className="m-2">
        <CreateFeedForm />
      </div>
    </div>
  );
}
