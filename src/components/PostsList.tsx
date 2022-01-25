import React, { FC } from 'react';

import { PostItem } from 'components/PostItem';
import { PostsListPropsType, ReturnComponentType } from 'components/types';

const POST_INDEX = 1;

export const PostsList: FC<PostsListPropsType> = ({
  posts,
  title,
  remove,
}): ReturnComponentType => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem key={post.id} number={index + POST_INDEX} post={post} remove={remove} />
      ))}
    </div>
  );
};
