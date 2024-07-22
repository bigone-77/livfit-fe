import axios from 'axios';

export default axios.create({
  // 서버 baseUrl 설정
  baseURL: import.meta.env.VITE_SERVER_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
