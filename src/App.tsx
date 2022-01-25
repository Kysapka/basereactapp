import React, { useMemo, useState } from 'react';

import 'components/styles/App.css';

import { PostFilter, PostForm, PostsList } from 'components';
import { postType, ReturnComponentType, SortType } from 'components/types';

export const App = (): ReturnComponentType => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'ааа', body: 'яяя' },
    { id: 2, title: 'ббб', body: 'ччч' },
    { id: 3, title: 'ввв', body: 'ккк' },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      const sortMethod = filter.sort as SortType;
      return [...posts].sort((a, b) => a[sortMethod].localeCompare(b[sortMethod]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPost = useMemo(
    () =>
      sortedPosts.filter(post =>
        post.title.toLowerCase().includes(filter.query.toLowerCase()),
      ),
    [filter.query, sortedPosts],
  );

  const createPost = (newPost: postType): void => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post: postType): void => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchedPost.length ? (
        <PostsList
          posts={sortedAndSearchedPost}
          remove={removePost}
          title="Посты про JS"
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
      )}
    </div>
  );
};
