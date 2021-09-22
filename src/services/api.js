import axios from "axios";

const api = axios.create({
  baseURL: "https://books.ioasys.com.br/api/v1/",
});


export function axiosRequests(response) {
    const instance = axios.create({
        baseURL: 'https://books.ioasys.com.br/api/v1/',
        timeout: 1000,
        headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDE3MTYzYWZhZjVkZTIyYjgwNGExNzMiLCJ2bGQiOjE2MzIyNTE1NjI0NDMsImlhdCI6MTYzMjI1NTE2MjQ0M30.Nkoy897nazD6mJUbSPNg5XVHKYafRIzsDVeiaT2BfmY'}
    });
    
    instance.get('https://books.ioasys.com.br/api/v1/books?page=1&amount=25&category=biographies')
    .then(response => {
        let books = response.data;
        console.log(response.data);
        console.log(response.data.data[0].id);
        return books;
    });
}



export default api;
