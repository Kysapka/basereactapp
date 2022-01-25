import { ReactElement } from 'react';

export type postType = {
  id: number;
  title: string;
  body: string;
};

export type filterType = {
  sort: string;
  query: string;
};

export type PostsListPropsType = {
  posts: postType[];
  title: string;
  remove: (post: postType) => void;
};

export type PostFilterPropsType = {
  filter: filterType;
  setFilter: (filter: filterType) => void;
};

export type ReturnComponentType = ReactElement | null;

export type SortType = 'title' | 'body';
