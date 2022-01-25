import React, { FC } from 'react';

import { postType } from './types';
import { MyButton } from './UI/button/MyButton';

type PostItemPropsType = {
  number: number;
  remove: (post: postType) => void;
  post: {
    id: number;
    title: string;
    body: string;
  };
};

export const PostItem: FC<PostItemPropsType> = ({
  post,
  post: { title, body },
  number,
  remove,
}) => (
  <div className="post">
    <div className="post_content">
      <strong>
        {number}. {title}
      </strong>
      <div>{body}</div>
    </div>
    <div className="post_btn">
      <MyButton onClick={() => remove(post)}>Удалить</MyButton>
    </div>
  </div>
);
