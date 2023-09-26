import React from 'react';
import Post from '../components/Post';
import { useAppContext } from '../AppContext.js';
import Grid from '@mui/material/Grid';

function Index() {
  const { filteredPosts } = useAppContext();

  return (
    <Grid container spacing={3}>
      {filteredPosts.map((birdnest) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={birdnest.id}>
          <Post post={birdnest} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Index;
