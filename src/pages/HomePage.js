import React from 'react';
import PostList from '../components/PostList';
import Layout from '../components/Layout';

const HomePage = () => {
  return (
    <Layout 
      title="Education Blog" 
      showCreateButton={true}
    >
      <PostList />
    </Layout>
  );
};

export default HomePage;
