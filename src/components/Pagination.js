/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import nextBtn from './../../src/img/nextbtn.png';
import prevBtn from './../../src/img/prevbtn.png';

const Pagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers =[]

    for(let i=1; i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i)
    }


    return (
        <nav className="paginationBar">
            <span>
                Página {currentPage} de {pageNumbers.length}
            </span>

            <a onClick={()=> paginate(currentPage-1)} href="#"className="prevBtn" >
                <img src={prevBtn} alt="previous page" />
            </a>

            <a onClick={()=> paginate(currentPage+1)} href="#" className="nextBtn" >
                <img src={nextBtn} alt="next page" />
            </a>

            {/* <ul className="pagination justify-content-center">
                {pageNumbers.map(number =>(
                    <li key={number} className="page-item">
                        <a onClick={()=> paginate(number)} href="#" className="page-link">
                            {number}
                        </a>

                        
                    </li>
                ))}
            </ul> */}

        </nav>
    )
}

export default Pagination