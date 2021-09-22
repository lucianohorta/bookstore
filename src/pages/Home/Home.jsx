import React, { useEffect, useState } from 'react';
import './Home.css';
import logo from './../../img/ioasys.png';
import bookstitle from './../../img/books.png';
import logoutimg from './../../img/logout.png';
import axios from 'axios';
//import { axiosRequests } from 'services/api';

function PagesHome(token) {

  const [posts, setPosts] = useState([]);

  function axiosRequests() {
    try {

      let webApiUrlPost = 'https://books.ioasys.com.br/api/v1/auth/sign-in';
      let webApiUrlGet = 'https://books.ioasys.com.br/api/v1/books?page=1&amount=25&category=biographies';
      let tokenStr = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDE3MTYzYWZhZjVkZTIyYjgwNGExNzMiLCJ2bGQiOjE2MzIyNjM4OTg1NzgsImlhdCI6MTYzMjI2NzQ5ODU3OH0.9m7RsKbnxfZvtIn64i9oYqZUMpXd04lc2krnyem5KR8';

      let resp = axios.post(webApiUrlPost,{
          email: "desafio@ioasys.com.br",
          password: "12341234"
      });

      axios.get(webApiUrlGet, {
          headers: {
            "Authorization" : `Bearer ${tokenStr}`,
          }
        })
        .then(
          respget => {
            setPosts(respget.data.data);
            console.log("Response do GET: ", respget.data);
            console.log("Response do GET: ", respget.data.data[0].title);
          }
        );

      console.log("Response do POST: ", resp);

      } catch(err) {
          console.error("ops! ocorreu um erro no post" + err);
      }
}

  useEffect(() => {
    axiosRequests();
  }, [])

  function removeToken() {
    localStorage.removeItem("token");
    window.location.reload();
  }

  

  return (
    <div className="pages-home">

      <div class="header">
        <div className="header__left"> 
          <img src={logo} className="logo" alt="logo"/>
          <img src={bookstitle} className="bookstitle" alt="bookstitle"/>
        </div>
        <div className="header__right">
          <div className="user__greeting">
            <span className="welcome">Bem vindo,</span> 
            <span>Guilherme</span>
          </div>
          <img src={logoutimg} className="logoutimg" alt="logout" onClick={removeToken} />
        </div>
      </div>

      <div className="content">
        <ul>
          {posts.map(post => (
            <li key={post.id} className="booklist"> 
              <div className="cardbook">
                <div className="cardbook__left">
                  <img src={`${post.imageUrl}`} className="bookcover" alt="book cover" />
                </div>
                <div className="cardbook__right">
                  <div className="title"> {post.title} </div>
                  <div className="authors"> {post.authors[0]}  </div>
                  <div className="pageCount"> {post.pageCount} páginas</div>
                  <div className="publisher"> Editora {post.publisher} </div>
                  <div className="published"> Publicado em {post.published} </div> 
                </div>
              </div>  
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
  
};


export default PagesHome;
