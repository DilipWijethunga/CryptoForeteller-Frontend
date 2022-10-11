import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import "../../assets/scss/news.css"
import Navbar from "../dashboard/sidebar/Navbar";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import NewsService from "../../services/NewsService";


// TODO: Validating registration form fields
const requiredField = data => {
    if (!data) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

function EditNews(props) {
    const location = useLocation();
    const {newsId} = location.state
    const {newsTitle} = location.state
    const {newsImage} = location.state
    const {newsDescription} = location.state
    const {newsAuthor} = location.state

    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);

    useEffect(() => {
        async function dataSet() {
            setId(newsId)
            setTitle(newsTitle)
            setImage(newsImage)
            setDescription(newsDescription)
            setAuthor(newsAuthor)
        }

        dataSet();
    }, []);


    const handleAddNews = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        const data = {
            "_id":id,
            "title": title,
            "description": description,
            "author": author,
            "image": image
        }

        NewsService.updateNews(data)
            .then(response => {
                setMessage(response.data);
                setLoading(false);

                window.location.replace("/news-list");
            })
            .catch(error => console.log(error.message));
    };

    return (
        <div>
            {/*style={{ backgroundImage: `url(${LoginImage})`, backgroundSize: 'cover', overflow: 'hidden', }}*/}
            <Navbar/>
            <div className="auth-wrapper-login">
                <div className="auth-inner-login">

                    <Form onSubmit={handleAddNews}>
                        {/*      ref={check => {*/}
                        {/*    form = check;*/}
                        {/*}}>*/}
                        <h3>Edit a news</h3>

                        {!successful && (
                            <div>
                                <div className="form-group">
                                    <label htmlFor="author">Author Name</label>
                                    <Input
                                        type="text"
                                        placeholder="Enter author Name"
                                        className="form-control"
                                        name="author"
                                        value={author}
                                        onChange={e => setAuthor(e.target.value)}
                                        validations={[requiredField]}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <Input
                                        type="text"
                                        placeholder="Enter Title"
                                        className="form-control"
                                        name="title"
                                        value={title}
                                        onChange={e => setTitle(e.target.value)}
                                        validations={[requiredField]}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="image">Image Link</label>
                                    <Input
                                        type="text"
                                        placeholder="Enter Title"
                                        className="form-control"
                                        name="image"
                                        value={image}
                                        onChange={e => setImage(e.target.value)}
                                        validations={[requiredField]}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea
                                        type="text"
                                        placeholder="Enter Description"
                                        className="form-control"
                                        name="description"
                                        value={description}
                                        onChange={e => setDescription(e.target.value)}
                                        style={{height: "100px"}}/>
                                </div>

                                <br></br>

                                <div className="form-group d-grid gap-2">
                                    <button className="btn btn-primary btn-block" disabled={loading}>
                                        {loading && (
                                            <span className="spinner-border spinner-border-sm"> </span>
                                        )}
                                        <span>Edit</span>
                                    </button>
                                </div>
                            </div>
                        )}

                        <br></br>

                        {message && (
                            <div className="form-group">
                                <div
                                    className={successful ? "alert alert-success text-center" : "alert alert-success text-center"}
                                    role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default EditNews;
