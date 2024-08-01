import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Typography, Box, CardMedia, Divider } from '@mui/material';
import ConfirmDialog from '../components/ConfirmDialog';
import Layout from '../components/Layout';

const PostDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:8000/posts/${id}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:8000/posts/${id}`)
      .then(() => {
        setOpen(false);
        navigate('/');
      })
      .catch((error) => console.error(error));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!post) return null;

  const paragraphs = post.content.split('\n');

  return (
    <Layout 
      title="Education Blog" 
      showEditButton={true} 
      showDeleteButton={true} 
      onEdit={() => navigate(`/edit/${id}`)} 
      onDelete={handleClickOpen}
    >
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 4 }}>
        {post.title}
      </Typography>

      <CardMedia
        component="img"
        height="400"
        image="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Post Image"
        sx={{ borderRadius: 2, marginBottom: 4 }}
      />

      <Typography variant="subtitle1" color="textSecondary" gutterBottom sx={{ textAlign: 'center', marginBottom: 4 }}>
        By {post.author} | {new Date(post.createdAt).toLocaleDateString()}
      </Typography>

      <Divider sx={{ marginBottom: 4 }} />

      <Box sx={{ padding: 3 }}>
        {paragraphs.map((paragraph, index) => (
          <Typography key={index} variant="body1" paragraph>
            {paragraph}
          </Typography>
        ))}

        <Divider sx={{ marginTop: 4, marginBottom: 4 }} />
      </Box>

      <ConfirmDialog
        open={open}
        onClose={handleClose}
        onConfirm={handleDelete}
        title="Confirm Deletion"
        content="Are you sure you want to delete this post? This action cannot be undone."
      />
    </Layout>
  );
};

export default PostDetailPage;
