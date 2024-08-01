import React, { useEffect, useState } from 'react';
import PostForm from '../components/PostForm';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import Layout from '../components/Layout';

const EditPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/posts/${id}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleEditPost = (updatedPost) => {
    axios.put(`http://localhost:8000/posts/${id}`, updatedPost)
      .then(() => navigate(`/posts/${id}`))
      .catch((error) => console.error(error));
  };

  if (!post) return null;

  return (
    <Layout 
      title="Education Blog" 
      showCreateButton={false}
    >
      <Box sx={{ textAlign: 'center', mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Edit Post
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Update your post and save the changes.
        </Typography>
      </Box>
      <PostForm post={post} onSubmit={handleEditPost} />
    </Layout>
  );
};

export default EditPostPage;
