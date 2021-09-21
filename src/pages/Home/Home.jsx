import React from 'react';
// import axios from 'axios';
import './Home.css';

function PagesHome(token) {

  // const httpClient = axios.create({
  //   baseURL: "https://books.ioasys.com.br/api/v1/",
  //   // baseURL: process.env.APP_API_BASE_URL,
  // });

  // httpClient.interceptors.request.use(function (config) {
  //     const token = localStorage.getItem('token');
  //     config.headers.Authorization =  token ? `Bearer ${token}` : '';
  //     return config;
  // });

  // const [user, setUser] = useState();

  //   useEffect(() => {
  //     api
  //       .get("https://books.ioasys.com.br/api/v1/books?page=1&amount=25&category=biographies") 
  //       .then(
  //           // (response) => setUser(response.data))
  //           (response) => console.log(response.data))
  //       .catch((err) => {
  //         console.error("ops! ocorreu um erro" + err);
  //       });
  //   }, []);
    
  function removeToken() {
    localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <div className="pages-home">
      Livros aqui
      <br />
      <button type="button" onClick={removeToken}> Sair </button>
      
      {/* <p>Usuário: {user.login}</p>
      <p>Biografia: {user.bio}</p> */}
    </div>
  )
  
};


export default PagesHome;
