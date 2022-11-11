import React, {useEffect, useState} from 'react';
import {Col, Form, Row} from "react-bootstrap";
import CurrencyDetailsService from "../../services/CurrencyDetailsService";
import CurrencyService from "../../services/CurrencyService";
import SectionTitleTwo from "../../components/ui/section-titles/SectionTitleTwo";
import ForetellerDetail from "./ForetellerDetail";

const ForetellerCard = () => {
    const [cardData, setCardData] = useState([]);
    const [coinName, setCoinName] = useState("default");
    const [coinCode, setCoinCode] = useState("default");
    const [coinDescription, setCoinDescription] = useState("default");
    const [coinImage, setCoinImage] = useState("default");
    const [priceData, setPriceData] = useState([]);
    const [volumeData, setVolumeData] = useState([]);
    const [marketCapData, setMarketCapData] = useState([]);


    useEffect(() => {
        async function dataFetch() {
            await CurrencyDetailsService.getAllCurrency()
                .then(response => response.data)
                .then((data) => {
                    setCardData(data);
                }).catch(error => console.log(error.message));
        }

        dataFetch();
    }, []);

    const dataFetch = async (code) => {
        await CurrencyService.getPredictionByCurrencyAction(code, 'price')
            .then(response => response.data)
            .then(response => response.data)
            .then(response => {
                setPriceData(response)
            })
            .catch(error => {
                console.log(error.message)
            });

        await CurrencyService.getPredictionByCurrencyAction(code, 'volume')
            .then(response => response.data)
            .then(response => response.data)
            .then(response => {
                setVolumeData(response)
            })
            .catch(error => {
                console.log(error.message)
            });

        await CurrencyService.getPredictionByCurrencyAction(code, 'market_cap')
            .then(response => response.data)
            .then(response => response.data)
            .then(response => {
                setMarketCapData(response)
            })
            .catch(error => {
                console.log(error.message)
            });
    }

    function handleChange() {
        return <ForetellerDetail
            title={coinName}
            coinImage={coinImage}
            code={coinCode}
            desciption={coinDescription}
            priceData={priceData}
            volumeData={volumeData}
            marketCapData={marketCapData}/>
    }

    const handleCoinType = async (event) => {
        let data = JSON.parse(event.target.value);
        await setCoinName(data.name);
        await setCoinCode(data.code);
        await setCoinImage(data.image);
        await setCoinDescription(data.description);
        await dataFetch(data.code);
        await handleChange();
    }

    const text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    return (<div className="market__table bg--white pt--40 pb--120">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <SectionTitleTwo title="CURRENCY FORETELLER"/>

                    <p className="text-center">Select the currency you want and run the analysis.</p>
                    {/*<h4>Be Aware : </h4>*/}
                    {/*<p>*/}
                    {/*    Done with the foreknowledge or forewarning that there is implied*/}
                    {/*    risk or danger which one must accept as one's own responsibility.*/}
                    {/*</p>*/}
                    <h4 className="text-danger text-center">Be Aware! : Done with the foreknowledge or forewarning that
                        there is implied
                        risk or danger which one must accept as one's own responsibility.</h4>
                    {/*<p className={"text-danger text-center text--italic"}>*/}
                    {/*    [ Done with the foreknowledge or forewarning that there is implied*/}
                    {/*    risk or danger which one must accept as one's own responsibility.]*/}
                    {/*</p>*/}

                </div>
            </div>

            <div className='pt-5'>
                <Row className="g-4 align-items-center justify-content-center">
                    <Form>
                        <Form.Control required as="select"
                                      name={'coinName'}
                                      value={coinName}
                                      onChange={handleCoinType}>

                            <option value={JSON.stringify({name: "default", code: "default", image: "default", description: "default"})}>
                                Select Your Coin
                            </option>
                            {cardData.map((data, idx) => (
                                <option key={idx}
                                        value={JSON.stringify({
                                            name: data.name,
                                            code: data.code,
                                            image: data.image,
                                            description: data.description
                                        })}>
                                    {data.name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form>
                </Row>
                <Row>
                    {coinName === 'default' ? (
                        <div>
                        </div>
                    ) : (
                        <div>
                            {handleChange()}
                        </div>
                    )}
                </Row>
            </div>
        </div>
    </div>);
}

export default ForetellerCard;
