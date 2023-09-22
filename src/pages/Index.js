import React from 'react';
import Post from '../components/Post';
import { useLoaderData, Form } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Index(props) {
  const birdnests = useLoaderData();

  return (
    <>
      <div style={{ textAlign: 'center', marginBottom: '2em' }}>
        <h2>Create New</h2>
        <Form method="post" action="/create">
          <Stack spacing={2} direction="column" sx={{ width: '100%', maxWidth: 400, margin: 'auto' }}>
            {/* Text input for name */}
            <TextField name="name" label="Name" variant="outlined" fullWidth />

            {/* Dropdown for category */}
            <Autocomplete
              id="category-select"
              options={['Library', 'Framework', 'Video', 'Document']}
              renderInput={(params) => (
                <TextField {...params} label="Category" variant="outlined" fullWidth />
              )}
              name="category"
              fullWidth
            />

            {/* Text input for description */}
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
        </Form>
      </div>

      <Grid container spacing={3}>
        {birdnests.map((birdnest) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={birdnest.id}>
            <Post post={birdnest} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Index;
