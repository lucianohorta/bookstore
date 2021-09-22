import React, { useState, useEffect } from 'react';
import './Home.css';
import logo from './../../img/ioasys.png';
import bookstitle from './../../img/books.png';
import logoutimg from './../../img/logout.png';
import axios from 'axios';
//import { axiosRequests } from 'services/api';

import { Posts } from "./../../components/Posts";
import Pagination from './../../components/Pagination';

function PagesHome(token) {

  //pagination:
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);

  // const [post, setPost] = useState({});

  //API requests:
  function axiosRequests() {
    setLoading(true);

    try {
      let webApiUrlPost = 'https://books.ioasys.com.br/api/v1/auth/sign-in';
      let webApiUrlGet = 'https://books.ioasys.com.br/api/v1/books?page=1&amount=25&category=biographies';
      let tokenStr = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDE3MTYzYWZhZjVkZTIyYjgwNGExNzMiLCJ2bGQiOjE2MzIyOTQyODUyOTAsImlhdCI6MTYzMjI5Nzg4NTI5MH0.wrdC7v6DI8gEINJjPVYKgFy_jK5IuMBHaB0lsUW33tM';

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
            //console.log("Response do GET: ", respget.data.data[0].title);
          }
        );

      console.log("Response do POST: ", resp);

      setLoading(false);

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

  //get current post
  const indexOfLastPost = currentPage * postPerPage; 
  const indexOfFirstPost = indexOfLastPost - postPerPage; 
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  //paginate
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  //const currentPage = indexOfFirstPost;

  return (
    <div className="pages-home">

      <div className="header">
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
        <Posts posts={currentPosts} loading={loading} />
        <Pagination postsPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentPage} />
      </div>

    </div>
  );
  
};


export default PagesHome;
