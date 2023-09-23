import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { deleteAction } from '../actions';  
function Show(props) {
  const post = useLoaderData();
  const navigate = useNavigate();  

  const handleDelete = async () => {
    const success = await deleteAction({ params: { id: post.id } });
    if (success) {
      navigate('/');
    }
  };

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
        <form method="post" action={`/update/${post.id}`}>
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
        </form>

        <button onClick={handleDelete}>Delete Entry</button>

      </div>
      <Link to="/">Back</Link>
    </div>
  );
}

export default Show;
