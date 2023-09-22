import React from 'react';
import Post from '../components/Post';
import { useLoaderData } from 'react-router-dom';  // Removed Form import
import Grid from '@mui/material/Grid';

function Index(props) {
  const birdnests = useLoaderData();

  return (
    <>
      {/* Removed the entire div containing the form */}
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
