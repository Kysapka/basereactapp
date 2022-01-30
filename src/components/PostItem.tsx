import React, { FC } from 'react';

import { postType } from 'components/types';
import { MyButton } from 'components/UI';

type PostItemPropsType = {
  remove: (post: postType) => void;
  post: {
    id: number;
    title: string;
    body: string;
  };
};

export const PostItem: FC<PostItemPropsType> = ({
  post,
  post: { title, body, id },
  remove,
}) => (
  <div className="post">
    <div className="post_content">
      <strong>
        {id}. {title}
      </strong>
      <div>{body}</div>
    </div>
    <div className="post_btn">
      <MyButton onClick={() => remove(post)}>Удалить</MyButton>
    </div>
  </div>
);
