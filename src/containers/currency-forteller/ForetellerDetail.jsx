import React, {useEffect, useState} from 'react';
import {Card, Col, Image, Row} from "react-bootstrap";
import CurrencyService from "../../services/CurrencyService";
import CoinService from "../../services/CoinService";
import fileDownload from "js-file-download";
import ScoreMeter from "./ScoreMeter";


const ForetellerDetail = ({title, coinImage, code, desciption, priceData, volumeData, marketCapData}) => {

    const [sentimentData, setSentimentData] = useState([]);

    useEffect(() => {
        async function dataFetch() {
            await CurrencyService.getSentiment()
                .then(response => response.data)
                .then((data) => {
                    setSentimentData(data);
                })
                .catch(error => console.log(error.message));
        }

        dataFetch();
    }, []);

    const handleDownload = (e) => {
        e.preventDefault();

        // Current Date
        const date = new Date();
        const format_date = date.toISOString().substring(0, 10);
        const file_name = code + '_' + format_date + '.csv'

        CoinService.getSavedDataCSVByCoinName(code)
            .then(res => {
                fileDownload(res.data, file_name);
            }).catch(error => console.log(error.message));
    };

    const parentDiv = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <div className="dg__software__area bg--white pt-5">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="dg__software__inner">
                            {/* COIN NAME */}
                            <h1 className='text-center'>{title}</h1>

                            {/* COIN IMAGE */}
                            <div className='py-4'>
                                <Image src={coinImage}
                                       className='mx-auto d-block'
                                       alt={title}
                                       width={120}
                                       height={120}/>
                            </div>

                            <Row>
                                {/* COIN DATA TABLE */}
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

                                {/* SENTIMENT DATA */}
                                <Col className=' col-3'>
                                    <div style={{paddingTop: '0.5em'}}>
                                        {sentimentData ? (
                                            <div>
                                                {sentimentData.sentiment === 'Positive' ? (
                                                    <Card
                                                        bg='success'
                                                    >
                                                        <Card.Header
                                                            className='text-center text-white text-uppercase font-weight-bold'>Sentiment
                                                            Analysis</Card.Header>
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
                                                        <Card.Header
                                                            className='text-center text-white text-uppercase font-weight-bold'>Sentiment
                                                            Analysis</Card.Header>
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
                                                    <Card.Header
                                                        className='text-center text-white text-uppercase font-weight-bold'></Card.Header>
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

                    {/* COIN DESCRIPTION */}
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9 pt--30">
                        <div>
                            <p>{desciption}</p>
                        </div>
                    </div>

                    {/* HISTORY DATA DOWNLOAD */}
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3 pt--30">
                        <div style={parentDiv}>
                            <h3 className={'text-uppercase'}>History Data</h3>
                        </div>

                        <div style={parentDiv}>
                            <button onClick={handleDownload} className="btn btn-success">Download</button>
                        </div>
                    </div>

                    {/* SCORE METERS */}
                    <div>
                        <ScoreMeter
                            priceScore={priceData.score}
                            volumeScore={volumeData.score}
                            marketCapScore={marketCapData.score}
                            sentimentScore={sentimentData.score}/>
                    </div>
                </div>

                {/*<div style={parentDiv} className={'pt--40'}>*/}
                {/*    <h3 className={'text-uppercase'}>History Data</h3>*/}
                {/*</div>*/}

                {/*<div style={parentDiv}>*/}
                {/*    <button onClick={handleDownload} className="btn btn-success">Download</button>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default ForetellerDetail;
