// import React from 'react';
// import PostForm from '../components/PostForm';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Container, Typography } from '@mui/material';

// const CreatePostPage = () => {
//   const navigate = useNavigate();

//   const handleCreatePost = (post) => {
//     axios.post('http://localhost:8000/posts', post)
//       .then(() => navigate('/'))
//       .catch((error) => console.error(error));
//   };

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Create New Post
//       </Typography>
//       <PostForm onSubmit={handleCreatePost} />
//     </Container>
//   );
// };

// export default CreatePostPage;
import React from 'react';
import PostForm from '../components/PostForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

const CreatePostPage = () => {
  const navigate = useNavigate();

  const handleCreatePost = (post) => {
    axios.post('http://localhost:8000/posts', post)
      .then(() => navigate('/'))
      .catch((error) => console.error(error));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Create New Post
      </Typography>
      <PostForm onSubmit={handleCreatePost} />
    </Container>
  );
};

export default CreatePostPage;
