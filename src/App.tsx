import React, { useEffect, useState } from 'react';

import 'components/styles/App.css';

import { PostFilter, PostForm, PostsList } from 'components';
import { PostService } from 'components/API/PostService';
import { postType, ReturnComponentType } from 'components/types';
import { Loader } from 'components/UI/Loader/Loader';
import { MyModal } from 'components/UI/modal/MyModal';
import Pagination from 'components/UI/pagination/Pagination';
import { useFetching } from 'hooks/useFetching';
import { usePagination } from 'hooks/usePagination';
import { usePosts } from 'hooks/usePosts';

export const App = (): ReturnComponentType => {
  const [posts, setPosts] = useState<postType[]>([]);

  const [filter, setFilter] = useState({ sort: '', query: '' });

  const [modal, setModal] = useState(false);

  const { pagesArray, page, limit, setTotalPages, setPage } = usePagination();

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (currentLimit: number, currentPage: number) => {
      const postsData = await PostService.getAll(currentLimit, currentPage);
      setPosts(postsData.data);
      setTotalPages(+postsData.headers['x-total-count']);
    },
  );

  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost: postType): void => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post: postType): void => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const changePage = (currentPage: number): void => {
    setPage(currentPage);
    fetchPosts(limit, currentPage);
  };

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  return (
    <div className="App">
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && (
        <h1
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            marginTop: '50px',
          }}
        >
          Произошла ошибка
          <div>{postError}</div>
        </h1>
      )}
      {isPostsLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <Loader />
        </div>
      ) : (
        <PostsList
          posts={sortedAndSearchedPost}
          remove={removePost}
          title="Посты про JS"
        />
      )}
      <Pagination pagesArray={pagesArray} page={page} changePage={changePage} />
    </div>
  );
};
