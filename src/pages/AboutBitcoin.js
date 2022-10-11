import React, {Fragment} from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import MarketTable from "../containers/market-tables/MarketTable";
import ForetellerCard from "../containers/currency-forteller/ForetellerCard";

const AboutBitcoin = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>CRYPTO FORETELLER | Coins</title>
                <meta
                    name="description"
                    content="About bitcoin page of CRYPTO FORETELLER"
                />
            </MetaTags>
            <LayoutTwo theme="white">

                {/* breadcrumb */}
                <Breadcrumb title="Coins"/>

                {/* market table */}
                <MarketTable/>

                {/*Foreteller Cards List*/}
                <ForetellerCard/>

            </LayoutTwo>
        </Fragment>
    );
};

export default AboutBitcoin;
