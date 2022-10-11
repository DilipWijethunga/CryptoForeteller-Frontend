import axios from "axios";
import Connection from "./connection.json"

const FLASK_API = Connection.localAddress + '/currency/';

class CurrencyDetailsService {

    getAllCurrency() {
        return axios.get(FLASK_API + 'all');
    }

    getCurrencyById(id) {
        return axios.get(FLASK_API + id);
    }

    deleteCurrencyById(id) {
        return axios.delete(FLASK_API + 'delete/' + id);
    }

    createCurrency(data) {
        return axios.post(FLASK_API + "add", data);
    }

    updateCurrency(data) {
        return axios.put(FLASK_API + "update", data);
    }
}

export default new CurrencyDetailsService();
