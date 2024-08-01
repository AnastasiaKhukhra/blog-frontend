import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, CardActions, Typography, Button, CardMedia, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/posts')
      .then((response) => setPosts(response.data))
      .catch((error) => console.error(error));
  }, []);

  const defaultImageUrl = "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg";

  return (
    <Grid container spacing={4}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', borderRadius: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <CardMedia
              component="img"
              image={defaultImageUrl}
              alt="Post Image"
              sx={{ height: 200, borderTopLeftRadius: 8, borderTopRightRadius: 8 }} 
            />
            <CardContent sx={{ flexGrow: 1, padding: '16px' }}>
              <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#283593' }}>
                {post.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '16px' }}>
                By {post.author}
              </Typography>
              <Typography variant="body1" sx={{ color: '#616161' }}>
                {post.content.substring(0, 100)}...
              </Typography>
            </CardContent>
            <CardActions sx={{ padding: '16px', justifyContent: 'space-between' }}>
              <Button size="small" component={Link} to={`/posts/${post.id}`} sx={{ color: '#1e88e5' }}>
                Read more
              </Button>
              <Button size="small" component={Link} to={`/edit/${post.id}`} sx={{ color: '#1e88e5' }}>
                Edit
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PostList;
