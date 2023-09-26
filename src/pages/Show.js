import * as React from 'react';
import { useLoaderData, useNavigate } from "react-router-dom";
import { deleteAction, updateAction } from '../actions';
import '../TrashIcon.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useAppContext } from '../AppContext'; 

function Show(props) {
  const post = useLoaderData();
  const navigate = useNavigate();

  const { fetchPosts } = useAppContext();

  const handleDelete = async () => {
    const success = await deleteAction({ params: { id: post.id } });
    if (success) {
      await fetchPosts();
      navigate('/');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const category = event.target.elements.category.value;
    const description = event.target.elements.description.value;
    const updatedBirdnest = { name, category, description };
    const success = await updateAction({ params: { id: post.id, updatedBirdnest } });
    if (success) {
      await fetchPosts();
      navigate('/');
    }
  };


  return (
    <div style={{ textAlign: 'center', marginBottom: '2em', marginTop: '2em' }}>
      <h1>{post.name}</h1>
      <h2>Category: {post.category}</h2>
      <h2>Description: {post.description}</h2>

      <form method="post" onSubmit={handleSubmit}>
        <Stack spacing={2} direction="column" sx={{ width: '100%', maxWidth: 400, margin: 'auto' }}>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            defaultValue={post.name}
          />
          <Autocomplete
            id="category-select"
            options={['Library', 'Framework', 'Video', 'Documentation']}
            defaultValue={post.category}
            renderInput={(params) => (
              <TextField {...params} label="Category" variant="outlined" fullWidth name="category" />
            )}
            sx={{
              '& .MuiAutocomplete-option': {
                fontSize: '1.5rem',
              }
            }}
          />
          <TextField
            name="description"
            label="Description"
            variant="outlined"
            fullWidth
            defaultValue={post.description}
          />
          <Button type="submit" variant="contained" color="primary" style={{ padding: '5px 20px' }}>
            Update
          </Button>
        </Stack>
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
  );
}

export default Show;
