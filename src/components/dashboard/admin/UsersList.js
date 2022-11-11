import React, {useEffect, useState} from "react";
import UserService from "../../../services/UserService";
import Navbar from "../sidebar/Navbar";
import {Container, Table} from "react-bootstrap";
import CommonCheckAuth from "../../../services/CommonAuthCheck";

function UsersList() {
    const [users, setUsers] = useState([]);
    let count = 1;

    const divBox = {
        height: '150px'
    }
    const divSmallBox = {
        height: '20px'
    }

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                await UserService.getAllUsers()
                    .then(response => response.data)
                    .then((data) => {
                        setUsers(data);
                    }).catch(error => console.log(error.message));

            } catch (error) {
                console.error(error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <Navbar/>
            <div style={divBox}/>
            <h2 className="text-center">
                <mark>All Registered User Details</mark>
            </h2>
            <Container>
                <div style={divSmallBox}/>
                <Table striped bordered hover variant='dark'>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Create Date</th>
                        <th>Update Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.length === 0 ?
                            <tr>
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                            </tr>
                            :
                            users.map((user, key) => (

                                <tr key={user._id.$oid}>
                                    <td>{count++}</td>
                                    <td>{user.full_name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>{user.created}</td>
                                    <td>{user.updated}</td>
                                </tr>
                            ))
                    }
                    </tbody>
                </Table>
            </Container>
            <div style={divBox}/>
        </div>
    );
}

export default CommonCheckAuth(UsersList);
