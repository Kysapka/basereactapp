import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
export const DEFAULT_LIMIT_POSTS = 10;
export const DEFAULT_START_PAGE = 1;

export class PostService {
  static async getAll(
    _limit = DEFAULT_LIMIT_POSTS,
    _page = DEFAULT_START_PAGE,
  ): Promise<AxiosResponse<any>> {
    return axios.get(BASE_URL, {
      params: {
        _limit,
        _page,
      },
    });
  }
}
