import React, {Fragment} from "react";
import CommonCheckAuth from "../services/CommonAuthCheck";
import CustomerDashboard from "../components/dashboard/customer/CustomerDashboard";
import NavbarCustomer from "../components/dashboard/customer/NavbarCustomer";
import MetaTags from "react-meta-tags";

function CustomerDashboardHome() {
    return (
        <Fragment>
            <MetaTags>
                <title>CRYPTO FORETELLER | Customer Dashboard</title>
                <meta
                    name="description"
                    content="About bitcoin page of CRYPTO FORETELLER"
                />
            </MetaTags>
            <NavbarCustomer/>
            <div>
                <CustomerDashboard/>
            </div>
        </Fragment>
    );
}

export default CommonCheckAuth(CustomerDashboardHome);
