import React from 'react';

import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';

export default () => {
  const posts = usePosts();
  return (
    <>
      <h1>My Blog</h1>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </>
  );
};
