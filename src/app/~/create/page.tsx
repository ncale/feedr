'use client';

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

  function handleClick() {
    console.log("hello");
  };

  return (
    <main className="">
      <h1>C R E A T E page</h1>
      <button onClick={handleClick}>click here to create a new feed</button>
    </main>
  );
}
