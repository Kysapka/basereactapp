import React, { FC } from 'react';

import { PostsListPropsType } from 'components/types';

import { PostItem } from './PostItem';

const POST_INDEX = 1;

export const PostsList: FC<PostsListPropsType> = ({ posts, title, remove }) => (
  <div>
    <h1 style={{ textAlign: 'center' }}>{title}</h1>
    {posts.map((post, index) => (
      <PostItem key={post.id} number={index + POST_INDEX} post={post} remove={remove} />
    ))}
  </div>
);
