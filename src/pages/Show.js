import { Link, useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const post = useLoaderData();

  const div = {
    textAlign: "center",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{post.name}</h1>
      <h2>{post.category}</h2>
      <h2>{post.description}</h2>
      <div style={{ textAlign: "center" }}>
        <h2>Update</h2>
        <Form method="post" action={`/update/${post.id}`}>
          <input
            type="text"
            name="name"
            placeholder="name"
            defaultValue={post.name}
          />
          <select name="category" defaultValue={post.category}>
            <option value="Library">Library</option>
            <option value="Framework">Framework</option>
            <option value="Video">Video</option>
            <option value="Document">Document</option>
          </select>
          <input
            type="text"
            name="description"
            placeholder="description"
            defaultValue={post.description}
          />
          <button>Done</button>
        </Form>
        
        <Form method="post" action={`/delete/${post.id}`}>
          <button>Delete Entry</button>
        </Form>

      </div>
      <Link to="/">Back</Link>
    </div>
  );
}

export default Show;
