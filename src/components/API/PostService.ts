import axios from 'axios';

export class PostService {
  static async getAll(): Promise<any> {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return response.data;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      return e;
    }
  }
}
