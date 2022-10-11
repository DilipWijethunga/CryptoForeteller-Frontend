import React, {useEffect, useState} from "react";
import NewsService from "../../../services/NewsService";
// import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
    Form,
    OverlayTrigger,
    Tooltip,
} from "react-bootstrap";
import {Link} from "react-router-dom";
import CurrencyDetailsService from "../../../services/CurrencyDetailsService";

function Dashboard() {

    const divBox = {
        height: "50px",
    }
    const divSmallBox = {
        height: '20px'
    }


    let countNews = 1;
    let countCoins = 1;
    const [newsList, setNewsList] = useState([]);
    const [coinsList, setCardData] = useState([]);
    const [countNewsList, setCountNewsList] = useState([]);
    const [countCoinsList, setCountCoinsList] = useState([]);

    useEffect(() => {
        async function dataFetchNews() {
            await NewsService.getAllNews()
                .then(response => response.data)
                .then((data) => {
                    setNewsList(data);
                    setCountNewsList(data);
                }).catch(error => console.log(error.message));
        }

        async function dataFetchCoins() {
            await CurrencyDetailsService.getAllCurrency()
                .then(response => response.data)
                .then((data) => {
                    setCardData(data);
                    setCountCoinsList(data);
                }).catch(error => console.log(error.message));
        }

        dataFetchNews();
        dataFetchCoins();
    }, []);


    return (
        <>
            <div style={divBox}/>
            <Container fluid>
                <Row>
                    <Col lg="6" sm="6">
                        <Card className="card-stats" bg={"success"}>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <div className="numbers">
                                            <p className="card-category color--white text-center">Total Coins</p>
                                            <Card.Title as="h1" className={"color--white text-center"}>{countCoinsList.length}</Card.Title>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer>
                                <hr></hr>
                                <div className="stats color--white">
                                    <i className="fas fa-redo mr-1"></i>
                                    Update Now
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col lg="6" sm="6">
                        <Card className="card-stats" bg={"warning"}>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <div className="numbers">
                                            <p className="card-category color--white text-center">Total News</p>
                                            <Card.Title as="h1" className={"color--white text-center"}>{countNewsList.length}</Card.Title>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer>
                                <hr></hr>
                                <div className="stats text-white">
                                    <i className="far fa-calendar-alt mr-1"></i>
                                    Last day
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg="6"  sm="6">
                        <Container>
                            <div style={divSmallBox}/>
                            <Table striped bordered hover variant='dark'>
                                <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Code</th>
                                    <th>Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    coinsList.length === 0 ?
                                        <tr>
                                            <td>{'Data Not Available!'}</td>
                                            <td>{'Data Not Available!'}</td>
                                            <td>{'Data Not Available!'}</td>
                                            <td>{'Data Not Available!'}</td>
                                        </tr>
                                        :
                                        coinsList.map((coin, key) => (
                                            <tr key={coin._id.$oid}>
                                                <td>{countCoins++}</td>
                                                <td>{coin.name}</td>
                                                <td>{coin.code}</td>
                                                <td>{coin.description}</td>
                                            </tr>
                                        ))
                                }
                                </tbody>
                            </Table>
                        </Container>
                    </Col>
                    <Col lg="6"  sm="6">
                        <Container>
                            <div style={divSmallBox}/>
                            <Table striped bordered hover variant='dark'>
                                <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Author</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Date</th>
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
                                        </tr>
                                        :
                                        newsList.map((news, key) => (

                                            <tr key={news._id.$oid}>
                                                <td>{countNews++}</td>
                                                <td>{news.author}</td>
                                                <td>{news.title}</td>
                                                <td>{news.description}</td>
                                                <td>{news.date.$date}</td>
                                            </tr>
                                        ))
                                }
                                </tbody>
                            </Table>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Dashboard;