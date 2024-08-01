import React from 'react';
import PostForm from '../components/PostForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import Layout from '../components/Layout';

const CreatePostPage = () => {
  const navigate = useNavigate();

  const handleCreatePost = (post) => {
    axios.post('http://localhost:8000/posts', post)
      .then(() => navigate('/'))
      .catch((error) => console.error(error));
  };

  return (
    <Layout 
      title="Education Blog" 
      showCreateButton={false}
    >
      <Box sx={{ textAlign: 'center', mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Create New Post
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Share your thoughts and insights by creating a new post.
        </Typography>
      </Box>
      <PostForm onSubmit={handleCreatePost} />
    </Layout>
  );
};

export default CreatePostPage;
