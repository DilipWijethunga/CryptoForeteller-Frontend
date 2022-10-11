import React, {useEffect, useState} from 'react';
import {Card, Col, Image, Row} from "react-bootstrap";
import CurrencyService from "../../services/CurrencyService";
import ScoreMeter from "./ScoreMeter";


const ForetellerDetail = ({title, coinImage, code, priceData, volumeData, marketCapData}) => {

    const [sentimentData, setSentimentData] = useState([]);

    useEffect(() => {
        async function dataFetch() {
            await CurrencyService.getSentiment()
                .then(response => response.data)
                .then((data) => {
                    setSentimentData(data);
                    console.log(data)
                })
                .catch(error => console.log(error.message));
        }

        dataFetch();
    }, []);

    return (
        <div className="dg__software__area bg--white pt-5">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="dg__software__inner">
                            <h1 className='text-center'>{title}</h1>

                            <div className='py-4'>
                                <Image src={coinImage}
                                       className='mx-auto d-block'
                                       alt={title}
                                       width={120}
                                       height={120}/>
                            </div>

                            <Row>
                                <Col className='pt-3 text-left col-9'>
                                    <Row>
                                        <Col>
                                            <div></div>
                                        </Col>
                                        <Col className='text-right'>
                                            <div>
                                                <h4>Today</h4>
                                            </div>
                                        </Col>
                                        <Col className='text-right'>
                                            <div>
                                                <h4>Tomorrow</h4>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={{backgroundColor: '#e8eaf6'}}>
                                            <div>
                                                <h4>USD Price</h4>
                                            </div>
                                        </Col>
                                        <Col style={{backgroundColor: '#e8eaf6'}}
                                             className='text-right font-weight-bold'>
                                            <div>
                                                <p>$ {priceData.today}</p>
                                            </div>
                                        </Col>
                                        <Col style={{backgroundColor: '#e8eaf6'}}
                                             className='text-right font-weight-bold'>
                                            <div>
                                                <p>$ {priceData.tomorrow}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={{backgroundColor: '#e3f2fd'}}>
                                            <div>
                                                <h4>24H Volume</h4>
                                            </div>
                                        </Col>
                                        <Col style={{backgroundColor: '#e3f2fd'}}
                                             className='text-right font-weight-bold'>
                                            <div>
                                                <p>$ {volumeData.today}</p>
                                            </div>
                                        </Col>
                                        <Col style={{backgroundColor: '#e3f2fd'}}
                                             className='text-right font-weight-bold'>
                                            <div>
                                                <p>$ {volumeData.tomorrow}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style={{backgroundColor: '#e1f5fe'}}>
                                            <div>
                                                <h4>Market Cap</h4>
                                            </div>
                                        </Col>
                                        <Col style={{backgroundColor: '#e1f5fe'}}
                                             className='text-right font-weight-bold'>
                                            <div>
                                                <p>$ {marketCapData.today}</p>
                                            </div>
                                        </Col>
                                        <Col style={{backgroundColor: '#e1f5fe'}}
                                             className='text-right font-weight-bold'>
                                            <div>
                                                <p>$ {marketCapData.tomorrow}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className=' col-3'>
                                    <div style={{paddingTop:'0.5em'}}>
                                        {sentimentData ? (
                                            <div>
                                                {sentimentData.sentiment === 'Positive' ? (
                                                    <Card
                                                        bg='success'
                                                    >
                                                        <Card.Header className='text-center text-white text-uppercase font-weight-bold'>Sentiment Analysis</Card.Header>
                                                        <Card.Body>
                                                            <div className='text-center text-white'>
                                                                <h4 className='text-white'>Status: {sentimentData.sentiment}</h4>
                                                                <h4 className='text-white'>Score: {sentimentData.score}%</h4>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                ) : (
                                                    <Card
                                                        bg='danger'
                                                    >
                                                        <Card.Header className='text-center text-white text-uppercase font-weight-bold'>Sentiment Analysis</Card.Header>
                                                        <Card.Body>
                                                            <div className='text-center text-white'>
                                                                <h4 className='text-white'>Status: {sentimentData.sentiment}</h4>
                                                                <h4 className='text-white'>Score: {sentimentData.score}%</h4>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                )}
                                            </div>
                                        ) : (
                                            <div>
                                                <Card
                                                    bg='primary'
                                                >
                                                    <Card.Header className='text-center text-white text-uppercase font-weight-bold'></Card.Header>
                                                    <Card.Body>
                                                        <Card.Title></Card.Title>
                                                        <div className='text-center text-white'>
                                                            <h4 className='text-white text-uppercase'></h4>
                                                            <h4 className='text-white text-uppercase'></h4>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        )}

                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div>
                        <ScoreMeter
                            priceScore={priceData.score}
                            volumeScore={volumeData.score}
                            marketCapScore={marketCapData.score}
                            sentimentScore={sentimentData.score}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForetellerDetail;
