import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/posts')
      .then((response) => setPosts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Grid container spacing={3}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                By {post.author}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 2 }}>
                {post.content.substring(0, 100)}...
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} to={`/posts/${post.id}`} color="primary">
                View
              </Button>
              <Button size="small" component={Link} to={`/edit/${post.id}`} color="primary">
                Edit
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Button component={Link} to="/create" variant="contained" color="primary">
          Create New Post
        </Button>
      </Grid>
    </Grid>
  );
};

export default PostList;
