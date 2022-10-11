import Navbar from "../dashboard/sidebar/Navbar";
import {Button, Container, Table} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import NewsService from "../../services/NewsService";
import Connection from "../../services/connection.json";

import Modal from "react-bootstrap/Modal";

const FLASK_API = Connection.localAddress + '/news';

function NewsList(props) {
    const divBox = {
        height: '150px'
    }
    const divSmallBox = {
        height: '20px'
    }

    let count = 1;
    const [newsList, setNewsList] = useState([]);
    const [show, setShow] = useState(false);
    const [newsId, setNewsId] = useState("");


    useEffect(() => {
        async function dataFetch() {
            await NewsService.getAllNews()
                .then(response => response.data)
                .then((data) => {
                    setNewsList(data)
                }).catch(error => console.log(error.message));
        }

        dataFetch();
    }, []);

    const handleDelete = async (id) => {
        await NewsService.deleteNewsById(id)
            .then(response => response.data)
            .then((data) => {
                console.log(data)
            }).catch(error => {
                console.log(error.message);
            });
    }

    const handleClose = () => {
        setShow(false);
    }

    const handleShow = (id) => {
        setNewsId(id);
        setShow(true);
    }

    const onClickNewsDelete = (id) => {
            setShow(true);
            handleDelete(id);
            window.location.reload();
    }

    return (
        <div>
            {/*style={{*/}
            {/*backgroundImage: `url(${RegistrationBackground})`,*/}
            {/*backgroundSize: 'cover',*/}
            {/*overflow: 'hidden',}}*/}
            <Navbar/>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>this delete cannot be undone!</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="danger" onClick={()=> onClickNewsDelete(newsId)} >Delete</Button>
                </Modal.Footer>
            </Modal>
            <div style={divBox}/>
            <Container>
                <div >
                    <Link to={`/add-news`} className={'btn btn-success text-white'}>Add a News</Link>
                </div>
                <div style={divSmallBox}/>
                <Table striped bordered hover variant='dark'>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Author</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Image Link</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        newsList.length === 0 ?
                            <tr>
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                            </tr>
                            :
                            newsList.map((news, key) => (

                                <tr key={news._id.$oid}>
                                    <td>{count++}</td>
                                    <td>{news.author}</td>
                                    <td>{news.title}</td>
                                    <td>{news.description}</td>
                                    <td>{news.date.$date}</td>
                                    <td>{news.image}</td>
                                    <td><Link to={{
                                        pathname: process.env.PUBLIC_URL + '/edit-news',
                                        state: {
                                            newsId: news._id.$oid,
                                            newsTitle: news.title,
                                            newsImage: news.image,
                                            newsDescription: news.description,
                                            newsAuthor: news.author
                                        }
                                    }}
                                              className={'btn btn-primary'}>Edit</Link>
                                    </td>
                                    <td>
                                        <Link onClick={()=> handleShow(news._id.$oid)}    className={'btn btn-danger'}>Delete</Link>
                                    </td>
                                </tr>
                            ))
                    }
                    </tbody>
                </Table>
            </Container>
            <div style={divBox}/>
        </div>
    );
}

export default NewsList;
