import React, { useEffect, useState } from 'react';

import 'components/styles/App.css';

import { PostFilter, PostForm, PostsList } from 'components';
import { PostService } from 'components/API/PostService';
import { postType, ReturnComponentType } from 'components/types';
import { MyButton } from 'components/UI';
import { MyModal } from 'components/UI/modal/MyModal';
import { usePosts } from 'hooks/usePosts';

export const App = (): ReturnComponentType => {
  const [posts, setPosts] = useState<postType[]>([]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [isPostsLoading, setIsPostLoading] = useState(false);

  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost: postType): void => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post: postType): void => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const fetchPosts = async (): Promise<any> => {
    setIsPostLoading(true);
    const postsData = await PostService.getAll();
    setPosts(postsData);
    setIsPostLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <MyButton onClick={fetchPosts}>Загрузить посты</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostsLoading ? (
        <h1>Идет загрузка...</h1>
      ) : (
        <PostsList
          posts={sortedAndSearchedPost}
          remove={removePost}
          title="Посты про JS"
        />
      )}
    </div>
  );
};
