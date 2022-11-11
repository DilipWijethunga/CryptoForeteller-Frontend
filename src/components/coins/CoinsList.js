import Navbar from "../dashboard/sidebar/Navbar";
import {Button, Container, Table} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import CurrencyDetailsService from "../../services/CurrencyDetailsService";
import Modal from "react-bootstrap/Modal";
import CommonAuthCheck from "../../services/CommonAuthCheck";

function CoinsList(props) {
    const divBox = {
        height: '150px'
    }
    const divSmallBox = {
        height: '20px'
    }

    let count = 1;
    const [coinsList, setCardData] = useState([]);
    const [show, setShow] = useState(false);
    const [coinId, setCoinId] = useState("");

    useEffect(() => {
        async function dataFetch() {
            await CurrencyDetailsService.getAllCurrency()
                .then(response => response.data)
                .then((data) => {
                    setCardData(data)
                }).catch(error => console.log(error.message));
        }

        dataFetch();
    }, []);

    const handleDelete = async (id) => {
        await CurrencyDetailsService.deleteCurrencyById(id)
            .then(response => response.data)
            .catch(error => {
                console.log(error.message);
            });
    }

    const handleClose = () => {
        setShow(false);
    }

    const handleShow = (id) => {
        setCoinId(id);
        setShow(true);
    }

    const onClickCoinDelete = (id) => {
        setShow(true);
        handleDelete(id);
        window.location.reload();
    }

    return (
        <div>
            {/*style={{*/}
            {/*backgroundImage: `url(${RegistrationBackground})`,*/}
            {/*backgroundSize: 'cover',*/}
            {/*overflow: 'hidden',}}*/}
            <Navbar/>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>this delete cannot be undone!</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="danger" onClick={()=> onClickCoinDelete(coinId)} >Delete</Button>
                </Modal.Footer>
            </Modal>
            <div style={divBox}/>
            <h2 className="text-center"><mark>All Coins Details</mark></h2>
            <Container>
                <div>
                    <Link to={`/add-coin`} className={'btn btn-success text-white'}>Add New Coin</Link>
                </div>
                <div style={divSmallBox}/>
                <Table striped bordered hover variant='dark'>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Description</th>
                        <th>Image Path</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        coinsList.length === 0 ?
                            <tr>
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                                <td>{'Data Not Available!'}</td>
                            </tr>
                            :
                            coinsList.map((coin, key) => (
                                <tr key={coin._id.$oid}>
                                    <td>{count++}</td>
                                    <td>{coin.name}</td>
                                    <td>{coin.code}</td>
                                    <td>{coin.description}</td>
                                    <td>{(coin.image).substring(0,30)}...</td>
                                    <td>
                                        <Link to={{
                                            pathname: process.env.PUBLIC_URL + '/coin-edit',
                                            state: {
                                                coinId: coin._id.$oid,
                                                coinName: coin.name,
                                                coinCode: coin.code,
                                                coinDescription: coin.description,
                                                coinImagePath: coin.image
                                            }
                                        }}
                                              className={'btn btn-primary text-white'}>Edit</Link>
                                    </td>
                                    <td>
                                        <Link onClick={()=> handleShow(coin._id.$oid)} className={'btn btn-danger text-white'}>Delete</Link>
                                    </td>
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

export default CommonAuthCheck(CoinsList);
