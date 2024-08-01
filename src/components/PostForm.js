import React, { useState } from 'react';
import { TextField, Button, Box, Paper, Typography, Grid } from '@mui/material';

const PostForm = ({ post, onSubmit }) => {
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');
  const [author, setAuthor] = useState(post?.author || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, author });
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, margin: 'auto', maxWidth: 800 }}>
      <Typography variant="h6" gutterBottom>
        {post ? 'Edit Post' : 'Create New Post'}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              multiline
              rows={6}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'right' }}>
            <Button type="submit" color="primary" variant="contained" sx={{ mt: 2 }}>
              {post ? 'Update Post' : 'Create Post'}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default PostForm;
