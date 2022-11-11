import React, {Fragment, useEffect} from "react";
import MetaTags from "react-meta-tags";
import {Link} from "react-router-dom";
import LayoutTwo from "../layouts/LayoutTwo";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import Form from "react-validation/build/form";
import UserService from "../services/UserService";
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";


const LoginRegister = () => {


    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [fullName, setFullName] = React.useState("");
    const [role, setRole] = React.useState("");
    const [imageLink, setImage] = React.useState("");
    const [responseMessage, setResponseMessage] = React.useState("");
    const [errorTitle, setErrorTitle] = React.useState("");
    const [show, setShow] = React.useState(false);

    useEffect(() => {
        setRole("Customer");
        setImage("https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg");
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmitLogin = async (event) => {
        event.preventDefault();

        await UserService.login(username, password).then(response => {
            if (response.code === 200) {
                if (response.message === "Unsuccessful") {
                    setResponseMessage(response.data);
                    setErrorTitle("Login Failed!");
                    handleShow();
                } else {
                    window.location.href = "/";
                }
            }

        }, error => {
            setResponseMessage(error.message);
            setErrorTitle("Login Failed!");
            handleShow();
        });
    }


    const handleSubmitRegister = async (event) => {
        event.preventDefault();

        if (password.length >= 6) {
            if (password === confirmPassword) {
                await UserService.register(fullName, email, username, password, role, imageLink).then(response => {
                    if (response.data.message === "Unsuccessful") {
                        setResponseMessage(response.data.data);
                        setErrorTitle("Registration Failed!");
                        handleShow();
                    } else {
                        window.location.href = "/login";
                    }
                }, error => {
                    setResponseMessage(error.message);
                    setErrorTitle("Registration Failed!");
                    handleShow();
                });
            } else {
                setErrorTitle("Password Mismatch!");
                setResponseMessage("Passwords do not match!");
                handleShow();
            }
        } else {
            setErrorTitle("Password too short!");
            setResponseMessage("Password must be at least 6 characters long");
            handleShow();
        }
    }
    return (
        <Fragment>
            <MetaTags>
                <title>CRYPTO FORETELLER | Login</title>
                <meta
                    name="description"
                    content="Login page of CRYPTO FORETELLER"
                />
            </MetaTags>
            <LayoutTwo theme="white">
                {/* breadcrumb */}
                <Breadcrumb title="LOGIN"/>
                <div className="login-register-area pt-100 pb-100">
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{errorTitle}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{responseMessage}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                try again
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                {/* login register content */}
                <div className="dg__account section-padding--xl">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tab.Container defaultActiveKey="login">
                                    <Nav
                                        variant="pills"
                                        className="acount__nav justify-content-center"
                                    >
                                        <Nav.Item>
                                            <Nav.Link eventKey="login">Login</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="register">Register</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="login">
                                            <Form onSubmit={handleSubmitLogin}>
                                                <div className="single__account">
                                                    <div className="input__box">
                                                        <span>Username</span>
                                                        <input type="text"
                                                               placeholder={"Ex: JohnDoe"}
                                                               value={username}
                                                               onChange={e => setUsername(e.target.value)}
                                                               required
                                                        />
                                                    </div>
                                                    <div className="input__box">
                                                        <span>Password</span>
                                                        <input type="password"
                                                               placeholder={"Ex: ********"}
                                                               value={password}
                                                               onChange={e => setPassword(e.target.value)}
                                                               required
                                                        />
                                                    </div>
                                                    {/*<Link*/}
                                                    {/*    className="forget__pass"*/}
                                                    {/*    href={process.env.PUBLIC_URL + "/"}*/}
                                                    {/*>*/}
                                                    {/*    Lost your password?*/}
                                                    {/*</Link>*/}
                                                    <br/>
                                                    <button className="account__btn">Login</button>
                                                </div>
                                            </Form>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="register">
                                            <Form onSubmit={handleSubmitRegister}>
                                                <div className="single__account">
                                                    <div className="input__box">
                                                        <span>Full Name</span>
                                                        <input type="text"
                                                               placeholder={"Ex: John Doe"}
                                                               value={fullName}
                                                               onChange={e => setFullName(e.target.value)}
                                                               required
                                                        />
                                                    </div>
                                                    <div className="input__box">
                                                        <span>Email address</span>
                                                        <input type="email"
                                                               placeholder={"Ex: abc@gmail.com"}
                                                               value={email}
                                                               onChange={e => setEmail(e.target.value)}
                                                               required
                                                        />
                                                    </div>
                                                    <div className="input__box">
                                                        <span>Username</span>
                                                        <input type="text"
                                                               placeholder={"Ex: JohnDoe"}
                                                               value={username}
                                                               onChange={e => setUsername(e.target.value)}
                                                               required
                                                        />
                                                    </div>
                                                    <div className="input__box">
                                                        <span>Password</span>
                                                        <input type="password"
                                                               placeholder={"Ex: ********"}
                                                               value={password}
                                                               onChange={e => setPassword(e.target.value)}
                                                               required
                                                        />
                                                    </div>
                                                    <div className="input__box">
                                                        <span>Confirm Password</span>
                                                        <input type="password"
                                                               placeholder={"Ex: ********"}
                                                               value={confirmPassword}
                                                               onChange={e => setConfirmPassword(e.target.value)}
                                                               required
                                                        />
                                                    </div>
                                                    <br/>
                                                    <button className="account__btn">Register</button>
                                                </div>
                                            </Form>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutTwo>
        </Fragment>
    );
};

export default LoginRegister;
