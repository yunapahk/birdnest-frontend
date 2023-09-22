import React from 'react';
import { useNavigate } from 'react-router-dom';  // <-- Added
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Create() {
  const navigate = useNavigate();  // <-- Added

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    const newBirdnest = {
      name: formData.get("name"),
      category: formData.get("category"),
      description: formData.get("description"),
    };
  
    console.log("FormData: ", newBirdnest);
  
    try {
      const response = await fetch('https://birdnest-backend-bc7d.onrender.com/api/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBirdnest),
      });
  
      const responseData = await response.json();
      console.log("Server Response: ", responseData);
  
      if (response.ok) {
        console.log('New entry created.');
        navigate('/');
      } else {
        console.log('Failed to create new entry.');
      }
    } catch (error) {
      console.log('Failed to create new entry:', error);
    }
  };
  

  return (
    <div style={{ textAlign: 'center', marginBottom: '2em' }}>
      <h2>Create New</h2>
      <form onSubmit={handleSubmit}>
      <Stack spacing={2} direction="column" sx={{ width: '100%', maxWidth: 400, margin: 'auto' }}>
          <TextField name="name" label="Name" variant="outlined" fullWidth />
          <Autocomplete
            id="category-select"
            options={['Library', 'Framework', 'Video', 'Document']}
            renderInput={(params) => (
              <TextField {...params} label="Category" variant="outlined" fullWidth />
            )}
            name="category"
            fullWidth
          />
          <TextField
            name="description"
            label="Description"
            variant="outlined"
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary">
            Create New
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default Create;
