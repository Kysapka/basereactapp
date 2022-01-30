import { useMemo } from 'react';

import { postType, SortType } from 'components/types';

export const useSortedPosts = (posts, sort): postType[] =>
  useMemo(() => {
    if (sort) {
      const sortMethod = sort as SortType;
      return [...posts].sort((a, b) => a[sortMethod].localeCompare(b[sortMethod]));
    }
    return posts;
  }, [sort, posts]);

export const usePosts = (posts, sort, query): postType[] => {
  const sortedPosts = useSortedPosts(posts, sort);
  return useMemo(
    () =>
      sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase())),
    [query, sortedPosts],
  );
};
