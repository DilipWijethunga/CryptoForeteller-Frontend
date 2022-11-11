import React, {useEffect, useState} from "react";
import BlogSidebar from "../../components/blog/BlogSidebar";
import {useParams} from "react-router-dom";
import NewsService from "../../services/NewsService";

const BlogPostContent = () => {

    const id = useParams().id;

    const [newsTitle, setNewsTitle] = useState("");
    const [newsDateTime, setNewsDateTime] = useState("");
    const [newsAuthor, setNewsAuthor] = useState("");
    const [newsDescription, setNewsDescription] = useState("");
    const [newsImage, setNewsImage] = useState("");
    const [successful, setSuccessful] = useState(false);


    useEffect(() => {
        async function dataFetch() {
            await NewsService.getNewsById(id)
                .then(response => response.data)
                .then((data) => {
                    if (data) {
                        setSuccessful(true);
                        setNewsTitle(data.title);
                        setNewsDateTime(data.date.$date);
                        setNewsAuthor(data.author);
                        setNewsDescription(data.description);
                        setNewsImage(data.image);
                    }
                }).catch(error =>
                        console.log(error.message),
                    setSuccessful(false),
                );
        }

        dataFetch();
    }, []);

    return (
        <div className="dg__blog__area bg--white section-padding--xl">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                        <div className="dg__blog__details right--sidebar">
                            {successful && (
                                <div className="dg__blog__dtl">
                                    <div className="thumb">
                                        <img src={newsImage} alt="blog images"/>
                                    </div>
                                    <div className="content">
                                        <h2>
                                            {newsTitle}
                                        </h2>
                                        <p style={{textAlign: "justify"}}>
                                            {newsDescription}
                                        </p>

                                        <div style={{textAlign: "end", fontStyle: "italic", color: "red"}}>
                                            <span> ✒️{' '} Post by: {newsAuthor}</span>
                                            <span> 📆 {' '} Date : {newsDateTime}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="comment__form__area">
                                <br/>
                                <br/>
                                <h2 className="blog__title">Leave a Comment</h2>
                                <form action="#">
                                    <div className="comment__box">
                                        <div className="input__box name">
                                            <input type="text" placeholder="Name"/>
                                            <input type="text" placeholder="Email"/>
                                        </div>
                                        <div className="input__box">
                                            <textarea placeholder="Massage" defaultValue={""}/>
                                        </div>
                                        <div className="submit__btn">
                                            <button>SEND Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* End Comment Form */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
                        {/* sidebar */}
                        <BlogSidebar/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPostContent;
