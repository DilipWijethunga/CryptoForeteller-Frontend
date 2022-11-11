import React from 'react';
import NavbarCustomer from "../dashboard/customer/NavbarCustomer";
import CommonCheckAuth from "../../services/CommonAuthCheck";

function CustomerProfile(props) {
    return (
        <div>
            <NavbarCustomer/>
            <div>
                <h1>Customer Profile</h1>
            </div>
        </div>
    );
}

export default CommonCheckAuth(CustomerProfile);
