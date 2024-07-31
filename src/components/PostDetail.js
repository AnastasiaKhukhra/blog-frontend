import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, Container, Paper, Box } from '@mui/material';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/posts/${id}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:8000/posts/${id}`)
      .then(() => navigate('/'))
      .catch((error) => console.error(error));
  };

  if (!post) return null;

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 3 }}>
        <Typography variant="h4" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {post.content}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          By {post.author}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
          <Button component={Link} to={`/edit/${id}`} variant="contained" color="primary">
            Edit
          </Button>
          <Button onClick={handleDelete} variant="contained" color="secondary">
            Delete
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default PostDetail;
