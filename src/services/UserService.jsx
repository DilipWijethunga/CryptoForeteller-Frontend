import axios from "axios";
import Connection from "./connection.json"

const FLASK_API = Connection.localAddress + '/auth/';

class UserService{

    // User login
    login(username, password){
        return axios.post(FLASK_API + "signin", {
            username,
            password
        }).then(response => {
            if(response.data){
                if(response.message === "Unsuccessful") {
                    console.log("Unsuccessful");
                }else{
                    sessionStorage.setItem("user", JSON.stringify(response.data));
                }
            }
            return response.data;
        });
    }

    // User register
    register(full_name, email, username, password, role, image){
        return axios.post(FLASK_API + "signup", {
            full_name,
            username,
            email,
            password,
            role,
            image
        });
    }

    // Get current user
    getCurrentUser() {
        return JSON.parse(sessionStorage.getItem('user'));
    }

    //Remove current user
    logout() {
        sessionStorage.removeItem("user");
        sessionStorage.clear();
        window.location.href = "/";
    }

    getAllUsers() {
        return axios.get(Connection.localAddress + '/user');
    }

}

export default new UserService();