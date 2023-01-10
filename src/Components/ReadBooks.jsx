import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const ReadBooks = () => {
    let [books,setBooks]=useState([])
    let params = useParams()

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`http://localhost:4001/books/${params.id}`)
            let data = await response.json()
            setBooks(data)
        }
        fetchData();
    },[])
    
    return (
        <div className="readBooks">
            <h1>Hello Dumby</h1>
            <h2>{books.title}</h2>
            <p>{books.longDescription}</p>
        </div>
    );
}
export default ReadBooks;