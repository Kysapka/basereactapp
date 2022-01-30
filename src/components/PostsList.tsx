import React, { FC } from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { PostItem } from 'components/PostItem';
import { PostsListPropsType, ReturnComponentType } from 'components/types';

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
      <TransitionGroup>
        {posts.map(post => (
          <CSSTransition classNames="post" key={post.id} timeout={500}>
            <PostItem post={post} remove={remove} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
