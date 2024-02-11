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
      <div className="p-2 border-b-2 border-black border-opacity-50">
        <h1 className="text-lg font-bold">Create</h1>
      </div>
      <div>

      </div>
    </div>
  );
}
