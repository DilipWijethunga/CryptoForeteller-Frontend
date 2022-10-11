import React, {useEffect, useState} from "react";

import MarketService from "../../services/MarketService";
import SectionTitleTwo from "../../components/ui/section-titles/SectionTitleTwo";
import TableSample from "./TableSample";

const MarketTable = () => {

    const [marketData, setMarketData] = useState([]);

    useEffect(() => {
        async function dataFetch() {
            MarketService.getCoinDta()
                .then(response => response.data)
                .then((data) => {
                    let newArray = data.slice(0, 5);
                    setMarketData(newArray);
                }).catch(error => console.log(error.message));
        }

        dataFetch();
    }, []);


    return (<div className="market__table bg--white pt--140">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <SectionTitleTwo title="CRYPTO CURRENCY PRICES"/>
                    {/*<p className='text-center'>The Bitcoin ecosystem at a glance. Any of our service with free test credits or actual*/}
                    {/*    Bitcoins.</p>*/}
                    <br/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 table-responsive">
                    <table className="mkt__pre__list">
                        <thead>
                        <tr>
                            <th className="market-no text-center">
                                <span className="nobr">Symbol</span>
                            </th>
                            <th className="market-symbol text-center">Name</th>
                            <th className="market-prize text-center">
                                <span className="nobr">USD Price</span>
                            </th>
                            <th className="market-volume text-center">
                                <span className="nobr">Change 24h</span>
                            </th>
                            <th className="market-dat text-center">
                                <span className="nobr">Change 7d</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {marketData.length === 0 ?
                            <TableSample/>
                            : marketData.map((data, key) => (
                                <tr key={key}>
                                    <td className="market-symbol text-uppercase text-center">{data.symbol}</td>
                                    <td className="market-no text-center">{data.name}</td>
                                    <td className="market-prize text-center">$ {(data.market_data.current_price.usd).toFixed(2)}</td>
                                    <td className="market-volume text-center">{(data.market_data.price_change_percentage_24h).toFixed(2)} %</td>
                                    <td className="market-dat text-center">{(data.market_data.price_change_percentage_7d).toFixed(2)} %</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>);
};

export default MarketTable;
