import React from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createAction } from '../actions'; // Import createAction

function Create() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
  
    try {
      // Call the createAction function from actions.js
      const redirectUrl = await createAction({ request: { formData } });
      
      if (redirectUrl) {
        navigate(redirectUrl);  // Make sure this line is actually called
      } else {
        console.log('Failed to create new entry.');
      }
    } catch (error) {
      console.log('Failed to create new entry:', error);
    }
  };
  

  return (
    <div style={{ textAlign: 'center', marginBottom: '2em', marginTop: '8rem' }}>
      <h2>Create New Entry</h2>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} direction="column" sx={{ width: '100%', maxWidth: 400, margin: 'auto' }}>
          <TextField name="name" label="Name" variant="outlined" fullWidth />
          <Autocomplete
            id="category-select"
            options={['Library', 'Framework', 'Video', 'Document']}
            renderInput={(params) => (
              <TextField {...params} label="Category" variant="outlined" fullWidth name="category" />
            )}
            fullWidth
          />
          <TextField name="description" label="Description" variant="outlined" fullWidth />
          <Button type="submit" variant="contained" color="primary">
            Done
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default Create;
