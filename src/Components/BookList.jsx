import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Styles/BookList.css";
const BookList = () => {
    let [books, setBooks] = useState([]);

    let location = useLocation()


    let navigate = useNavigate();


    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch("http://localhost:4001/books");
            let data = await response.json();
            setBooks(data);
        };
        fetchData();
    }, [books]);


    let handleClick = async (id, title) => {
        fetch(`http://localhost:4001/books/${id}`, {
            method: "DELETE",
        });
        alert(`${title} has been deleted`);
    };

    let check = (id) => {
        if (location.pathname === '/admin/bookList') {
            navigate(`/admin/bookList/${id}`);
        }
        else {
            navigate(`/user/bookList/${id}`);
        }
    };
    return (
        <div className="bookContainer">
            <div className="bookContainer_head">
                <h1 className="bookContainer_h1">Welcome To Booklist</h1>
            </div>
            <h2>BookList: {books.length}</h2>
            <div className="booksSection">
                {books.map((data) => (
                    <div className="bookList">
                        <div className="bookImg">
                            <img src={data.thumbnailUrl} alt="" />
                        </div>
                        <div className="book_contents">
                            <h2>{data.title}</h2>
                            {/* <div className="authors">
                                <p>{data.authors.map(x => (
                                    <Panther>{ x}</Panther>
                                ))}</p>
                            </div> */}
                            <h4>Authors: {data.authors.toString()}</h4>
                            <h4>Categories: {data.categories.toString()}</h4>
                            <h5>PageCount: {data.pageCount}</h5>
                        </div>
                        <div className="but">
                            {location.pathname ==='/admin/bookList' && <button onClick={() => {handleClick(data.id, data.title)}}>Remove</button>}
                            <button onClick={() => check(data.id)}>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookList;
