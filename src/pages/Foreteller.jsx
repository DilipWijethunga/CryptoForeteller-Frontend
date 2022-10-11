import React, {Fragment} from 'react';
import {useLocation} from "react-router-dom";
import MetaTags from "react-meta-tags";

import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import ForetellerDetail from "../containers/currency-forteller/ForetellerDetail";

function Foreteller() {
    const location = useLocation();
    const {name} = location.state
    const {code} = location.state
    const {image} = location.state

    return (
        <Fragment>
            <MetaTags>
                <title>Foreteller</title>
                <meta
                    name="description"
                    content="About bitcoin page of React JS Crypto Currency Template."
                />
            </MetaTags>
            <LayoutTwo theme="white">

                {/* breadcrumb */}
                <Breadcrumb title="Foreteller"/>

                {/* market table */}
                <ForetellerDetail title={name} coinImage={image} code={code}/>

            </LayoutTwo>
        </Fragment>
    );
}

export default Foreteller;
