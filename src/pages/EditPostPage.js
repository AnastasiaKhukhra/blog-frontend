// import React, { useEffect, useState } from 'react';
// import PostForm from '../components/PostForm';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Container, Typography } from '@mui/material';

// const EditPostPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:8000/posts/${id}`)
//       .then((response) => setPost(response.data))
//       .catch((error) => console.error(error));
//   }, [id]);

//   const handleEditPost = (updatedPost) => {
//     axios.put(`http://localhost:8000/posts/${id}`, updatedPost)
//       .then(() => navigate(`/posts/${id}`))
//       .catch((error) => console.error(error));
//   };

//   if (!post) return null;

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Edit Post
//       </Typography>
//       <PostForm post={post} onSubmit={handleEditPost} />
//     </Container>
//   );
// };

// export default EditPostPage;
import React, { useEffect, useState } from 'react';
import PostForm from '../components/PostForm';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

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
    <Container>
      <Typography variant="h4" gutterBottom>
        Edit Post
      </Typography>
      <PostForm post={post} onSubmit={handleEditPost} />
    </Container>
  );
};

export default EditPostPage;
