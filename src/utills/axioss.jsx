import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YThjY2YwNDc5ZjlkYmE5YTMyZDI0Nzg4MzM0YmJjNyIsIm5iZiI6MTczMTc4Njc4Ny45Mzg5NTMyLCJzdWIiOiI2NzM4YmRmNzU4NTlmOTgxZWVkZjg4YzYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.quoEra23qEFeUNLuU9DrGplMpJaNyxMUl8EW-VUzU7A'
    }
})

export default instance;