// title, pagecount,categories,longDescription,authors,shortDescription,thumbnailUrl

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBooks = () => {
    let [title,setTitle] = useState("")
    let [authors,setAuthors] = useState("")
    let [categories,setCategories] = useState("")
    let [pagecount,setPagecount] = useState("")
    let [shortDescription,setShortDescription] = useState("")
    let [longDescription,setLongDescription] = useState("")
    let [thumbnailUrl,setThumbnailUrl] = useState("")

    let navigate = useNavigate()
    let handleSubmit = (e) => {
        e.preventDefault();
        // The data to be posted to the server
        let bookData = { title, pagecount, thumbnailUrl, shortDescription, longDescription, authors, categories }

        //Posting the data to the server
        fetch("http://localhost:4001/books", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(bookData)
        })
        
        alert(`Book Added Successfully`)
        navigate('/admin/bookList')
    }

    


    return (
        <div className="addBooks">
            <h1>Add A Book</h1>
            <div className="addBook_form">
                <form onSubmit={handleSubmit} action="">
                    <div className="form_div title">
                        <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" required placeholder="Title of the book"/>
                    </div>
                    <div className="form_div pagecount">
                        <input value={pagecount} onChange={(e)=>setPagecount(e.target.value)} type="text" required placeholder="Enter page count" />
                    </div>
                    <div className="form_div thumbnailUrl">
                        <input value={thumbnailUrl} onChange={(e)=>setThumbnailUrl(e.target.value)} type="text" required placeholder="Image link of the book" />
                    </div>
                    <div className="form_div shortDescription">
                        <textarea value={shortDescription} onChange={(e)=>setShortDescription(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="form_div longDescription">
                        <textarea value={longDescription} onChange={(e)=>setLongDescription(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="form_div authors">
                        <input value={authors} onChange={(e)=>setAuthors(e.target.value)} type="text" required placeholder="Authors name" />
                    </div>
                    <div className="form_div categories">
                        <input value={categories} onChange={(e)=>setCategories(e.target.value)} type="text" required placeholder="Enter the category" />
                    </div>
                    
                    <button>Add Book</button>
                </form>
            </div>
        </div>);
}

export default AddBooks;