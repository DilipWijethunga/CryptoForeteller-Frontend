import React, {useEffect, useState} from "react";
import NewsService from "../../../services/NewsService";
import {
    Card,
    Container,
    Row,
    Col,
} from "react-bootstrap";
import CurrencyDetailsService from "../../../services/CurrencyDetailsService";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';
import {Bar, Pie} from 'react-chartjs-2';
import MarketService from "../../../services/MarketService";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

function Dashboard() {

    const divBox = {
        height: "50px",
    }
    const divSmallBox = {
        height: '20px'
    }
    const divForPieChart = {
        textAlign: "-webkit-center"
    }

    const [newsList, setNewsList] = useState([]);
    const [coinsList, setCardData] = useState([]);
    const [countNewsList, setCountNewsList] = useState([]);
    const [countCoinsList, setCountCoinsList] = useState([]);
    const [marketData, setMarketData] = useState([]);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly Average News',
            },
        },
    };

    const labels = ['July', 'August', 'September', 'October', 'November', 'December'];

    const news = {
        newsData: [1, 5, 6, 8, newsList.length]
    }

    const dataForNews = {
        labels,
        datasets: [
            {
                label: 'News',
                data: news.newsData,
                backgroundColor: 'rgba(99,200,255,0.5)',
            }
        ],
    };

    const dataForCoins = {
        labels: marketData.map((coin) => coin.name),
        datasets: [
            {
                label: 'Coins Market Cap',
                data: marketData.map((coin) => coin.market_data.current_price.usd),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

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

        async function dataFetchMarket() {
            MarketService.getCoinDta()
                .then(response => response.data)
                .then((data) => {
                    let newArray = data.slice(0, 5);
                    setMarketData(newArray);
                }).catch(error => console.log(error.message));
        }

        dataFetchNews();
        dataFetchCoins();
        dataFetchMarket();
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
                                            <Card.Title as="h1"
                                                        className={"color--white text-center"}>{countCoinsList.length}</Card.Title>
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
                                            <Card.Title as="h1"
                                                        className={"color--white text-center"}>{countNewsList.length}</Card.Title>
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
                    <Col lg="6" sm="6">
                        <Container>
                            <div style={divForPieChart}>
                                <div style={divSmallBox}/>
                                <div style={{width: "300px", height: "300px"}}>
                                    <Pie data={dataForCoins}/>
                                </div>
                            </div>
                        </Container>
                    </Col>
                    <Col lg="6" sm="6">
                        <Container>
                            <div style={divSmallBox}/>
                            <div>
                                <Bar options={options} data={dataForNews}/>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Dashboard;