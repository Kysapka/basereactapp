import React, { FC, SyntheticEvent, useState } from 'react';

import { postType } from 'components/types';
import { MyButton, MyInput } from 'components/UI';

type PostFormPropsType = {
  create: (newPost: postType) => void;
};

export const PostForm: FC<PostFormPropsType> = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e: SyntheticEvent): void => {
    e.preventDefault();
    const newPost = { ...post, id: +new Date() };
    create(newPost);
    setPost({ title: '', body: '' });
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e: SyntheticEvent<HTMLInputElement>) =>
          setPost({ ...post, title: e.currentTarget.value })
        }
        type="text"
        placeholder="Название поста"
      />
      <MyInput
        value={post.body}
        onChange={(e: SyntheticEvent<HTMLInputElement>) =>
          setPost({ ...post, body: e.currentTarget.value })
        }
        type="text"
        placeholder="Описание поста"
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};
