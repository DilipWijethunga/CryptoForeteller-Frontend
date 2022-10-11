import React from 'react';
import GaugeChart from 'react-gauge-chart'


function TotalScoreMeter({score}) {
    return (
        <div>
            <div style={{backgroundColor: '#001232FF', width: '20rem', borderRadius: '20px'}}>
                <GaugeChart id="gauge-chart4"
                            nrOfLevels={10}
                            arcsLength={[0.3, 0.5, 0.2]}
                            colors={["#ff0015", "#ffd300", "#38ff00"]}
                            arcWidth={0.3}
                            percent={(score)}
                />
                <h4 className='text-white text-center'>Total Score</h4>
            </div>
        </div>
    );
}

export default TotalScoreMeter;
