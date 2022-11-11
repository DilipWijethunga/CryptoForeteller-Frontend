import React from "react";
import {Container} from "react-bootstrap";
import ForetellerCard from "../../../containers/currency-forteller/ForetellerCard";
import CommonCheckAuth from "../../../services/CommonAuthCheck";

function CustomerDashboard() {
    return (
        <>
            <Container>
                <ForetellerCard/>
            </Container>
        </>
    );
}

export default CommonCheckAuth(CustomerDashboard);
