import React from 'react';
import GaugeChart from 'react-gauge-chart'
import {Row} from "react-bootstrap";


function ScoreMeter({priceScore, marketCapScore, volumeScore, sentimentScore}) {
    return (
        <div className='pt-5'>
            <Row className='g-4 align-items-center justify-content-center'>
                <div className="mr-2 mt-2 p-2"
                     style={{backgroundColor: '#001232FF', width: '18rem', borderRadius: '20px'}}>
                    <GaugeChart id="gauge-chart1"
                                nrOfLevels={10}
                                arcsLength={[0.2, 0.5, 0.3]}
                                colors={["#ff0015", "#ffd300", "#38ff00"]}
                                arcWidth={0.3}
                                percent={(priceScore) / 100 || 0}
                    />
                    <h4 className='text-white text-center'>Price Score</h4>
                </div>

                <div className="mr-2 mt-2 p-2"
                     style={{backgroundColor: '#001232FF', width: '18rem', borderRadius: '20px'}}>
                    <GaugeChart id="gauge-chart2"
                                nrOfLevels={10}
                                arcsLength={[0.2, 0.5, 0.3]}
                                colors={["#ff0015", "#ffd300", "#38ff00"]}
                                arcWidth={0.3}
                                percent={(marketCapScore) / 100 || 0}
                    />
                    <h4 className='text-white text-center'>Market Cap Score</h4>
                </div>

                <div className="mr-2 mt-2 p-2"
                     style={{backgroundColor: '#001232FF', width: '18rem', borderRadius: '20px'}}>
                    <GaugeChart id="gauge-chart3"
                                nrOfLevels={10}
                                arcsLength={[0.2, 0.5, 0.3]}
                                colors={["#ff0015", "#ffd300", "#38ff00"]}
                                arcWidth={0.3}
                                percent={(volumeScore) / 100 || 0}
                    />
                    <h4 className='text-white text-center'>Volume Score</h4>
                </div>

                <div className="mr-2 mt-2 p-2"
                     style={{backgroundColor: '#12005e', width: '25rem', borderRadius: '20px'}}>
                    <GaugeChart id="gauge-chart3"
                                nrOfLevels={10}
                                arcsLength={[0.2, 0.5, 0.3]}
                                colors={["#ff0015", "#ffd300", "#38ff00"]}
                                arcWidth={0.3}
                                percent={((priceScore + marketCapScore + volumeScore + sentimentScore) / 4) / 100 || 0}
                    />
                    <h4 className='text-white text-center'>Total Score</h4>
                </div>
            </Row>
        </div>
    );
}

export default ScoreMeter;
