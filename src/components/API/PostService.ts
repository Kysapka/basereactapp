import axios from 'axios';

import { postType } from 'components/types';

export class PostService {
  static async getAll(): Promise<postType[]> {
    const response = await axios.get('https://jsonplaceholder.typicode.com/pos12ts');
    return response.data;
  }
}
