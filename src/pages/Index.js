import React, { useState } from 'react';
import Post from '../components/Post';
import { useAppContext } from '../AppContext.js';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';

function Index() {
  const postsPerPage = 12;
  const { filteredPosts } = useAppContext();
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(filteredPosts.length / postsPerPage);
  const postsToShow = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Grid container spacing={3}>
        {postsToShow.map((post) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
      <Box 
        display="flex" 
        justifyContent="center" 
        marginTop="20px" 
      >
        <Pagination 
          count={pageCount} 
          page={currentPage} 
          onChange={handlePageChange} 
          size="large" 
          sx={{ fontSize: '1.5rem' }} 
        />
      </Box>
    </>
  );
}

export default Index;