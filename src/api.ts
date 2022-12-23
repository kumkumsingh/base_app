import axios from 'axios';

const api = axios.create({
  baseURL: `https://tree-nation.com/api`
})

export default api