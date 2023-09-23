import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { deleteAction } from '../actions';  
import '../TrashIcon.css'

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

  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px'
  };

  const updateButtonStyle = {
    backgroundColor: '#007BFF', 
    padding: '5px 20px 40px 20px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  };

  return (
    <div style={div}>
      <h1>{post.name}</h1>
      <h2>Category: {post.category}</h2>
      <h2>Description: {post.description}</h2>
      <div style={{ textAlign: "center" }}>
        <form method="post" action={`/update/${post.id}`} style={formContainerStyle}>
          <input
            style={{ width: '200px' }}
            type="text"
            name="name"
            placeholder="name"
            defaultValue={post.name}
          />
          <select 
            style={{ width: '200px' }}
            name="category" 
            defaultValue={post.category}
          >
            {/* ... options */}
          </select>
          <input
            style={{ width: '200px' }}
            type="text"
            name="description"
            placeholder="description"
            defaultValue={post.description}
          />
          <button style={updateButtonStyle}>Update</button>
        </form>
        
        <div onClick={handleDelete} className="trash-box">
          <div className="trash"></div>
          <div className="trash-top"></div>
          <div className="trash-btm">
            <div className="trash-lines">
              <div className="trash-line"></div>
              <div className="trash-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show;