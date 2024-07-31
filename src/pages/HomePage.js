import React from 'react';
import PostList from '../components/PostList';
import { Container, Typography, Box } from '@mui/material';

const HomePage = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" gutterBottom>
          Blog Application
        </Typography>
        <PostList />
      </Box>
    </Container>
  );
};

export default HomePage;
