import React, { useState } from 'react';

import 'components/styles/App.css';

import { PostFilter, PostForm, PostsList } from 'components';
import { postType, ReturnComponentType } from 'components/types';
import { MyButton } from 'components/UI';
import { MyModal } from 'components/UI/modal/MyModal';
import { useSortedAndSearchedPost } from 'hooks/usePosts';

export const App = (): ReturnComponentType => {
  const [posts, setPosts] = useState<postType[]>([]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);

  const sortedAndSearchedPost = useSortedAndSearchedPost(
    posts,
    filter.sort,
    filter.query,
  );

  const createPost = (newPost: postType): void => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post: postType): void => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostsList posts={sortedAndSearchedPost} remove={removePost} title="Посты про JS" />
    </div>
  );
};
