import React from 'react'
//import axios from 'axios';
//import { Link } from 'react-router-dom';

export const Posts = ({posts, loading}) => {
    if(loading){
        return <h3>Carregando...</h3>
    }

    // const fetchBookInfo = async () => {
    //     const response = await axios
    //         .get(`https://books.ioasys.com.br/api/v1/books/${bookId}`)
    //         .catch((err) => {
    //             console.log("Err ", err);
    //         })
    // }

    return (
        <ul>
            {posts.map(post => (
                // <Link to={`/books/${post.id}`}>
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
                // </Link>
            ))}
            
        </ul>
    )
}