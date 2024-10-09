import axios from 'axios';
import { API_URL } from '../constants/config';
const apiClient = axios.create({
  baseURL: API_URL, // APIのベースURL
  //   timeout: 2000, // タイムアウトの設定
  headers: {
    'Content-Type': 'application/json',
    // 'X-Requested-With': 'XMLHttpRequest',
    // Authorization: 'Bearer token', // 必要に応じてトークンを設定
  },
  paramsSerializer: { indexes: null },
});

// apiClient.interceptors.request.use((config) => {
//   // リクエスト前に何か処理を行いたい場合（例：トークンの更新）
//   console.log(config);
//   return config;
// });
export default apiClient;
